import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public host = environment.apiUrl;
  private token: string | null = null;
  private loggedInUsername: string | null = null;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(user: User): Observable<HttpResponse<any> | HttpErrorResponse> {
    return this.http.post<HttpResponse<any> | HttpErrorResponse>(`${this.host}/user/login`, user, {
      observe: 'response'
    });
  }

  register(user: User): Observable<HttpResponse<any> | HttpErrorResponse> {
    return this.http.post<HttpResponse<any> | HttpErrorResponse>(`${this.host}/user/register`, user, {
      observe: 'response'
    });
  }

  saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  getToken(): string | null {
    return this.token;
  }

  addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLocalCache(): User {
    return JSON.parse(localStorage.getItem('user') ?? '{}');
  }

  logOut(): void {
    this.token = null;
    this.loggedInUsername = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

  isLoggedIn(): boolean {
    this.loadToken();
    if (this.token && this.token !== '') {
      const decoded = this.jwtHelper.decodeToken(this.token);
      if (decoded && decoded.sub && !this.jwtHelper.isTokenExpired(this.token)) {
        this.loggedInUsername = decoded.sub;
        return true;
      }
    }
    this.logOut();
    return false;
  }
}
