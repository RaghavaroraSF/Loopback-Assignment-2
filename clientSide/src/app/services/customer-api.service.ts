import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import {URL} from '../url';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  customerList: string[] = [];
  constructor(private http:HttpClient) { }

  getCustomerList()
  {
   return this.http.get<{name:string,id:number}[]>(URL + '/customers').pipe(
      map(
        response =>
        {
          const list:{name:string,id:number}[] = [];
          response.forEach(res => {
          list.push(res);
          })
         return list;
        }
      )
    ); 
  }
}
