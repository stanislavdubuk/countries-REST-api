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
    (country) => country.cca3 === params.countryId
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
              <img src={country?.flags.svg} alt='flag' />
            </div>
            <div className='right'>
              <h1>{country?.name.common}</h1>
              <div className='info'>
                <div className='info_left'>
                  <div className='info_item'>
                    {/* <span>Native Name:</span> {country?.nativeName} */}
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
                    {country?.tld.map((item) => (
                      <div key={item}> {item}</div>
                    ))}
                  </div>
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
