import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Country from './pages/country/Country';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { updateCountries } from './redux/apiCalls';
import { useAppDispatch } from './redux/hooks';
import { useEffect } from 'react';

import './App.scss';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    updateCountries(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <div className='App'>
        <Topbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/country/:countryId'>
            <Country />
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
