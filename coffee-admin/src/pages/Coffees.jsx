import { useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';
import CoffeeForm from '../components/CoffeeForm';
import Table from '../components/Table';

const Coffees = () => {
  const { coffees } = useContext(CoffeeContext);

  return (
    <>
      <h2>Coffees</h2>
      <CoffeeForm />

      <Table
        headers={['Title', 'Total Price']}
        data={coffees}
        renderRow={(coffee) => (
          <>
            <td>{coffee.title}</td>
            <td>{coffee.totalPrice} ₾</td>
          </>
        )}
      />
    </>
  );
};

export default Coffees;
