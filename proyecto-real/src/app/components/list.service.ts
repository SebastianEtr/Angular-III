import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor( private http: HttpClient) { }

  getAllCountries(): Observable<Country[]>{
    return this.http.get<Country[]>("https://restcountries.com/v3.1/all")
  }

}
