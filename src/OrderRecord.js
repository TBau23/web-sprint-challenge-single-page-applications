import React from 'react'

const OrderRecord = (props) => {
    const {details} = props

    if (!details) {
        return <h3>Fetching your order details ...</h3>
    }

    return (
        <div className='order-record'>
            <h2>{details.name}</h2>
            <p>{details.size}</p>
            <p>{details.specialInstructions}</p>

            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default OrderRecord;