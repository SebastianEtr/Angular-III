import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  model = {
    name: " ",
    capital: "",
    /*accept: false*/
  }

  constructor() { }

  onSubmit(){
    console.log(this.model);
    
  }
  
 ngOnInit(): void {
   
 }


/*
 country(){
  console.log(
    "name ${this.model.name} capital ${this.model.capital} accept ${this.model.accept}");
  
 }
*/
}

/*
<form (ngSubmit)="onSubmit()" #myForm="ngForm">

    <label>
        <input type="text" [(ngModel)]="model.name">
    </label>
    <label>
        <input type="text" [(ngModel)]="model.capital">
    </label>
<button type="submit" class="btn btn-primary"></button>
</form>


<form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">name</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" [(ngModel=)]= "model.name" name="name">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">capital</label>
      <input type="password" class="form-control" id="exampleInputPassword1"
      [(ngModel=)]= "model.capital" name="capital">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"
      [(ngModel=)]= "model.accept" name="accept">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary" (click)="country();">Submit</button>
  </form>

*/
