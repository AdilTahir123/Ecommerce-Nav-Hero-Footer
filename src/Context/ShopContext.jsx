import React, { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets.js";

// Create the context
export const ShopContext = createContext();

// Define the provider component
const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // ✅ Add cart state
  const [cart, setCart] = useState([]);

  // ✅ Add "Add to Cart" function
  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      // update quantity
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // add new item
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // ✅ Add "Remove from Cart" (optional)
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item._id !== productId));
  };

const getCartCount = () => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

const value = {
  products,
  currency,
  delivery_fee,
  search, setSearch,
  showSearch, setShowSearch,
  cart,
  addToCart,
  removeFromCart,
  getCartCount, // ✅ pass in context
};

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
