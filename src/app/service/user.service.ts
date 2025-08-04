import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
<<<<<<< HEAD
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { CustomHttpResponse } from '../model/custom-http-response';
import { map } from 'rxjs/operators';
=======
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../model/user';
import { CustomHttpResponse } from '../model/custom-http-response';



>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422

@Injectable({
  providedIn: 'root'
})
export class UserService {
<<<<<<< HEAD

=======
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}

<<<<<<< HEAD
  // Get users and map 'username' (from backend) to 'userName' (in model)
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.host}/user/list`).pipe(
      map(users => users.map(user => {
        return {
          ...user,
          userName: (user as any).username  // map backend 'username' to model 'userName'
        } as User;
      }))
    );
=======
  public getUsers(): Observable<User[] | HttpErrorResponse> {
    return this.http.get<User[]>(`${this.host}/user/list`);
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
  }

  public addUser(formData: FormData): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${this.host}/user/add`, formData);
  }

  public updateUser(formData: FormData): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${this.host}/user/update`, formData);
  }

  public resetPassword(email: string): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.http.get<CustomHttpResponse>(`${this.host}/user/resetPassword/${email}`);
  }

  public updateProfileImage(formData: FormData): Observable<HttpEvent<User> | HttpErrorResponse> {
    return this.http.post<User>(`${this.host}/user/updateProfileImage`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

<<<<<<< HEAD
  public deleteUser(userId: Number): Observable<CustomHttpResponse | HttpErrorResponse> {
=======
  public deleteUser(userId: number): Observable<CustomHttpResponse | HttpErrorResponse> {
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
    return this.http.delete<CustomHttpResponse>(`${this.host}/user/delete/${userId}`);
  }

  public addUsersToLocalCache(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

<<<<<<< HEAD
  public getUsersFormLocalCache(): User[] {
    const usersJson = localStorage.getItem('users');
    return usersJson ? JSON.parse(usersJson) as User[] : [];
  }

  // Create form data for user (note: userName property used here)
  public createUserFormDate(loggedInUsername: string, user: User, profileImage: File): FormData {
=======
  public getUsersFromLocalCache(): User[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  public createUserFormData(loggedInUsername: string, user: User, profileImage: File): FormData {
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
    const formData = new FormData();
    formData.append('currentUsername', loggedInUsername);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
<<<<<<< HEAD
    formData.append('username', user.userName);  // backend expects 'username'
=======
    formData.append('userName', user.userName);
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
    formData.append('email', user.email);
    formData.append('role', user.role);
    formData.append('profileImage', profileImage);
    formData.append('isActive', JSON.stringify(user.active));
    formData.append('isNonLocked', JSON.stringify(user.notLocked));
    return formData;
  }
}
