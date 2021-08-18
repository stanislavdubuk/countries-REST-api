import { CardProps } from './types';
import { CARD_lABELS } from './constants';

export const getCardData = ({ population, region, capital }: CardProps['country']) => {
  const data: Record<string, string | number> = {    
    population: population.toLocaleString(),   
    region,
    capital,
  }

  return Object.keys(data).map((key, index) => {
    return { label: CARD_lABELS[key], value: data[key], id: index }
  });
}