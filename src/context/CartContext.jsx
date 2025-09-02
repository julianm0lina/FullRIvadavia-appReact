import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cargar carrito desde LocalStorage al iniciar
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar carrito en LocalStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar items al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar items del carrito
  const removeItem = (id) => setCart(cart.filter((prod) => prod.id !== id));

  // Vaciar el carrito
  const clear = () => setCart([]);

  // Cantidad total de items
  const cartTotal = () => cart.reduce((acc, prod) => acc + prod.quantity, 0);

  // Ver si un item ya está en el carrito
  const isInCart = (id) => cart.some((prod) => prod.id === id);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, cartTotal, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
