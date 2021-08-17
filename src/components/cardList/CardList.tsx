import Card from '../../components/card/Card';
import './CardList.scss';
import { useAppSelector } from '../../redux/hooks';

interface countryProps {
  numericCode: string;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  alpha3Code: string;
}

const CardList = () => {
  const allCountries = useAppSelector((state) => state.countries.countries);
  const countriesSearched = useAppSelector(
    (state) => state.countries.countriesSearched
  );
  const countries = countriesSearched.length ? countriesSearched : allCountries;

  return (
    <div className='home_bottom'>
      {countries.map((country: countryProps) => (
        <Card key={country.alpha3Code} country={country} />
      ))}
    </div>
  );
};

export default CardList;
