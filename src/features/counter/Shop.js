import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem,
  removeItem,
  selectCartItems
} from './shopSlice';
import styles from './Shop.module.css';

const products = [
  {name: "Sledgehammer", price: 125.75},
  {name: "Axe", price: 190.50},
  {name: "Bandsaw", price: 562.13},
  {name: "Chisel", price: 12.9},
  {name: "Hacksaw", price: 18.45}
]

export function Shop() {
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();
    
  const renderShop =
    products.map((product) => (
    <div key={product.name} className={styles.row}>
      <span className={styles.value}>{product.name}</span>
      <span className={styles.value}>${product.price.toFixed(2)}</span>
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(addItem(product))}
      >Add to cart</button>
    </div>
    ))

    const renderCart = Object.entries(cart).map(([key,{price, quantity}]) => (
      <div key={key}>
        <span className={styles.value}>{quantity}</span>
        <span className={styles.value}>{key}</span>
        <span className={styles.value}>${price}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(removeItem({name: key, price}))}
        >Remove from cart</button>
      </div>
    ))

    const renderCartTotal = Object.keys(cart).reduce((acc, currentItem) => (
        acc + cart[currentItem].total
      ), 0).toFixed(2)

  return (
    <div>
      <h1>Shop</h1>
      {renderShop}
      <h1>Cart</h1>
      {renderCart}
      <span className={styles.value}>Cart Total Value: ${renderCartTotal}</span>
    </div>
  );
}
