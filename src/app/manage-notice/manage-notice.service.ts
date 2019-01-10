import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageNoticeService {

  url="http://localhost:8080/admin/notices";

  constructor(private http:HttpClient) { }

  getNotice():Observable<Object>{
    
    return this.http.get(this.url)
        
  }
}
