import './Card.scss';

interface Props {
  name: string;
}

const Card: React.FC<Props> = ({ name }) => {
  return (
    <div className='card'>
      <div className='card_top'>
        <img
          src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'
          alt='flag'
        />
      </div>
      <div className='card_bottom'>
        <h3>{name}</h3>
        <div>
          <span>Population:</span> 323,947,000
        </div>
        <div>
          <span>Region:</span> Americas
        </div>
        <div>
          <span>Capital:</span> Washington, D.C.
        </div>
      </div>
    </div>
  );
};

export default Card;
