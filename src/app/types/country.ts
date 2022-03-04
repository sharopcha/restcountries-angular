export interface Country {
  name: {
    common: string;
    official: string;
  };
  cioc: string;
  flag: string;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: {};
  languages: {};
  borders: string[] | null;
}

export interface Currency {
  name: string;
  symbol: string;
}
