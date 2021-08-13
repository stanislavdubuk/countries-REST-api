import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Country from './pages/country/Country';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import { useEffect } from 'react';

const App = () => {
  // useEffect(() => {
  //   const getCountries = async () => {
  //     try {
  //       const res = await axios.get('https://restcountries.eu/rest/v2/all');
  //       console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getCountries();
  // }, []);

  return (
    <Router>
      <div className='App'>
        <Topbar />
        <Switch>
          <Route path='/' exact>
            <Country />
          </Route>
          <Route path='/country/:countryId'>
            <Home />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
