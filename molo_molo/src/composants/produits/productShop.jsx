import { motion } from "framer-motion"
import { useState } from "react"
import { convertirEuroEnFCFA } from "../../fonction/convertisseur_prix"
import Etoiles from "../autres/etoiles"

/**
 * ce composant retourne les cartes pour les produits de la page boutique
 * @param {classe_spéciale_et_produit} clas 
 * @returns 
 */
export function ProductShop({ clas, produit, addToCart, setShowNotification }) {

    const [loader, setloader] = useState(true)

    return <>
        <motion.div
            className="col-6 col-sm-4 col-lg-3 mb-3"

            initial={{ opacity: 0, y: 50, rotate: -5 }} // Départ caché en bas
            whileInView={{ opacity: 1, y: 0, rotate: 0 }} // Animation vers visible
            transition={{ duration: 0.6, ease: "easeOut" }} // Transition fluide
            viewport={{ once: true, amount: 0.3 }} // S'exécute une seule fois quand 30% de l'élément est visible
        >

            <div className="card" style={{ width: "auto", height: 'auto' }} >
                <div className={clas}>

                    <a href={"./" + produit.id} style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="img-container">
                            {loader && (
                                <div className="text-center">
                                    <div className="spinner-border text-dark" role="status">
                                        <span className="visually-hidden"></span>
                                    </div>
                                    <p>chargement de l'image...</p>
                                </div>
                            )}
                            <motion.img
                                src={produit.images[0]}
                                className="card-img-top img-cover img-fluid"
                                alt={produit.title}

                                whileHover={{ scale: 1.1 }} //agrandir l'image a 110% quand il est survolé
                                transition={{ duration: 0.3 }} //ajoute une transition fluide sur 0.3 secondes

                                onLoad={() => setloader(false)}
                                hidden={loader} //masquer l'image s'il n'est pas totalement chargé
                            ></motion.img>
                        </div>
                    </a>
                    <div className="card-body text-center">

                        <Etoiles reviews={produit.reviews} />
                        <h5
                            className="card-title truncated-title"
                            /* affichage du texte sur le curseur avec bootstrap */
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title={produit.title}

                        >{produit.title}</h5>
                        <p className="card-text">{convertirEuroEnFCFA(produit.price) + ' FCFA'}</p>

                        <div className="row">
                            <button
                                className="btn btn-danger mb-1"
                                onClick={() =>{ 
                                    addToCart(produit)
                                    setShowNotification(true) //faire apparaitre la notification
                                }}

                                /* affichage du texte sur le curseur avec bootstrap */
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title='ajputer au panier'>
                                <i className="fa-solid fa-cart-plus"></i>
                            </button>
                            <button
                                className="btn btn-outline-danger"

                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title='initialiser un payement par tranche'>
                                <i className="fa-solid fa-credit-card"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>

    </>
}