import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  url = 'http://localhost:8080/manager/requests';
  url2 = 'http://localhost:8080/manager/my-reply';
  url3 = 'http://localhost:8080/manager/add-reply';

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':'626fbc3a-536e-4c4b-aec7-38299aa0957a'
    })
  };

  getReplies(): Observable<Object> {

    return this.http.get(this.url2, {
      params: {
        id: 'Arumugam201'
      }});

  }

  getAllRequests(): Observable<Object> {

    return this.http.get(this.url);

  }



  addReply(reply ) {

    this.http.put(this.url3, reply, this.httpOptions)
      .subscribe(response => {

        console.log(response);
        if (JSON.parse(JSON.stringify(response)).statusCode === 'S1000') {
          alert('Reply added successfully!');
        } else {
          alert(JSON.parse(JSON.stringify(response)).statusDescription);
        }
        console.log(response);
      }, error => {
        alert('An unexpected error occurred');

      });

  }
}
