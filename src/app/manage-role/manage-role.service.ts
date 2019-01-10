import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageRoleService {

  url="http://localhost:8080/admin/positions";
  roles:[any];

  constructor(private http:HttpClient) { }

  getRole():Observable<Object>{
    
    return this.http.get(this.url);
        

  }
}


