import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import {URL} from '../url';

@Injectable({
  providedIn: 'root'
})
export class RoleApiService {

  constructor(private http:HttpClient) { }

  getRoleList()
  {
   return this.http.get<{name:string,key:string}[]>(URL + '/roles').pipe(
      map(
        response =>
        {
          const list:{name:string,key:string}[] = [];
          response.forEach(res => {
           list.push(res);
          })
         return list;
        }
      )
    ); 
  }

  /* getRoleKey(name:string)
  {
    return lastValueFrom(this.http.get<{key:string}[]>(URL+'/roles/'+`${name}`));
  } */
}
