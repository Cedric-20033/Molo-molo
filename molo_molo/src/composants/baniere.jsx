import { motion } from "framer-motion"
import { convertirEuroEnFCFA } from "../fonction/convertisseur_prix"
import { useState } from "react"

export function Baniere({ promo }) {
    const [imageLoader, setImageLoader] = useState(true)

    return <>
        <div className="bg-warning text-dark text-center p-5 ">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-5">
                    <div className="img-container">
                        {imageLoader && (<div>
                            <div className="spinner-border text-dark" role="status">
                                <span className="visually-hidden"></span>
                            </div>
                            <p>chargement d'une image de <strong>{promo.title}</strong>...</p>
                        </div>) /**/}
                        <motion.img
                            src={promo.images[0]}
                            className=" img-cover img-fluid"
                            whileHover={{ scale: 1.1 }} //agrandir l'image a 110% quand il est survolé

                            initial={{ opacity: 0, scale: 0.8 }} // Départ avec opacité 0 et taille réduite
                            animate={{ opacity: 1, scale: 1 }}  // Arrivée avec opacité 1 et taille normale
                            transition={{ duration: 0.3, ease: "easeOut" }} // Transition fluide

                            onLoad={() => setImageLoader(false)} //faire passer la valeur de imageLoader a false si l'image a totalement chargé
                            hidden={imageLoader} //pour masquer l'image le temps que ça finise de charger
                        ></motion.img>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7 d-flex justify-content-center align-item-center">
                    <div>
                        <h1 className="font-weight-bold">Votre Achat, votre <span className="text-danger">Epargne</span></h1>
                        <p className="lead">simplifiez vous la vie</p>
                        <h4 className="font-weight-bold">transformez vos Achats en épargne sans effort.</h4>
                        <p className="lead text-danger font-weight-bold">{promo.title + ' (' + convertirEuroEnFCFA(promo.price) + ' FCFA)'}</p>
                        <motion.a
                            href="#"
                            style={{ backgroundColor: 'red', border: 'none' }}
                            className="btn btn-primary mt-3"

                            whileTap ={{scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >Econnomisez maintenant</motion.a>
                    </div>

                </div>
            </div>

        </div>
    </>
}