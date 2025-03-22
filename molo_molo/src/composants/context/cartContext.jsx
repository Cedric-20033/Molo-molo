import { createContext, useState, useContext, useRef } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const initialCart = []
  const [cart, setCart] = useState(() => {
    try {
      const item = JSON.parse(localStorage.getItem("cart"))

      return item || initialCart

    } catch (e) {
      return initialCart //si les choses se passent mal, retourner les valeurs par défaut
    }

  }); // Stocke les produits du panier

  const addToCart = (newItem) => {

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === newItem.id);

      if (existingItem) {
        // Mettre à jour la quantité si le produit existe déjà
        const t = prevCart.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );

        localStorage.setItem("cart", JSON.stringify(t))
        return t

      } else {
        // Ajouter un nouveau produit
        const t = [...prevCart, newItem];
        localStorage.setItem("cart", JSON.stringify(t))
        return t
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(item => item.id !== productId); // Crée un nouveau tableau sans l'élément
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Met à jour localStorage
      return updatedCart; // Met à jour le state
    });
  };


  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      setCart(prevCart => {
        const quantity = prevCart.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
        localStorage.setItem("cart", JSON.stringify(quantity))
        return quantity
      });
    };
  }


  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]))
  };

  // Fonction pour obtenir le nombre total d'articles dans le panier
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  //montant total du panier
  const getAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getCartCount, getAmount }}>
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  return useContext(CartContext);
}
