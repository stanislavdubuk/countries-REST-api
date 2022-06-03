import './Card.scss';
import { Link } from 'react-router-dom';

interface Props {
  country: {
    flags: any;
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string;
    cca3: string;
  };
}

const Card: React.FC<Props> = ({ country }) => {
  const population = country.population.toLocaleString();

  return (
    <div className='card'>
      <Link className='link' to={`/country/${country.cca3}`}>
        <div className='card_top'>
          <img src={country.flags.svg} alt='flag' />
        </div>
        <div className='card_bottom'>
          <h3>{country.name.common}</h3>
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
