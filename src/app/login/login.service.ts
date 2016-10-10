import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  public login(email: string, password: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify({ email, password });

    return this.http
      .post(`${environment.apiUrl}/api/auth/token`, body, options);
  }
}
