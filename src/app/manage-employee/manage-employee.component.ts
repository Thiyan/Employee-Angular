import { Component, OnInit } from '@angular/core';
import { ManageEmployeeService } from './manage-employee.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  employees:any[];
  constructor(private service:ManageEmployeeService,private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.service.getEmployees()
    .subscribe(response=>{

      this.spinner.hide();
      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
        this.employees=JSON.parse(JSON.stringify(response))['content'];
        console.log(this.employees);
        return this.employees;
      }
      else{
        // alert(JSON.parse(JSON.stringify(response)).statusDescription);
        console.log(JSON.parse(JSON.stringify(response))['statusDescription']);

        if(JSON.parse(JSON.stringify(response)).statusCode==="E1003"){
          alert("No results Found");
        }
        else{
          alert("An unexpected error occurred");
        }
      }
    },error=>{
        alert("An unexpected error occurred");
    });
      
  }

 

}
