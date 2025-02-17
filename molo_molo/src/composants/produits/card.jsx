import { motion } from "framer-motion"
import { useState } from "react"
import { convertirEuroEnFCFA } from "../../fonction/convertisseur_prix"

/**
 * 
 * @param {classe_spéciale_et_produit} clas 
 * @returns 
 */
export function Card({ clas, produit }) {

    const [loader, setloader] = useState(true)

    return <>
        <div className="col-6 col-md-4 col-lg-3 mb-3">
            <a href={"./" + produit.id} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="card" style={{ width: "auto", height: 'auto' }} >
                    <div className={clas}>
                        <div className="d-flex justify-content-center">
                            <span className="badge bg-danger position-absolute top-0 start-0 m-2 text-light">
                                Best
                            </span>
                        </div>

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
                                className="card-img-top"
                                alt={produit.title}

                                whileHover={{ scale: 1.1 }} //agrandir l'image a 110% quand il est survolé
                                transition={{ duration: 0.3 }} //ajoute une transition fluide sur 0.3 secondes

                                onLoad={() => setloader(false)}
                                hidden={loader} //masquer l'image s'il n'est pas totalement chargé
                            ></motion.img>
                        </div>
                        <div className="card-body">
                            <h5
                                className="card-title truncated-title"
                                /* affichage du texte sur le curseur avec bootstrap */
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title={produit.title}

                            >{produit.title}</h5>
                            <p className="card-text">{convertirEuroEnFCFA(produit.price) + ' FCFA'}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    </>
}