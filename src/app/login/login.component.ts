import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

interface UserModel {
  email: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _loginService: LoginService) { }
  userModel: UserModel = {
    email: '',
    password: ''
  };

  loginMsg: string = '';
  errorMsg: string = '';

  loginUser(): void {
    this._loginService.validateUser().subscribe(
      (res) => {
        this.validateUserDetails(res);
      },
      (err) => {
        this.loginMsg = '';
        this.errorMsg = 'Error occured on server';
      })
  }

  validateUserDetails(usersList: UserModel[]): void {
    const matchedUser = usersList.find((user) => {
      return user.email === this.userModel.email
    });
    if (matchedUser && matchedUser.password === this.userModel.password) {
      this.loginMsg = "Login is successful....";
      this.errorMsg = '';
    } else {
      this.errorMsg = 'Invalid credentials';
      this.loginMsg = '';
    }
  }

  clearMsgs(): void {
    this.loginMsg = '';
    this.errorMsg = '';
  }
}
