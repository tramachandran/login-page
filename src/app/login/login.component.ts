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
        this.validateUserDetails(res.data);
      },
      (err) => {
        this.errorMsg = 'Error occured on server';
      })
  }

  validateUserDetails(usersList: UserModel[]) {    
    const matchedUser = usersList.find((user) => {
      return user.email === this.userModel.email
    });
    if (matchedUser && matchedUser.password === this.userModel.password) {
      this.loginMsg = "Login is successful....";
    } else {
      this.errorMsg = 'Invalid credentails';
    }
  }
}
