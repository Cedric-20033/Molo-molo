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
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    // Fonction pour obtenir le nombre total d'articles dans le panier
    const getCartCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getCartCount }}>
            {children}
        </CartContext.Provider>
    );
}


export function useCart() {
    return useContext(CartContext);
}
