import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  userLogin=(datatosend: any)=>{
  
    return this.http.post("http://localhost:8080/userlogin", datatosend)
  }
  getProfileDetails=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/getUserById",datatosend)
  }
}
