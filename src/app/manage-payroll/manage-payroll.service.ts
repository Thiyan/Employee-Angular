import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagePayrollService {

  url="http://localhost:8080/admin/salry-models";
  leaves:[any];

  constructor(private http:HttpClient) { }

  getSalaryModels():Observable<Object>{
    
    return this.http.get(this.url)
  }
}
