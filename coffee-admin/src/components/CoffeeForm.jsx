import { useContext, useEffect, useState } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const CoffeeForm = ({ editCoffee, setEditCoffee }) => {
  const { ingredients, coffees, setCoffees } =
    useContext(CoffeeContext);

  const [title, setTitle] = useState('');
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (editCoffee) {
      setTitle(editCoffee.title);
      setSelected(editCoffee.ingredients);
    }
  }, [editCoffee]);

  const toggleIngredient = (ingredient) => {
    setSelected((prev) =>
      prev.some((i) => i.id === ingredient.id)
        ? prev.filter((i) => i.id !== ingredient.id)
        : [...prev, ingredient]
    );
  };

  const totalPrice =
    2 + selected.reduce((sum, ing) => sum + ing.price, 0);

  const handleSubmit = () => {
    if (!title) return;

    if (editCoffee) {
      setCoffees(
        coffees.map((coffee) =>
          coffee.id === editCoffee.id
            ? {
                ...coffee,
                title,
                ingredients: selected,
                totalPrice,
              }
            : coffee
        )
      );
      setEditCoffee(null);
    } else {
      setCoffees([
        ...coffees,
        {
          id: Date.now(),
          title,
          ingredients: selected,
          totalPrice,
        },
      ]);
    }

    setTitle('');
    setSelected([]);
  };

  return (
    <>
      <h3>{editCoffee ? 'Edit Coffee' : 'Add Coffee'}</h3>

      <input
        placeholder="Coffee title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div>
        {ingredients.map((ing) => (
          <label key={ing.id} style={{ marginRight: '10px' }}>
            <input
              type="checkbox"
              checked={selected.some((i) => i.id === ing.id)}
              onChange={() => toggleIngredient(ing)}
            />
            {ing.name}
          </label>
        ))}
      </div>

      <p>Total price: {totalPrice} ₾</p>

      <button onClick={handleSubmit}>
        {editCoffee ? 'Save Changes' : 'Add Coffee'}
      </button>
    </>
  );
};

export default CoffeeForm;

