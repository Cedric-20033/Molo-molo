import { useLoaderData } from "react-router-dom";
import { Baniere } from "../baniere";
import './home.css'
import { Nouveauproduit } from "../produits/nouveauProduit";
import { CollectionBoutique } from "../produits/collectionBoutique";
import { useEffect } from "react";


export function Home(){

    const response = useLoaderData() //récupération des articles de l'API
    

    //ce tableau regroupe les 10 nouveaux produits qui seront affichés dans la selection nouveau
    let nouveauProduit = []

    for(var i=0; i<10 ; i++){
        nouveauProduit.push(response.products[i])
    }

    //un nombre aléatoire entre 0 et 29 pour afficher un produit sur la bande de promotion
    const RandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 30); // Nombre entre 0 et 29
      
        return randomNumber;
    };
      

    return <>
    
        <Baniere promo={response.products[RandomNumber()]}/>
        <div className="container">
            <Nouveauproduit produits={nouveauProduit}/>
            <CollectionBoutique produits={response.products}/>
        </div>
    </>
}