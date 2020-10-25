import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemsContainer, EmptyMesage, CartDropdownButton } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
   <CartDropdownContainer>
      <CartItemsContainer>
         {cartItems.length ?
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />
            )
            :
            <EmptyMesage>Your cart is empty</EmptyMesage>}
      </CartItemsContainer>
      <CartDropdownButton onClick={() => {
         history.push('/checkout');
         dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CartDropdownButton>
   </CartDropdownContainer >
);

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));