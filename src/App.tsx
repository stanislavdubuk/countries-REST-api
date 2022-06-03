import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Country from './pages/country/Country';
import './App.scss';
import { useAppSelector } from './redux/hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const App = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={theme === 'dark' ? 'App dark-theme' : 'App'}>
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
    </div>
  );
};

export default App;
