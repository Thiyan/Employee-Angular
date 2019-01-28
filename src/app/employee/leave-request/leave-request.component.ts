import { LeaveRequestService } from './leave-request.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {

  constructor(private service:LeaveRequestService) { }

  ngOnInit() {
  }

  onsubmit(f:NgForm){
    console.log(f.value);
    this.service.addLeaveRequest(f);  
  }

}
