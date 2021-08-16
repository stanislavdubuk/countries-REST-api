import { updateStart, updateSuccess, updateFailed } from './countriesSlice';
import axios from 'axios';

export const updateCountries = async (dispatch: any) => {
  dispatch(updateStart());
  try {
    const res = await axios.get('https://restcountries.eu/rest/v2/all');
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateFailed());
  }
};
