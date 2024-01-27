import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../env';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private headers: any;
  private params: any;
  private user: any = env.user;

  constructor(private http: HttpClient) {
    this.setHeader();
  }

  setHeader() {
    try {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
    } catch (err) {
      console.log(err + ' 1');
    }
  }

  public getNews() {
    const user = env.user;
    console.log(user);
    return this.http.post<any>(`${env.apiURL}/newsOpen/get`, {user}, {
      headers: this.headers,
    });
  }
  public getMessage() {
    const user = env.user;
    console.log(user);
    return this.http.post<any>(`${env.apiURL}/messageOpen/get`, {user}, {
      headers: this.headers,
    });
  }
}
