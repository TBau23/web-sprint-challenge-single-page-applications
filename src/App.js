import React from "react";
import { Switch, Route} from 'react-router-dom'
import HomePage from './HomePage'
import PizzaForm from './PizzaForm'


const App = () => {
  return (
    <div className='app'>
      <h1>Lambda Eats</h1>

    
      <Switch>
        <Route path='/order'>
          <PizzaForm />
        </Route>

        <Route path='/' exact>
          <HomePage />
        </Route>

      </Switch>
    

    </div>
  );
};
export default App;
