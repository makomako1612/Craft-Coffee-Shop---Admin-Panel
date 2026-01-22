import { useContext, useEffect, useState } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const IngredientForm = ({ editIngredient, setEditIngredient }) => {
  const { ingredients, setIngredients } =
    useContext(CoffeeContext);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editIngredient) {
      setName(editIngredient.name);
      setPrice(editIngredient.price);
    }
  }, [editIngredient]);

  const handleSubmit = () => {
    if (!name || !price) return;

    if (editIngredient) {
      setIngredients(
        ingredients.map((ing) =>
          ing.id === editIngredient.id
            ? { ...ing, name, price: Number(price) }
            : ing
        )
      );
      setEditIngredient(null);
    } else {
      setIngredients([
        ...ingredients,
        {
          id: Date.now(),
          name,
          price: Number(price),
        },
      ]);
    }

    setName('');
    setPrice('');
  };

  return (
    <>
      <h3>
        {editIngredient ? 'Edit Ingredient' : 'Add Ingredient'}
      </h3>

      <input
        placeholder="Ingredient name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price (GEL)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editIngredient ? 'Save' : 'Add'}
      </button>
    </>
  );
};

export default IngredientForm;

