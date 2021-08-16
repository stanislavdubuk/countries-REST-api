import Card from '../../components/card/Card';
import './CardList.scss';
import { useAppSelector } from '../../redux/hooks';

interface countryProps {
  numericCode: number;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

const CardList = () => {
  const countriesInitial = useAppSelector((state) => state.countries.countries);
  const countriesSearched = useAppSelector(
    (state) => state.countries.countriesSearched
  );
  const countries =
    countriesSearched.length > 0 ? countriesSearched : countriesInitial;

  return (
    <div className='home_bottom'>
      {countries.map((country: countryProps) => (
        <Card key={country.numericCode} country={country} />
      ))}
    </div>
  );
};

export default CardList;
