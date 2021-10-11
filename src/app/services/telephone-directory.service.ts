import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'
import { UsersData } from '../pages/telephone-directory/dialog-box/dialog-box.component';

@Injectable({
    providedIn : 'root'
})
export class TelephoneDirectoryService {


  constructor(private http: HttpClient) {
  }

getTelephoneDirectory (){
    return this.http.get('http://localhost:3000/directory').pipe(
        map((data : UsersData[]) => {
            return data;
        })
    )
}
 
}