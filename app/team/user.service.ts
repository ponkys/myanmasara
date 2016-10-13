import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';

import { User } from './user.model';

@Injectable()

export class UserService {

    private usersUrl = 'http://localhost:4000/api/users';  // URL to web api
    
    constructor(private _http: Http) { }

    getUsers() : Observable<User[]> {
        return this._http.get(this.usersUrl)
            .map(res => res.json());
    }
    getUser(_id: string) {
    return this.getUsers()
      .subscribe(users => users.filter(c => c._id === +_id)[0]);
  }
}