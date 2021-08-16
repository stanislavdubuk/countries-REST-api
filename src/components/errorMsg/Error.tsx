import { ErrorOutline } from '@material-ui/icons';
import './Error.scss';

const Error = () => {
  return (
    <div className='error'>
      <ErrorOutline className='icon' />
      <span>
        Ooops! Something went wrong.
        <br /> Please try again.
      </span>
    </div>
  );
};

export default Error;
