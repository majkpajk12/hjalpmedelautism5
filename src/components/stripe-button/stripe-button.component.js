import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
   
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_peMbwzMsHm9BlAoATyf4O7r000SZg4PuMD';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!')
    }

    return(
        <StripeCheckout
            label='Pay now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton