import { useEffect, useState } from 'react';
import { filter } from '../../redux/countriesSlice';
import { useAppDispatch } from '../../redux/hooks';

const Filter = () => {
  const [countryFilter, setCountryFilter] = useState<string | number>('');
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useAppDispatch();

  const onChange = (e: string) => {
    setCountryFilter(e);
    setIsSelected(true);
  };

  useEffect(() => {
    dispatch(filter(countryFilter));
  }, [countryFilter, dispatch]);

  return (
    <div className='input input_filter'>
      <div className='filter'>
        <select
          name='country'
          id='country'
          onChange={(e) => onChange(e.target.value)}
        >
          <option value='all'>{isSelected ? 'All' : 'Filter by Region'}</option>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
