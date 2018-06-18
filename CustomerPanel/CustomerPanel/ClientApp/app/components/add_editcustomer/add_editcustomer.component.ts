import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customerservice.service';  


@Component({
    selector: 'add_editcustomer',
    templateUrl: './add_editcustomer.component.html',
    providers: [CustomerService],
})  

export class Add_EditCustomer implements OnInit {
    customerForm: FormGroup;
    title: string = "Add-Customer";
    customerID: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _customerService: CustomerService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.customerID = this._avRoute.snapshot.params["id"];
        }
        this.customerForm = this._fb.group({
            customerID: 0,
            customerName: ['', [Validators.required]],
            email: ['', [Validators.required]],
            adress: ['', [Validators.required]],
            webSite: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            taxNumber: ['', [Validators.required]],
            postCode: ['', [Validators.required]],
            customerSector: ['', [Validators.required]],
            authorizedPerson: ['', [Validators.required]]
        })
    }
    ngOnInit() {
        if (this.customerID > 0) {
            this.title = "Edit";
            this._customerService.getCustomerById(this.customerID)
                .subscribe(resp => this.customerForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.customerForm.valid) {
            return;
        }
        if (this.title == "Add-Customer") {
            this._customerService.saveCustomer(this.customerForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/home']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._customerService.updateCustomer(this.customerForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/home']);
                }, error => this.errorMessage = error)
        }
    }

    get CustomerName() { return this.customerForm.get('customerName'); }
    get Email() { return this.customerForm.get('email'); }
    get Adress() { return this.customerForm.get('adress'); }
    get WebSite() { return this.customerForm.get('webSite'); }
    get Phone() { return this.customerForm.get('phone'); }
    get TaxNumber() { return this.customerForm.get('taxNumber'); }
    get PostCode() { return this.customerForm.get('postCode'); }
    get CustomerSector() { return this.customerForm.get('customerSector'); }
    get AuthorizedPerson() { return this.customerForm.get('authorizedPerson'); }
}