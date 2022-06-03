import Card from '../../components/card/Card';
import './CardList.scss';
import { useAppSelector } from '../../redux/hooks';

interface countryProps {
  numericCode: string;
  flag: string;
  name: { common: string };
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
  console.log(countries);

  return (
    <div className='card_list'>
      {countries.map((country: any, index: number) => (
        <Card key={index} country={country} />
      ))}
    </div>
  );
};

export default CardList;
