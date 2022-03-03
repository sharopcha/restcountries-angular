export interface Country {
  name: {
    common: string;
    official: string;
  };
  flag: string;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: {};
  languages: {};
  borders: string[];
}
