import { useContext, useState } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';
import { PriceContext } from '../context/PriceContext';
import CoffeeForm from '../components/CoffeeForm';
import Table from '../components/Table';

const Coffees = () => {
  const { coffees, setCoffees } = useContext(CoffeeContext);
  const { convert } = useContext(PriceContext);
  const [editCoffee, setEditCoffee] = useState(null);

  const deleteCoffee = (id) => {
    if (!window.confirm('დარწმუნებული ხარ?')) return;
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
        headers={['Title', 'Price', 'Actions']}
        data={coffees}
        renderRow={(coffee) => (
          <>
            <td>{coffee.title}</td>
            <td>{convert(coffee.totalPrice)}</td>
            <td>
              <button onClick={() => setEditCoffee(coffee)}>
                ✏️
              </button>
              <button onClick={() => deleteCoffee(coffee.id)}>
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


