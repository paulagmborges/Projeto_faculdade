import React, { useState, createContext } from 'react';

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItemCart(newItem) {
    const indexItem = cart.findIndex(item => item.id === newItem.id);
    if (indexItem !== -1) {
      // Lógica para atualizar quantidade se já existir no carrinho
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };
    setCart(products => [...products, data]);
    console.log([...cart, data]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
      }}
    >
      {/* Certifique-se de encapsular children corretamente */}
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
