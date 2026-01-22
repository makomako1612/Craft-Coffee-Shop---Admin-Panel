import { createContext, useState, useEffect } from 'react';

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState(() => {
    return JSON.parse(localStorage.getItem('ingredients')) || [];
  });

  const [coffees, setCoffees] = useState(() => {
    return JSON.parse(localStorage.getItem('coffees')) || [];
  });

  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(ingredients));
  }, [ingredients]);

  useEffect(() => {
    localStorage.setItem('coffees', JSON.stringify(coffees));
  }, [coffees]);

  return (
    <CoffeeContext.Provider
      value={{ ingredients, setIngredients, coffees, setCoffees }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
