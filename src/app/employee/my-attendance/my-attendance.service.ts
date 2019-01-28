import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAttendanceService {

  url="http://localhost:8080/my-attendance";
  // url2="http://localhost:8080/admin/delete-notice";

  constructor(private http:HttpClient) { }

  getSalary():Observable<Object>{
    
    return this.http.get(this.url,{
      params:{
        id:"9"
      }});
        
  }

}
