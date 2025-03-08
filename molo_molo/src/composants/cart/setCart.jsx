import { useState } from "react";

export function Cart({ product }) {

    //création du panier
    const [cart, setCart] = useState(product)

    const addToCart = (newItem) => {
        //vérifier si le produit existe déjà dans le panier
        /*const existingItem = cart.find(item => item.id === newItem.id);
        
        if (existingItem) {
          existingItem.quantity += newItem.quantity;
        } else {
          cart.push(newItem);
        }*/

        setCart(v => {
            return v.push(newItem)
        })
        console.log(cart)
    };



    const sizeCart = () => {
        return cart.lenght
    }

    const updateQuantity = () => {

    }

    const removeFromCart = () => {

    }

    return [cart, addToCart, updateQuantity, removeFromCart, sizeCart]
}