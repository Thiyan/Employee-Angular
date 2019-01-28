import { Leave } from './../../models/leave';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  url="http://localhost:8080/add-request";

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':'626fbc3a-536e-4c4b-aec7-38299aa0957a'
    })
  };

  addLeaveRequest(f:NgForm){
    console.log(f.value);

    // let employee=new Employee("9");
    // console.log(employee.eId);
    // let date:string[]=new Array("2019-01-20","2019-01-21");

    console.log(String(f.value.date));

    let request=new Leave(f.value.reason,[String(f.value.date)],{eId:"9"},false);

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
}
