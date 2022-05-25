import { Component, OnInit } from '@angular/core';
import { TableServiceService } from '../services/api.service';
import { User} from '../user.model';
import { CustomerApiService } from '../services/customer-api.service';
import { RoleApiService } from '../services/role-api.service';
import {CRUD} from '../crudInterface';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,CRUD<User> {
 
 cols: string[] = [];
 users:User[] = [];
 isEditable: boolean[] = [];
 customerList: {name:string,id:number}[] = [];
 roleList: {name:string,key:string}[] = [];
 isNewUser: boolean = false;
 
 constructor(private api:TableServiceService,private customers:CustomerApiService,private roles:RoleApiService)
  {
    
  }

  ngOnInit(): void {

    this.load();
  }

  load()
  {
   this.api.readData().subscribe(
      data => {
        for (let key in data[0]) {
          if (key !== "id" && key !== "customerId" && key !== "role") {
            this.cols.push(key);
          }
        }
        
        data.forEach((d:any) => {
          this.users.push(new User(d.firstname, d.middlename, d.lastname, d.email, d.phone, d.roles.name, d.address, d.customer.name, d.created_on, d.modified_on,d.id));
          this.isEditable.push(false);
        });
      }
    );
  }
  
  create(user: User){
      
    const body = {
      "firstname": user.firstname,
      "middlename": user.middlename,
      "lastname": user.lastname,
      "email": user.email,
      "phone": user.phone,
      "address": user.address,
      "role": user.role,
      "customerId": parseInt(user.customerId as string),
      "created_on": new Date().toLocaleString('en-US'),
      "modified_on": new Date().toLocaleString('en-US')
 }
      console.log(body);
      this.api.create(body).subscribe(
        res =>
        {
          this.refresh();
        }
      );
      
  }
  read(): User[] {
      return this.users;
  }

  update(index:number)
  {
    this.isEditable[index] = true;
    this.customers.getCustomerList().subscribe(
    data =>
    {
      this.customerList = data;
    }
    );
    this.roles.getRoleList().subscribe(
      data =>
      {
        this.roleList = data;
      }
    )
  }
  
  save(user:User,index:number,row:HTMLTableRowElement)
  {
    this.isEditable[index] = false;
    
    let selectRoleEle = row.cells.namedItem('roleContainer')!.children[0] as HTMLSelectElement;
    let selectedRole = selectRoleEle.children[selectRoleEle.selectedIndex].textContent!;
    
    let selectCustEle = row.cells.namedItem('customerContainer')!.children[0] as HTMLSelectElement;
    let selectedCustomer = selectCustEle.children[selectCustEle.selectedIndex].textContent!;

    const body = {
         "id": user.id,
         "firstname": row.cells.namedItem('fName')!.textContent!,
         "middlename": row.cells.namedItem('mName')!.textContent!,
         "lastname": row.cells.namedItem('lName')!.textContent!,
         "email": row.cells.namedItem('email')!.textContent!,
         "phone": row.cells.namedItem('phone')!.textContent!,
         "address": row.cells.namedItem('address')!.textContent!,
         "role": selectRoleEle.value,
         "customerId": parseInt(selectCustEle.value),
         "created_on": user.created_on,
         "modified_on": new Date()
    }
    this.api.update(user.id!,body).subscribe();
    user.firstname = row.cells.namedItem('fName')!.textContent!;
    user.middlename = row.cells.namedItem('mName')!.textContent!;
    user.lastname = row.cells.namedItem('lName')!.textContent!;
    user.email = row.cells.namedItem('email')!.textContent!;
    user.phone = row.cells.namedItem('phone')!.textContent!;
    user.address = row.cells.namedItem('address')!.textContent!;
    user.customerId = selectedCustomer;
    user.role = selectedRole;

    this.refresh();
  }

  delete(user: User,index:number)
  {
    this.api.deleteData(user.id!);
    this.users.splice(index,1);
  }

  cancel(index:number)
  {
    this.isEditable[index] = false;
    this.refresh();
  }
  refresh()
  {
    this.users = [];
    this.cols = [];
    this.isEditable = [];
    this.load();
  }
}



