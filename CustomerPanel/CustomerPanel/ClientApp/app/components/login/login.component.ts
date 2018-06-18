import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userservice.service';  
import { BrowserModule } from '@angular/platform-browser';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserService],
})
export class LoginComponent {
    userForm: FormGroup;
    errorMessage: any;
    value: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _userService: UserService, private _router: Router) {

        this.userForm = this._fb.group({
            UserName: ['', [Validators.required]],
            Password: ['', [Validators.required]]
        })
    }

    getUserData() {
        if (!this.userForm.valid) {
            return;
        }

        this._userService.getUserData(this.userForm.value)
            .subscribe((data) => {          

                var value = new Array(4);
                var i = 0;
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        value[i] = data[key];
                        i++;
                        
                    }
                }
                if (value[1] == null) {
                    this.value = 'Girdiğiniz bilgilerle kullanıcı bulunamadı..';
                    this._router.navigate(['/login']);
                }
                else {
                    sessionStorage.setItem('UserName', value[1].toString());
                    this._router.navigate(['/home']);
                }
            }, error => this.errorMessage = error)

    }

    get UserName() { return this.userForm.get('UserName'); }
    get Password() { return this.userForm.get('Password'); } 

}
