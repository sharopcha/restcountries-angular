import { Country } from './../types/country';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private url = 'https://restcountries.com/v3.1';
  private countries: Country[] = [];

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any> {
    return this.http.get<any>(`${this.url}/all`);
  }
}
