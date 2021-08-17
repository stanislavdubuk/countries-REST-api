import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Country from './pages/country/Country';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
};

export default App;
