import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  // newEmployee(){
  //   this.router.navigate(['new-employee'],{relativeTo:this.route});
  // }

  // manageEmployee(){
  //   this.router.navigate(['employees'],{relativeTo:this.route});
  // }

  // newEmployee(){
  //   this.router.navigate(['new-employee'],{relativeTo:this.route});
  // }

  // manageEmployee(){
  //   this.router.navigate(['employees'],{relativeTo:this.route});
  // }


}
