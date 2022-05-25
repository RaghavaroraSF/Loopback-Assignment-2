import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import {URL} from '../url';


@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
 
  constructor(private http:HttpClient) { }

  create(body:User)
  {
    return this.http.post(URL+'/users',body);

  }
  readData()
  {
    const url =`${URL}/users?filter[include][]=customer&filter[include][]=roles`;
    return this.http.get<User[]>(url);    
  }

  update(id:number,body:Object)
  {
    return this.http.put(URL+'/users'+`/${id}`,body);
  }
  
  deleteData(id:number)
  {
    this.http.delete(URL+'/users'+`/${id}`).subscribe();
  }

}

