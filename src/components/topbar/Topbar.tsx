import './Topbar.scss';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='container'>
        <div className='left'>
          <h2>Where in the world?</h2>
        </div>
        <div className='right'>
          <div className='theme_switch'>
            <Brightness2OutlinedIcon className='icon' />
            <p>Dark Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
