import { Baniere } from "../baniere";
import './home.css'
import { Nouveauproduit } from "../produits/nouveauProduit";
import { CollectionBoutique } from "../produits/collectionBoutique";
import { Footer } from "./footer";
import { HomePrecision } from "../autres/homePrecision";
import { MeilleureVentes } from "../produits/meilleuresVentes";
import { getMeilleuresProduits } from "../../fonction/meilleuresProduits";
import { useProducts } from "../context/ProductContext";
import { ErreurFetchProduits } from "../autres/erreurFetchProduits";

export function Home() {

    const { products, loading, error } = useProducts() //récupération des articles de l'API
    if (loading) return <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center">
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden"></span>
            </div>
            <p>chargements des articles...</p>
        </div>
        
    </div>

    if (error) return <ErreurFetchProduits error={error} />

    //ce tableau regroupe les 10 nouveaux produits qui seront affichés dans la selection nouveau
    let nouveauProduit = []

    for (var i = 0; i < 10; i++) {
        nouveauProduit.push(products[i])
    }

    //un nombre aléatoire entre 0 et 29 pour afficher un produit sur la bande de promotion
    const RandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 30); // Nombre entre 0 et 29

        return randomNumber;
    };


    return <>

        <Baniere promo={products[RandomNumber()]} />
        <div className="container">
            <Nouveauproduit produits={nouveauProduit} />
            <CollectionBoutique produits={products} />
            <MeilleureVentes produits={getMeilleuresProduits(products, 8)} />

        </div>
        <div>
            <HomePrecision />
        </div>

        <Footer />
    </>
}