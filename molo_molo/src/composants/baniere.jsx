import { convertirEuroEnFCFA } from "../fonction/convertisseur_prix"

export function Baniere({promo}){

    return <>
        <div className="bg-warning text-dark text-center p-5 ">
            <div className="row">
            <div className="col-12 col-md-6 col-lg-5">
                <div className="img-container">
                    <img src={promo.images[0]} className=" img-cover img-fluid"/>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7 d-flex justify-content-center align-item-center">
                <div>
                    <h1 className="font-weight-bold">Votre Achat, votre <span className="text-danger">Epargne</span></h1>
                    <p className="lead">simplifiez vous la vie</p>
                    <h4 className="font-weight-bold">transformez vos Achats en épargne sans effort.</h4>
                    <p className="lead text-danger font-weight-bold">{promo.title + ' (' + convertirEuroEnFCFA(promo.price) + ' FCFA)'}</p>
                    <a href="#" style={{backgroundColor: 'red', border: 'none'}} className="btn btn-primary mt-3">Econnomisez maintenant</a>
                </div>
                
            </div>
            </div>
            
        </div>
    </>
}