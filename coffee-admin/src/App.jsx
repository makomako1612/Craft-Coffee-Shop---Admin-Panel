import CurrencyToggle from './components/CurrencyToggle';
import { CoffeeProvider } from './context/CoffeeContext';
import Ingredients from './pages/Ingredients';
import Coffees from './pages/Coffees';



function App() {
  return (
    <CoffeeProvider>
      <h1>☕ Craft Coffee Admin</h1>
      <>
    <CurrencyToggle />
     </>

      <Ingredients />
      <hr />
      <Coffees />
    </CoffeeProvider>
  );
}

export default App;

