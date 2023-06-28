import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {debounceTime,map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl= environment.baseURL;

  constructor(private http:HttpClient) { }

  fetchSearchData(query:string):Observable<any>{
      return this.http.get(this.baseUrl).pipe(
        debounceTime(300),
        map((data:any)=>{
          return data.filter((item:any)=> item.title.toLowerCase().includes(query.toLowerCase()))
        })
      )
  }
}
