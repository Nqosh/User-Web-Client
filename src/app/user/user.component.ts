import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../Model/user';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[] = [];
  user : User = {} as User;


  constructor(private userService : UserService) { }

  ngOnInit() {

    this.loadUsers();
  }

  loadUsers() {

    this.userService.getUserList().subscribe
    (
      (response)=>
      {
        this.users = response;
      },
      (error) => console.log(error)
    )
  }


  createUser(data: any) {
    debugger;
    this.user =  Object.assign({},data);
    this.userService.create(this.user);
    this.users.push(this.user);
  }

  deleteUser(id: number) {
    debugger;
    this.userService.deleteUser(id).subscribe((data)=> {
      if(data){
        this.users.splice(id);
      }
      this.loadUsers();
    });
  }

}
