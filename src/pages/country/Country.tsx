import './Country.scss';
import { CallReceived } from '@material-ui/icons';

const Country = () => {
  return (
    <div className='country'>
      <div className='country_container'>
        <div className='country_top'>
          <button className='btn'>
            <CallReceived className='icon' />
            Back
          </button>
        </div>
        <div className='country_bottom'>
          <div className='left'>
            <img
              src='https://cdn.shopify.com/s/files/1/1772/4363/products/belgium_800x.png?v=1626331326'
              alt='flag'
            />
          </div>
          <div className='right'>
            <h1>Belgium</h1>
            <div className='info'>
              <div className='info_left'>
                <div className='info_item'>
                  <span>Native Name:</span> Belgie
                </div>

                <div className='info_item'>
                  <span>Population:</span> 11,319,511
                </div>
                <div className='info_item'>
                  <span>Region:</span> Europe
                </div>
                <div className='info_item'>
                  <span>Sub Region:</span> Western Europe
                </div>
                <div className='info_item'>
                  <span>Capital:</span> Brussels
                </div>
              </div>
              <div className='info_right'>
                <div className='info_item'>
                  <span>Top Level Domain:</span> .be
                </div>
                <div className='info_item'>
                  <span>Currencies:</span> Euro
                </div>
                <div className='info_item'>
                  <span>Languages:</span> Dutch, French, German
                </div>
              </div>
            </div>
            <div className='neighbours'>
              <span>Border Countries: </span>
              <div className='neighbours_grid'>
                <button className='neighbour'>France</button>
                <button className='neighbour'>Germany</button>
                <button className='neighbour'>Netherlands</button>
                <button className='neighbour'>Netherlands</button>
                <button className='neighbour'>Netherlands</button>
                <button className='neighbour'>Netherlands</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
