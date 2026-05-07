import { useEffect, useState } from "react";
import { CartContext } from "./CartContextObject";
import { getStoredArray, setStoredValue } from "../utils/storageUtils";

const CART_STORAGE_KEY = "cart";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => getStoredArray(CART_STORAGE_KEY));

  useEffect(() => {
    setStoredValue(CART_STORAGE_KEY, cart);
  }, [cart]);

  const handleCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
