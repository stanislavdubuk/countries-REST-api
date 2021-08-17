import { createSlice } from '@reduxjs/toolkit';

type countryType = {
  numericCode: string;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: [];
  alpha3Code: any;
  currencies: [
    {
      name: string;
    }
  ];
  languages: [
    {
      name: string;
    }
  ];
  borders: [];
}[];

interface CountriesState {
  countries: countryType;
  countriesSearched: countryType;
  countriesFiltered: countryType;
  pending: boolean;
  error: boolean;
}

const initialState: CountriesState = {
  countries: [],
  countriesSearched: [],
  countriesFiltered: [],
  pending: false,
  error: false,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action: any) => {
      state.pending = false;
      state.countries = action.payload;
    },
    updateFailed: (state) => {
      state.error = true;
      state.pending = false;
    },
    search: (state, action) => {
      state.countriesSearched = state.countries.filter((country) => {
        const query = country.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());

        if (!action.payload) {
          return state.countries;
        } else if (query) {
          return country;
        }
      });
    },
    filter: (state, action) => {
      state.countriesSearched = state.countries.filter((country) => {
        const query = country.region
          .toLowerCase()
          .includes(action.payload.toLowerCase());

        if (!action.payload) {
          return state.countries;
        } else if (query) {
          return country;
        }
      });
    },
  },
});

export const { updateStart, updateSuccess, updateFailed, search, filter } =
  countriesSlice.actions;

export default countriesSlice.reducer;
