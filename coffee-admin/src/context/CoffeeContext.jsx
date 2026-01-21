import { createContext, useState } from 'react';

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [coffees, setCoffees] = useState([]);

  return (
    <CoffeeContext.Provider
      value={{
        ingredients,
        setIngredients,
        coffees,
        setCoffees,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
