import { Card } from "./card";

export function MeilleureVentes({produits}) {

    return <>
        <div className="d-flex justify-content-center mt-5 mb-3">
            <h3>
                <strong>meilleures ventes</strong>
            </h3>
        </div>

        <div className="row justify-content-center">
            {produits.map((produit) => (<Card clas="card_meilleur" produit={produit} key={produit.title}/>))}
            
        </div>
    </>
}