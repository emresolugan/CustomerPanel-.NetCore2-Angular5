import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class CustomerService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getCustomers() {
        return this._http.get(this.myAppUrl + 'api/Customer/Get')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getCustomerById(id: number) {
        return this._http.get(this.myAppUrl + "api/Customer/Get/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveCustomer(customer) {
        return this._http.post(this.myAppUrl + 'api/Customer/Create', customer)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateCustomer(customer) {
        return this._http.put(this.myAppUrl + "api/Customer/Edit/", customer)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteCustomer(id: number) {
        return this._http.delete(this.myAppUrl + "api/Customer/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}