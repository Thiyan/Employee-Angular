import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  url="http://localhost:8080/manager/requests";
  url2="http://localhost:8080/manager/my-reply"
  ;

  constructor(private http:HttpClient) { }

  getReplies():Observable<Object>{
    
    return this.http.get(this.url2,{
      params:{
        id:"Arumugam201"
      }});
        
  }

  getAllRequests():Observable<Object>{
    
    return this.http.get(this.url);
        
  }
}
