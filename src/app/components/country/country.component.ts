import { Country, Currency } from './../../types/country';
import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  name: string = '';
  country: Country = {
    name: {
      common: '',
      official: '',
    },
    flag: '',
    population: 0,
    region: '',
    subregion: '',
    capital: [],
    tld: [],
    currencies: {},
    languages: {},
    borders: null,
    cioc: '',
  };
  loading: boolean = true;
  currencies: Currency[] = [];
  languages: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      // console.log(param['name']);
      if (param['name'] !== undefined) {
        this.loading = false;
        this.countryService
          .getCountryByName(param['name'])
          .subscribe((res) => this.populate(res));
      } else if (param['cioc'] !== undefined) {
        this.countryService
          .getCountryByCioc(param['cioc'])
          .subscribe((res) => this.populate(res));
        console.log(param['cioc']);
      }
    });
  }

  populate(res: any): void {
    const c: any = res[0];

    this.country = {
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

    Object.values(this.country.currencies).map((c: any) => {
      const curr: Currency = {
        name: c.name,
        symbol: c.symbol,
      };

      this.currencies.push(curr);
    });

    this.languages = Object.values(this.country.languages);

    this.loading = false;
  }
}
