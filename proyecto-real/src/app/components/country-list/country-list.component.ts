import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { ICountry } from 'src/app/interfaces/Icountry.interface';
import { ListService } from '../list.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit{

  public Icountries: ICountry[] = [];

  countries: Country[] = [];

  newCountry: ICountry = {
    name: '',
    capital: '',
    forKids: ''
  }

  constructor( private listService:ListService) { }

  
ngOnInit(): void {
  this.listService.getAllCountries().subscribe((res:Country[])=> {
    console.log(res);
    this.countries = res
    
  });
}

public enviar(): void {
  console.log(this.newCountry)
  const copy = {...this.newCountry}
  this.Icountries.push(copy)
}
}