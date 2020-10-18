import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51HZZBTJ8BGCRIjuTy1Ov9XeTsZSCjXOhkHjK3fB4sHFXA6Du6QnIBnbApVNJB3TC2ckWtRA2RkQMTxEp8twAdOs900hUsK1nwD';
   const onToken = token => {
      console.log(token);
      alert('Payments successful');
   }

   return (
      <StripeCheckout
         name="CROWN"
         label="Pay Now"
         billingAddress
         shippingAddress
         image="https://sendeyo.com/up/d/f3eb2117da"
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='PayNow'
         token={onToken}
         stripeKey={publishableKey}
      />
   );
}

export default StripeCheckoutButton;