import { useContext, useState } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const CoffeeForm = () => {
  const { ingredients, coffees, setCoffees } = useContext(CoffeeContext);
  const [title, setTitle] = useState('');
  const [selected, setSelected] = useState([]);

  const toggleIngredient = (ingredient) => {
    setSelected((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const totalPrice =
    2 + selected.reduce((sum, ing) => sum + ing.price, 0);

  const addCoffee = () => {
    setCoffees([
      ...coffees,
      {
        id: Date.now(),
        title,
        ingredients: selected,
        totalPrice,
      },
    ]);

    setTitle('');
    setSelected([]);
  };

  return (
    <>
      <input
        placeholder="Coffee title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div>
        {ingredients.map((ing) => (
          <label key={ing.id}>
            <input
              type="checkbox"
              onChange={() => toggleIngredient(ing)}
            />
            {ing.name}
          </label>
        ))}
      </div>

      <p>Total price: {totalPrice} ₾</p>

      <button onClick={addCoffee}>Add Coffee</button>
    </>
  );
};

export default CoffeeForm;
