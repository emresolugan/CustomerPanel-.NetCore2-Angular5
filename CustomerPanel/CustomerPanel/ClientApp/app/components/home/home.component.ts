import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customerservice.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [CustomerService],
})
export class HomeComponent {
    public custList: CustomerData[];
    value: any;
    constructor(public http: Http, private _router: Router, private _customerService: CustomerService) {
        this.getCustomers();
    }
    getCustomers() {
        this._customerService.getCustomers().subscribe(
            data => this.custList = data)
    }
    delete(customerID) {
        var ans = confirm("Do you want to delete customer with Id: " + customerID);
        if (ans) {
            this._customerService.deleteCustomer(customerID).subscribe((data) => {
                this.getCustomers();
            }, error => console.error(error))
        }
    }
}
interface CustomerData {
    customerID: number;
    customerName: string;
    email: string;
    adress: string;
    webSite: string;
    phone: string;
    taxNumber: string;
    postCode: string;
    customerSector: string;
    authorizedPerson: string;
}