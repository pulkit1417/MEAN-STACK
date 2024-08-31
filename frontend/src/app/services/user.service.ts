import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import User from '../datatypes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl = "http://localhost:3000"
  constructor(
    private http: HttpClient, 
    private router: Router,
  ) { }
  getUsers(){
    return this.http.get<User[]>(this.apiUrl + '/user');
  }

  getUserById(id: string) {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`);
  }
  

  editUser(id:string, model:User){
    return this.http.put(this.apiUrl + '/user/' + id, model);
  }

  addUser(model: User){
    return this.http.post(this.apiUrl + '/user/add', model);
  }

  deleteUser(id: string){
    return this.http.delete(this.apiUrl + '/user/' + id);
  }
}
