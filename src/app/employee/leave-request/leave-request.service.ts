import { Leave } from './../../models/leave';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  url="http://localhost:8080/add-request";
  url2="http://localhost:8080/my-requests";
  // url2="http://localhost:8080/admin/delete-notice";

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':'626fbc3a-536e-4c4b-aec7-38299aa0957a'
    })
  };

  addLeaveRequest(f:NgForm){

    // let employee=new Employee("9");
    // console.log(employee.eId);
    // let date:string[]=new Array("2019-01-20","2019-01-21");


    let request={'requestedBy':{'eId':9},
              'date':f.value.date,
              'reason':f.value.reason,
              'checked':false};

    console.log(request);

    this.http.post(this.url,JSON.stringify(request),this.httpOptions)
    .subscribe(response=>{

      console.log(response);
      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
        alert("Leave request added successfully!");
        f.reset();
      }
      else{
        alert("An unexpected error occurred");
      }
      console.log(response);
    },error=>{
      alert("An unexpected error occurred");

    });

  }

  getRequests():Observable<Object>{
    
    return this.http.get(this.url2,{
      params:{
        id:"Arumugam201"
      }});
        
  }
}
