/**
 * cette fonction reçois un tableau de produit et renvoie les meileurs produits en fonction de ses notes, sa disponibilité en stock le nombre de fois vu et noté etc...
 * @param {tableau} produits 
 * @param {number} limit 
 * @returns {tableau}
 */

export function getMeilleuresProduits(produits, limit = 8) {
    return produits
        .map(produit => {
            // Compter les avis positifs (rating >= 4)
            const positiveReviews = produit.reviews ? produit.reviews.filter(r => r.rating >= 4).length : 0;

            // Score basé sur les critères (poids ajusté)
            const score = 
                (produit.rating * 50) + // Note sur 5 pondérée à 50 points max
                (positiveReviews * 10) + // Chaque avis positif ajoute 10 points
                (produit.stock > 0 ? 20 : 0) + // Bonus si en stock
                (produit.discountPercentage * 2); // Réduction apporte un bonus faible

            return { ...produit, score }; // Ajouter le score au produit
        })
        .sort((a, b) => b.score - a.score) // Trier par score décroissant
        .slice(0, limit); // Garder les 8 meilleurs
}
