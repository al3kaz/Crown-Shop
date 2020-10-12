import CartActionTypes from './cart.type';

export const toggleCartHidden = () => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
   type: CartActionTypes.ADD_ITEMS,
   payload: item
});

export const removeItem = item => ({
   type: CartActionTypes.REMOVE_ITEM,
   payload: item
 });

export const clearItemsFromCart = item =>({
   type: CartActionTypes.CLEAR_ITEM_FROM_CART,
   payload: item
});