import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CoffeeProvider } from './context/CoffeeContext';
import { PriceProvider } from './context/PriceContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PriceProvider>
      <CoffeeProvider>
        <App />
      </CoffeeProvider>
    </PriceProvider>
  </React.StrictMode>
);
