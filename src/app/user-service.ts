import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './Model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  baseUrl = environment.apiUrl + 'user/';
  listEndPoint: string = this.baseUrl + "List";
  createEndPoint: string = this.baseUrl + "Create";
  deleteEndPoint: string = this.baseUrl + "Delete/";


  constructor(private http: HttpClient) { }

  create(data: any) {
    this.http.post(this.createEndPoint, data).subscribe((data) => {
      return data;
    })
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.listEndPoint);
  }

  deleteUser(id: number) {
    return this.http.delete(this.deleteEndPoint + id)
  }

}