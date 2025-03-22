import React, { useState, createContext } from 'react';

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItemCart(newItem) {
    const indexItem = cart.findIndex(item => item.id === newItem.id);

    if (indexItem !== -1) {
      
      const updatedCart = [...cart];  
      updatedCart[indexItem].amount = updatedCart[indexItem].amount + 1;
      updatedCart[indexItem].total = updatedCart[indexItem].amount * updatedCart[indexItem].price;

      setCart(updatedCart); 
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart(products => [...products, data]); 
  }

  function removeItemCart(product) {
    const indexItem = cart.findIndex(item => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      const updatedCart = [...cart]; 
      updatedCart[indexItem].amount = updatedCart[indexItem].amount - 1;
      updatedCart[indexItem].total = updatedCart[indexItem].total - updatedCart[indexItem].price;

      setCart(updatedCart); 
      return;
    }

    const updatedCart = cart.filter(item => item.id !== product.id); 
    setCart(updatedCart); 
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
        removeItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

