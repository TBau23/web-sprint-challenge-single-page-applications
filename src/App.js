import React, { useState, useEffect } from "react";
import { Switch, Route} from 'react-router-dom'
import HomePage from './HomePage'
import PizzaForm from './PizzaForm'
import formSchema from './Validation/formSchema'
import * as yup from 'yup'
import axios from 'axios'



const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  green_peppers: false,
  mushrooms: false,
  pineapple:false,
  specialInstructions: '',
}

const initialFormErrors = {
  name: '',

}

const initialOrders = [];
const initialDisabled = true;



const App = () => {

  const [ orders, setOrders ] = useState(initialOrders)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)

  const getOrders = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log(res.data)
        setOrders(res.data)
      })
      .catch(err => {
        debugger
      })
  }

  const postNewOrder = newOrder => {

    axios.post('https://reqres.in/api/users', newOrder)
      .then(res => {
        setOrders([...orders, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  // Form Actions Below

const inputChange = (name, value) => {

  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })

    setFormValues({
      ...formValues,
      [name]: value
    })

}

const checkboxChange = (name, isChecked) => {
  setFormValues({
    ...formValues,
    [name]: isChecked
  })
}

const submit = () => {

  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    pepperoni: formValues.pepperoni,
    sausage: formValues.sausage,
    green_peppers: formValues.green_peppers,
    mushrooms: formValues.mushrooms,
    pineapple: formValues.pineapple,
    specialInstructions: formValues.specialInstructions.trim(),
  }

  postNewOrder(newOrder)
}

useEffect(() => {
  getOrders()
}, [])

useEffect(() => {
  formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
}, [formValues])


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
