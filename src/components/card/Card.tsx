import { FC } from 'react';
import { Link } from 'react-router-dom';

import { getCardData } from './helpers';
import { CardProps, CardItemProps } from './types';

import s from './Card.module.scss';


const CardItem: FC<CardItemProps> = ({ label, value }) => {
  return <div><span>{label}</span> {value}</div>
}

const Card: FC<CardProps> = ({ country }) => {
  const data = getCardData(country);
  const { alpha3Code, flag , name } = country;  

  return (
    <div className={s.card}>
      <Link className={s.link} to={`/country/${alpha3Code}`}>
        <div className={s.card_top}>
          <img src={flag} alt='flag' />
        </div>
        <div className={s.card_bottom}>
          <h3>{name}</h3>
          {data.map(({ label, value }, index) => <CardItem key={index} label={label} value={value} />)}         
        </div>
      </Link>
    </div>
  );
};

export default Card;
