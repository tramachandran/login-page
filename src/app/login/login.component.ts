import { Component, OnInit } from '@angular/core';

interface UserModel {
  email: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userModel: UserModel = {
    email: '',
    password: ''
  };
  
  ngOnInit(): void {
  }

}
