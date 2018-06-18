import { Component, OnInit, NgModule } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userservice.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [UserService],
})
export class RegisterComponent {

    userForm: FormGroup;

    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _userService: UserService, private _router: Router) {

        this.userForm = this._fb.group({
            UserName: ['', [Validators.required]],
            Password: ['', [Validators.required]]
        })
    }

    save() {
        if (!this.userForm.valid) {
            return;
        }

            this._userService.saveUser(this.userForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/login']);
                }, error => this.errorMessage = error)
        
    }

    get UserName() { return this.userForm.get('UserName'); }
    get Password() { return this.userForm.get('Password'); } 

}
