import { useContext, useState } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';
import IngredientForm from '../components/IngredientForm';
import Table from '../components/Table';

const Ingredients = () => {
  const { ingredients, setIngredients } =
    useContext(CoffeeContext);

  const [editIngredient, setEditIngredient] = useState(null);

  const deleteIngredient = (id) => {
    if (!window.confirm('Delete ingredient?')) return;
    setIngredients(
      ingredients.filter((ing) => ing.id !== id)
    );
  };

  return (
    <>
      <h2>Ingredients</h2>

      <IngredientForm
        editIngredient={editIngredient}
        setEditIngredient={setEditIngredient}
      />

      <Table
        headers={['Name', 'Price', 'Actions']}
        data={ingredients}
        renderRow={(ing) => (
          <>
            <td>{ing.name}</td>
            <td>{ing.price} ₾</td>
            <td>
              <button onClick={() => setEditIngredient(ing)}>
                ✏️
              </button>
              <button
                onClick={() => deleteIngredient(ing.id)}
              >
                ❌
              </button>
            </td>
          </>
        )}
      />
    </>
  );
};

export default Ingredients;

