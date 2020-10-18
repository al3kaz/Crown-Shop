import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.style.scss';

const CheckoutPage = ({ cartItems, total }) => {
   return (
      <div className="checkout-page">
         <header className="checkout-header">
            <div className="header-block">
               <span>Product</span>
            </div>
            <div className="header-block">
               <span>Description</span>
            </div>
            <div className="header-block">
               <span>Quantity</span>
            </div>
            <div className="header-block">
               <span>Prise</span>
            </div>
            <div className="header-block">
               <span>Remove</span>
            </div>
         </header>
         {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
         <div className="total">
            <span>
               TOTAL: {total}$
         </span>
         </div>
         <div className="test-warning">
            *Please use the following credit cart for payments* <br />
            4242424242424242 - CVC: Any 3 digits - Date: Any future date

         </div>
         <StripeCheckoutButton price={total} />
      </div>
   );
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);