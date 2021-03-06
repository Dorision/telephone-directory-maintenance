import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {


  constructor(private http: HttpClient) {
  }

  login(formData): Observable<any> {
    return this.http.post('http://localhost:3000/login', formData);
  }
}