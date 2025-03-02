/**
 * cette fonction prend en paramttre un tableau de produit et les critéres de selection puis renvie le tableau trié
 * 
 * @param {tableau} products 
 * @param {object} selectedProduct 
 */
export function filtreProduits(products, selectedProduct) {
    const { categorie, prix } = selectedProduct;

    // Vérifier si toutes les catégories sont à false
    //every retourne true ou false si tous les éléments d'un tablau remplissent une condition
    const allCategoriesFalse = Object.values(categorie).every((value) => value === false);
    // Vérifier si les filtres de prix sont inactifs (min et max à 0)
    const priceFilterInactive = prix.min === 0 && prix.max === 0;

    return products.filter((product) => {
        // Vérifier si la catégorie est activée ou si toutes les catégories sont fausses
        const categoryMatch = allCategoriesFalse || categorie[product.category];

        // Vérifier si le prix est dans l'intervalle ou si le filtre de prix est inactif
        const priceMatch = priceFilterInactive || (product.price >= prix.min && product.price <= prix.max);

        return categoryMatch && priceMatch;
    });

}