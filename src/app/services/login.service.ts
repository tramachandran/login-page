import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  getUsersURL = 'https://my-json-server.typicode.com/tramachandran/login-page/users';

  validateUser(): Observable<any> {
    return this._http.get(this.getUsersURL);
  }
}
