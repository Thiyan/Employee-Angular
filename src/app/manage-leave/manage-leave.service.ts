import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageLeaveService {

  url="http://localhost:8080/admin/leave-models";

  constructor(private http:HttpClient) { }

  getLeaves():Observable<Object>{
    
    return this.http.get(this.url);
  }
        
}
