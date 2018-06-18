import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class UserService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getUserData(user) {
        return this._http.post(this.myAppUrl + 'api/User/Get', user)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);  
    }
    saveUser(user) {
        return this._http.post(this.myAppUrl + 'api/User/Create', user)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}