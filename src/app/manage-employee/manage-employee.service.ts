import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ManageEmployeeService {

  url="http://localhost:8080/admin/employees";

  constructor(private http:HttpClient,private spinner: NgxSpinnerService) { }

  getEmployees():Observable<Object>{

    this.spinner.show();
    return this.http.get(this.url);

        
  }
}
