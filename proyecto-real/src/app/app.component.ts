import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-real';
  private readonly sessionStoragekey = "isAllowed"

  constructor( private router: Router,){
   
  }

  authenticated(){
  sessionStorage.setItem(this.sessionStoragekey,"true");
  
  }
  CerrarSesion(){
   sessionStorage.setItem(this.sessionStoragekey,"false");
  }
}
