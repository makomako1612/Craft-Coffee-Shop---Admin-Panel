import IngredientForm from '../components/IngredientForm';
import Table from '../components/Table';
import { useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const Ingredients = () => {
  const { ingredients, setIngredients } = useContext(CoffeeContext);

  return (
    <>
      <h2>Ingredients</h2>
      <IngredientForm />

      <Table
        headers={['Name', 'Price', 'Delete']}
        data={ingredients}
        renderRow={(item) => (
          <>
            <td>{item.name}</td>
            <td>{item.price} ₾</td>
            <td>
              <button
                onClick={() =>
                  setIngredients(ingredients.filter((i) => i.id !== item.id))
                }
              >
                X
              </button>
            </td>
          </>
        )}
      />
    </>
  );
};

export default Ingredients;
