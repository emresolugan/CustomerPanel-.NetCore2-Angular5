import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { Add_EditCustomer } from './components/add_editcustomer/add_editcustomer.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        NavMenuComponent,
        LoginComponent,
        Add_EditCustomer,
        HomeComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'addcustomer', component: Add_EditCustomer },
            { path: 'customer/edit/:id', component: Add_EditCustomer }, 
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
