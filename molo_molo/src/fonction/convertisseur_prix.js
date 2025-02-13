export function convertirEuroEnFCFA(prixEnEuro) {

    const tauxDeConversion = 655.957; // 1€ = 655.957 FCFA (ajuster selon le taux réel)

    const prixEnFCFA = prixEnEuro * tauxDeConversion;

    // Formater le prix en ajoutant un séparateur de milliers
    const prixFormate = prixEnFCFA.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // Séparateur de milliers avec espace

    return prixFormate; // Renvoie le prix en FCFA formaté
}