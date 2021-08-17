import './Country.scss';
import { CallReceived } from '@material-ui/icons';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import Error from '../../components/errorMsg/Error';

const Country = () => {
  const params = useParams<{ countryId: string }>();
  const allCountries = useAppSelector((state) => state.countries.countries);
  const country = allCountries.find(
    (country) => country.alpha3Code === params.countryId
  );

  const bordersCodes: any = country?.borders;

  const borders = allCountries.filter((country) =>
    bordersCodes.includes(country.alpha3Code)
  );

  const population = country?.population.toLocaleString();

  return (
    <div className='country'>
      <div className='country_container'>
        <div className='country_top'>
          <Link to='/' className='link'>
            <button className='btn'>
              <CallReceived className='icon' />
              Back
            </button>
          </Link>
        </div>
        {!country ? (
          <Error />
        ) : (
          <div className='country_bottom'>
            <div className='left'>
              <img src={country?.flag} alt='flag' />
            </div>
            <div className='right'>
              <h1>{country?.name}</h1>
              <div className='info'>
                <div className='info_left'>
                  <div className='info_item'>
                    <span>Native Name:</span> {country?.nativeName}
                  </div>

                  <div className='info_item'>
                    <span>Population:</span> {population}
                  </div>
                  <div className='info_item'>
                    <span>Region:</span> {country?.region}
                  </div>
                  <div className='info_item'>
                    <span>Sub Region:</span> {country?.subregion}
                  </div>
                  <div className='info_item'>
                    <span>Capital:</span> {country?.capital}
                  </div>
                </div>
                <div className='info_right'>
                  <div className='info_item'>
                    <span>Top Level Domain:</span>
                    {country?.topLevelDomain.map((item) => (
                      <div key={Math.random()}> {item}</div>
                    ))}
                  </div>
                  <div className='info_item'>
                    <span>Currencies:</span>
                    {country?.currencies.map((currency) => (
                      <div key={Math.random()}> {currency.name}</div>
                    ))}
                  </div>
                  <div className='info_item'>
                    <span>Languages:</span>
                    {country.languages.map((language) => (
                      <div key={Math.random()}>{language.name}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='neighbours'>
                <span>Border Countries: </span>
                {borders.length < 1 && <p> None</p>}
                <div className='neighbours_grid'>
                  {borders.length > 0 &&
                    borders?.map((country: any) => (
                      <Link
                        key={country.alpha3Code}
                        to={`/country/${country.alpha3Code}`}
                      >
                        <button className='neighbour'>{country.name}</button>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
