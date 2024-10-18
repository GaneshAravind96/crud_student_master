import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/data';
  

  constructor(private http:HttpClient) { }

  postUser(user: any){
    return this.http.post(this.url, user)
  }

  getUser(){
    return this.http.get(this.url)
  }

}
