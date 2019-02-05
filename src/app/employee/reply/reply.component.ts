import { Component, OnInit } from '@angular/core';
import { ReplyService } from './reply.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  replies:any[];
  requests:any[];
  constructor(private service:ReplyService) { }
  
  ngOnInit() {

    this.service.getAllRequests()
    .subscribe(response=>{
      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
        this.requests=JSON.parse(JSON.stringify(response))['content'];
        console.log(this.requests);
      }
      else{
        // alert(JSON.parse(JSON.stringify(response)).statusDescription);
        if(JSON.parse(JSON.stringify(response)).statusCode==="E1003"){
          alert("No results Found");
        }
        else{
          alert("An unexpected error occurred");
        }
      }
    },error=>{
        alert("An unexpected error occurred");
    }
);
    

this.service.getReplies()
    .subscribe(response=>{
      if(JSON.parse(JSON.stringify(response)).statusCode==="S1000"){
        this.replies=JSON.parse(JSON.stringify(response))['content'];
        console.log(this.replies);
      }
      else{
        // alert(JSON.parse(JSON.stringify(response)).statusDescription);
        if(JSON.parse(JSON.stringify(response)).statusCode==="E1003"){
          alert("No results Found");
        }
        else{
          alert("An unexpected error occurred");
        }
      }
    },error=>{
        alert("An unexpected error occurred");
    }
);

  }

}
