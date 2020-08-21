import React from "react";

const PizzaForm = () => {

    return(
    <form className='form-container'>
        <div className='submit__div'>
            <h2>Order a Pizza!</h2>
            <button id='submitBtn'>Order</button>
            <div className='errors'>
                <div></div>
            </div>

            <div className='inputs'>
                <h4>Select your Pizza Details</h4>

                <label>This Pizza is for:&nbsp;
                    <input
                    name='name'
                    type='text'

                    />

                </label>

                <label>Pizza Size:&nbsp;
                    <select
                    name='size'

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

                        />

                    </label>

                    <label>Sausage&nbsp;
                        <input
                        type='checkbox'
                        name='sausage'

                        />

                    </label>

                    <label>Green Peppers&nbsp;
                        <input
                        type='checkbox'
                        name='green_peppers'

                        />

                    </label>

                    <label>Mushrooms&nbsp;
                        <input
                        type='checkbox'
                        name='mushrooms'

                        />

                    </label>

                    <label>Pineapple&nbsp;
                        <input
                        type='checkbox'
                        name='pineapple'

                        />

                    </label>
                </div>
                <div>
                    <label>Special Instructions:&nbsp;
                        <input 
                        type = 'text'
                        name = 'specialInstructions'
                        />

                    </label>
                </div>

            </div>



        </div>

    </form>
    )

}

export default PizzaForm;