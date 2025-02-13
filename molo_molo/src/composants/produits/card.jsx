import { convertirEuroEnFCFA } from "../../fonction/convertisseur_prix"

export function Card({produit}){
    
    return <>
        <div className="card mb-4" style={{width: "18rem"}} >
            <img src={produit.images[0]} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{produit.title}</h5>
                <h4 className="card-title mb-4">{convertirEuroEnFCFA(produit.price) + ' FCFA'}</h4>
                <a href={'./'+produit.id} className="btn btn-dark">A propos</a>
            </div>
        </div>
    </>
}