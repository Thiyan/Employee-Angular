import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageLeaveService {

  url="http://localhost:8080/admin/leave-models";
  url2="http://localhost:8080/admin/delete-leave-model";

  constructor(private http:HttpClient) { }

  getLeaves():Observable<Object>{
    
    return this.http.get(this.url);
  }

  delete(id:string){
    this.http.delete(this.url2,{
      params: {
        id: id 
      }}).subscribe(response=>{
        if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
          alert("Item is deleted");
      }
      else{
          alert("An unexpected error occurred");
      }
    },error=>{
        alert("An unexpected error occurred");
    });
  }
        
}