import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent{
    
    value: any;

    getSessionData(): boolean {

        this.value = sessionStorage.getItem('UserName');
        if (this.value == null) {
            return false;
        }
        else
            return true;        

    }

    removeSession() {
        sessionStorage.removeItem('UserName');
    }
   
}
