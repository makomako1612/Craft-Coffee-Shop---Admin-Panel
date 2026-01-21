import { useContext, useState } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const IngredientForm = () => {
  const { ingredients, setIngredients } = useContext(CoffeeContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      {
        id: Date.now(),
        name,
        price: Number(price),
      },
    ]);

    setName('');
    setPrice('');
  };

  return (
    <>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addIngredient}>Add Ingredient</button>
    </>
  );
};

export default IngredientForm;
