import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTaskService {

  
  url="http://localhost:8080/my-task";

  constructor(private http:HttpClient) { }

  getTasks():Observable<Object>{
    
    return this.http.get(this.url,{
      params: {
        id: 'Arumugam201' 
      }});
  }
}
