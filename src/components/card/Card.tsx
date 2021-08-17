import './Card.scss';
import { Link } from 'react-router-dom';

interface Props {
  country: {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
    alpha3Code: string;
  };
}

const Card: React.FC<Props> = ({ country }) => {
  const population = country.population.toLocaleString();

  return (
    <div className='card'>
      <Link className='link' to={`/country/${country.alpha3Code}`}>
        <div className='card_top'>
          <img src={country.flag} alt='flag' />
        </div>
        <div className='card_bottom'>
          <h3>{country.name}</h3>
          <div>
            <span>Population:</span> {population}
          </div>
          <div>
            <span>Region:</span> {country.region}
          </div>
          <div>
            <span>Capital:</span> {country.capital}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
