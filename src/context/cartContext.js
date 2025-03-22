import React, { useState, createContext } from 'react';

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0); // Corrigir o nome da variável para total

  // Função para adicionar item ao carrinho
  function addItemCart(newItem) {
    const indexItem = cart.findIndex(item => item.id === newItem.id);

    if (indexItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[indexItem].amount = updatedCart[indexItem].amount + 1;
      updatedCart[indexItem].total = updatedCart[indexItem].amount * updatedCart[indexItem].price;

      setCart(updatedCart); 
      totalResultCart(updatedCart); // Recalcular total após a adição
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    const updatedCart = [...cart, data];
    setCart(updatedCart); 
    totalResultCart(updatedCart); // Recalcular total após a adição
  }

  // Função para remover item do carrinho
  function removeItemCart(product) {
    const indexItem = cart.findIndex(item => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      const updatedCart = [...cart]; 
      updatedCart[indexItem].amount = updatedCart[indexItem].amount - 1;
      updatedCart[indexItem].total = updatedCart[indexItem].total - updatedCart[indexItem].price;

      setCart(updatedCart); 
      totalResultCart(updatedCart); // Recalcular total após a remoção
      return;
    }

    const updatedCart = cart.filter(item => item.id !== product.id); 
    setCart(updatedCart); 
    totalResultCart(updatedCart); // Recalcular total após a remoção
  }

  // Função para calcular o total do carrinho
  function totalResultCart(items) {
    const result = items.reduce((acc, obj) => acc + obj.total, 0);
    setTotal(result); // Atualizar o total
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
        removeItemCart,
        total, // Passando o total para o contexto
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

