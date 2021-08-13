import { createSlice } from '@reduxjs/toolkit';

interface CountriesState {
  countries: { name: string }[];
  pending: boolean;
  error: boolean;
}

const initialState: CountriesState = {
  countries: [],
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
  },
});

export const { updateStart, updateSuccess, updateFailed } =
  countriesSlice.actions;

export default countriesSlice.reducer;
