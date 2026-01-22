import { useContext, useState } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';
import CoffeeForm from '../components/CoffeeForm';
import Table from '../components/Table';

const Coffees = () => {
  const { coffees, setCoffees } = useContext(CoffeeContext);
  const [editCoffee, setEditCoffee] = useState(null);

  const deleteCoffee = (id) => {
    if (
      !window.confirm(
        'დარწმუნებული ხარ, რომ გინდა ამ ყავის წაშლა?'
      )
    )
      return;

    setCoffees(coffees.filter((coffee) => coffee.id !== id));
  };

  return (
    <>
      <h2>Coffees</h2>

      <CoffeeForm
        editCoffee={editCoffee}
        setEditCoffee={setEditCoffee}
      />

      <Table
        headers={['Title', 'Total Price', 'Actions']}
        data={coffees}
        renderRow={(coffee) => (
          <>
            <td>{coffee.title}</td>
            <td>{coffee.totalPrice} ₾</td>
            <td>
              <button onClick={() => setEditCoffee(coffee)}>
                ✏️
              </button>
              <button
                onClick={() => deleteCoffee(coffee.id)}
                style={{ marginLeft: '8px' }}
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

export default Coffees;


