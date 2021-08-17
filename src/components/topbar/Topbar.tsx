import './Topbar.scss';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { toggleTheme } from '../../redux/themeSlice';

const Topbar = () => {
  const [theme, setTheme] = useState('light');
  const dispatch = useAppDispatch();

  const handleThemeToggle = () => {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
  };

  useEffect(() => {
    dispatch(toggleTheme(theme));
  }, [theme, dispatch]);

  return (
    <div className='topbar'>
      <div className='container'>
        <div className='left'>
          <h2>Where in the world?</h2>
        </div>
        <div className='right'>
          <button className='theme_switch' onClick={handleThemeToggle}>
            {theme === 'light' ? (
              <>
                <Brightness2OutlinedIcon className='icon' />
                <p>Dark Mode</p>
              </>
            ) : (
              <>
                <Brightness5OutlinedIcon className='icon' />
                <p>Light Mode</p>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
