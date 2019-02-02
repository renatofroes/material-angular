import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaravelService {
  public token: any;
  public codeError: string;
  public messageError: string;
  private server =  'https://api.marrs.com.br/api/';
  constructor(
    private http: HttpClient
  ) { }

  public login(email, password) {
    const request =  this.http.post<any>(
      this.server + 'auth/login',
      {email: email, password: password }
    );
    request.subscribe(
      response => {
        if (response) {
          localStorage.setItem('token', response.access_token);
          this.token = localStorage.getItem('token');
          console.log(this.token);
        }
      }
    );

    return request;
  }

  public headers() {
    let reqHeader =  new HttpHeaders();
    reqHeader = reqHeader.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return {headers : reqHeader};
  }

  public me() {
    return this.http.post<any>( this.server + 'auth/me', {}, this.headers());
  }
}
