import { useState } from "react";

export function useCart(CartSent) {
  // Création du panier avec un état initial vide
  const initialCart = []
  const [cart, setCart] = useState(() => {
    try {
      const item = JSON.parse(localStorage.getItem("cart"))
      if (item) {
        return item
      } else {
        return initialCart
      }
    } catch (e) {
      return initialCart //si les choses se passent mal, retourner les valeurs par défaut
    }

  });

  // Fonction pour ajouter un produit au panier
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

  // Fonction pour obtenir la taille du panier
  const sizeCart = () => {
    return cart.length;
  };

  // Fonction pour mettre à jour la quantité d'un article
  const updateQuantity = (itemId, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Fonction pour supprimer un article du panier
  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  return { cart, addToCart, updateQuantity, removeFromCart, sizeCart };
}
