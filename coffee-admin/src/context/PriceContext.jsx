import { createContext, useState } from 'react';

export const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
  const [currency, setCurrency] = useState('GEL');
  const rate = 2.7;

  const convert = (gel) =>
    currency === 'GEL'
      ? `${gel} ₾`
      : `$${(gel / rate).toFixed(2)}`;

  return (
    <PriceContext.Provider
      value={{ currency, setCurrency, convert }}
    >
      {children}
    </PriceContext.Provider>
  );
};