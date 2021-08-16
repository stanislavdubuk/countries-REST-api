import { useEffect, useState } from 'react';
import { SearchOutlined } from '@material-ui/icons';
import { useAppDispatch } from '../../redux/hooks';
import { search } from '../../redux/countriesSlice';

const Search = () => {
  const [countrySearch, setCountrySearch] = useState<string | number>('');
  const dispatch = useAppDispatch();

  const onChange = (e: string) => {
    setCountrySearch(e);
  };

  useEffect(() => {
    dispatch(search(countrySearch));
  }, [countrySearch, dispatch]);

  return (
    <div className='input'>
      <div className='search'>
        <SearchOutlined className='icon' />
        <input
          type='text'
          onChange={(e) => onChange(e.currentTarget.value)}
          placeholder='Search for a country...'
        />
      </div>
    </div>
  );
};

export default Search;
