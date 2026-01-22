import { useContext } from 'react';
import { PriceContext } from '../context/PriceContext';

const CurrencyToggle = () => {
  const { currency, setCurrency } = useContext(PriceContext);

  return (
    <button
      onClick={() =>
        setCurrency(currency === 'GEL' ? 'USD' : 'GEL')
      }
    >
      Currency: {currency}
    </button>
  );
};

export default CurrencyToggle;

