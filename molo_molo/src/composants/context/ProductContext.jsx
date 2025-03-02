import { createContext, useEffect, useState, useContext } from "react";

// Création du contexte pour que les produits soient obtenu une fois lors de l'apparition complet de l'application, ses produits seront disponibles dans toute l'application
const ProductContext = createContext();

// Fournisseur de contexte
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]); //si on met null comme valeur par défaut, il y aura les problèmes lors du rendu quand les produits ne seront pas encore chargés
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products); // Stocke les produits
      } catch (err) {
        setError("Erreur lors du chargement des articles");
        console.log(err)
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []); // Chargement une seule fois au montage du composant

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

/** 
 *  Hook personnalisé pour utiliser le contexte
 * 
 */

export function useProducts() {
  return useContext(ProductContext);
}

export default ProductContext;
