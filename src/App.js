import React from 'react'
import CounterApp from './Components/CounterApp';
import ConditionalApp from './Components/ConditionalApp';
import ErrorApp from './Components/ErrorApp';
import ProductApp from './Components/ProductApp';
import ShoppingCart from './Components/ShoppingCart';

function App() {


  return (
    <div>
      <h1>Ejemplos Hook React</h1>
      <CounterApp />
      <hr />
      <ConditionalApp />
      <hr />
      <ErrorApp />
      <hr />
      <ProductApp />
      <hr />
      <ShoppingCart />
    </div>   
  );
}

export default App;