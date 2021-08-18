export interface CardProps {
  country: {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
    alpha3Code: string;
  };
}

export interface CardItemProps {
  label: string | number;
  value: string | number;
}