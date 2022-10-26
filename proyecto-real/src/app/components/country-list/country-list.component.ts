import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { ListService } from '../list.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit{

  countries: Country[] = [];

  constructor( private listService:ListService) { }

  
ngOnInit(): void {
  this.listService.getAllCountries().subscribe((res:Country[])=> {
    console.log(res);
    this.countries = res
    
  });
}
}