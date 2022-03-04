import { CountryService } from './../../services/country.service';
import { Country } from './../../types/country';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [];
  loading: boolean = true;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((array) => {
      this.loading = false;
      array.forEach((c: any) => {
        const country: Country = {
          name: { common: c.name.common, official: c.name.official },
          borders: c.borders,
          capital: c.capital,
          currencies: c.currencies,
          languages: c.languages,
          population: c.population,
          region: c.region,
          subregion: c.subregion,
          tld: c.tld,
          flag: c.flags['svg'],
          cioc: c.cioc,
        };

        this.countries.push(country);

        this.loading = false;
      });
    });
  }
}
