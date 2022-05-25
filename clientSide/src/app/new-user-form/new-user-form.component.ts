import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TableServiceService } from '../services/api.service';
import { CustomerApiService } from '../services/customer-api.service';
import { RoleApiService } from '../services/role-api.service';

@Component({
  selector: 'new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  customerList: {name:string,id:number}[] = [];
  roleList: {name:string,key:string}[] = [];

  @Output() onSubmit = new EventEmitter();
  constructor(private customers:CustomerApiService,private roles:RoleApiService,private userService:TableServiceService) {
    
   }

  ngOnInit(): void {
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

  submit(form:NgForm)
  {
    this.onSubmit.emit(form.value);
    
  }

}
