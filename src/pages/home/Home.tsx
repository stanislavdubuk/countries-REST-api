import './Home.scss';
import Search from '../../components/search/Search';
import Filter from '../../components/filter/Filter';
import Error from '../../components/errorMsg/Error';
import CardList from '../../components/cardList/CardList';
import { CircularProgress } from '@material-ui/core';
import { useAppSelector } from '../../redux/hooks';
import { updateCountries } from '../../redux/apiCalls';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useAppDispatch();
  const allCountries = useAppSelector((state) => state.countries.countries);

  useEffect(() => {
    if (!allCountries.length) {
      updateCountries(dispatch);
    }
  }, [allCountries.length]);

  const pending = useAppSelector((state) => state.countries.pending);
  const error = useAppSelector((state) => state.countries.error);

  return (
    <div className='home'>
      <div className='wrapper'>
        <div className='home_top'>
          <Search />
          <Filter />
        </div>
        {pending && !error ? <CircularProgress /> : <CardList />}
        {error && <Error />}
      </div>
    </div>
  );
};

export default Home;
