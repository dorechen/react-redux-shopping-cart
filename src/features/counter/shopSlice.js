import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    cartItems: {},
  },
  reducers: {
    addItem: (state, action) => {
      const {name, price} = action.payload
      const {cartItems} = state

      const cartItem = cartItems[name] || {price, quantity: 0, total: 0};
      const newQuantity = cartItem.quantity + 1;
      const newTotal = cartItem.total + price;
      const newCartItems = {...cartItems, [name]: {price, quantity: newQuantity, total: newTotal}}

      return {...state, cartItems: newCartItems}
    },
    removeItem: (state, action) => {
      const {name, price} = action.payload
      const {cartItems} = state

      const cartItem = state.cartItems[name]
      if ( cartItem.quantity === 1){
        const newCartItems = {...state.cartItems}
        delete newCartItems[name]

        return {...state, cartItems: newCartItems}
      } else {
        const newQuantity = cartItem.quantity - 1;
        const newTotal = cartItem.total - price;
        const newCartItems = {...cartItems, [name]: {price, quantity: newQuantity, total: newTotal}}
        
        return {...state, cartItems: newCartItems}
      }
    },
  },
});

export const { addItem, removeItem } = shopSlice.actions;

export const selectCartItems = state => state.cartItems;

export default shopSlice.reducer;
