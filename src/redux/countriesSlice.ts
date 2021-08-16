import { createSlice } from '@reduxjs/toolkit';

interface CountriesState {
  countries: {
    numericCode: number;
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
  }[];
  countriesSearched: {
    numericCode: number;
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
  }[];
  pending: boolean;
  error: boolean;
}

const initialState: CountriesState = {
  countries: [],
  countriesSearched: [],
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
      const searchItem = action.payload;
      console.log(searchItem);
      state.countriesSearched = state.countries.filter((country) => {
        if (action.payload === '') {
          return state.countries;
        } else if (
          country.name.toLowerCase().includes(action.payload.toLowerCase())
        ) {
          return country;
        }
      });
    },
  },
});

export const { updateStart, updateSuccess, updateFailed, search } =
  countriesSlice.actions;

export default countriesSlice.reducer;
