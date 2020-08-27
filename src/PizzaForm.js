import React from "react";
import './App.css';
const PizzaForm = (props) => {

    const {
        values,
        errors,
        inputChange,
        checkboxChange,
        disabled,
        submit
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
    }

    const onInputChange = evt => {
        const {name, value} = evt.target
        inputChange(name, value)
    }


    return(
    <form className='form-container' onSubmit={onSubmit}>
        <div className='submit__div'>
            <h2>Order a Pizza!</h2>
            <button id='submitBtn' disabled={disabled}>Order</button>
            <div className='errors'>
                <div>{errors.name}</div>
            </div>

            <div className='inputs'>
                <h4>Select your Pizza Details</h4>

                <label>This Pizza is for:&nbsp;
                    <input
                    name='name'
                    type='text'
                    value={values.name}
                    onChange={onInputChange}
                    
                    />

                </label>

                <label>Pizza Size:&nbsp;
                    <select
                    name='size'
                    value={values.size}
                    onChange={onInputChange}
                    >
                        <option value=''>Select an Option</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>

                </label>

                <div className='toppings'>
                    <h4>Toppings:</h4>
                    <label>Pepperoni&nbsp;
                        <input
                        type='checkbox'
                        name='pepperoni'
                        checked={values.toppings.pepperoni}
                        onChange={onCheckboxChange}

                        />

                    </label>

                    <label>Sausage&nbsp;
                        <input
                        type='checkbox'
                        name='sausage'
                        checked={values.toppings.sausage}
                        onChange={onCheckboxChange}
                        data-cy='sausage'
                        />

                    </label>

                    <label>Green Peppers&nbsp;
                        <input
                        type='checkbox'
                        name='green_peppers'
                        value={values.toppings.green_peppers}
                        onChange={onCheckboxChange}

                        />

                    </label>

                    <label>Mushrooms&nbsp;
                        <input
                        type='checkbox'
                        name='mushrooms'
                        value={values.toppings.mushrooms}
                        onChange={onCheckboxChange}
                        />

                    </label>

                    <label>Pineapple&nbsp;
                        <input
                        type='checkbox'
                        name='pineapple'
                        value={values.toppings.pineapple}
                        onChange={onCheckboxChange}

                        />

                    </label>
                </div>
                <div>
                    <label>Special Instructions:&nbsp;
                        <input 
                        type = 'text'
                        name = 'specialInstructions'
                        value={values.specialInstructions}
                        onChange={onInputChange}
                        />

                    </label>
                </div>

            </div>



        </div>

    </form>
    )

}

export default PizzaForm;