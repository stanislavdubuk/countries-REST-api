import { SearchOutlined } from '@material-ui/icons';
import Card from '../../components/card/Card';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='wrapper'>
        <div className='home_top'>
          <div className='input'>
            <div className='search'>
              <SearchOutlined className='icon' />
              <input type='text' placeholder='Search for a country...' />
            </div>
          </div>
          <div className='input'>
            <div className='filter'>
              <select name='country' id='country'>
                <option value='all'>Filter By Region</option>
                <option value='africa'>Africa</option>
                <option value='america'>America</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
              </select>
            </div>
          </div>
        </div>
        <div className='home_bottom'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
