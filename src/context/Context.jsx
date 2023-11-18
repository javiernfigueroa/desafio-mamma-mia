import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotal(total + item.price);
  };

  const removeFromCart = (item) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      const removedItem = updatedCart.splice(itemIndex, 1)[0];
      setCartItems(updatedCart);
      setTotal(
        (prevTotal) =>
          prevTotal - removedItem.price * (removedItem.quantity || 1)
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, total, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
