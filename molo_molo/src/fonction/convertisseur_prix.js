export function convertirEuroEnFCFA(prixEnEuro) {
    const tauxDeConversion = 655.957; // 1€ = 655.957 FCFA 

    const prixEnFCFA = prixEnEuro * tauxDeConversion;

    // Arrondir au nombre entier supérieur
    const prixArrondi = Math.ceil(prixEnFCFA);

    // Formater le prix en ajoutant un séparateur de milliers (sans virgule)
    const prixFormate = prixArrondi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // Séparateur de milliers avec espace

    return prixFormate;
}
