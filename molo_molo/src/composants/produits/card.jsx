import { motion } from "framer-motion"
import { convertirEuroEnFCFA } from "../../fonction/convertisseur_prix"
import { useState } from "react"

export function Card({ produit }) {
    const [imageLoad, setImageLoad] = useState(true)

    return <>
        <div className="card card-new mb-4" style={{ width: "18rem" }} >
            <span className="badge bg-light position-absolute top-0 start-0 m-2 text-dark">
                Nouveau
            </span>
            <div className="img-container">
                {imageLoad && (
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
                    style={{ cursor: 'pointer' }}

                    whileHover={{ scale: 1.1 }} //agrandir l'image a 110% quand il est survolé
                    transition={{ duration: 0.3 }} //ajoute une transition fluide sur 0.3 secondes

                    onLoad={() => setImageLoad(false)}
                    hidden={imageLoad} //masquer l'image s'il n'est pas totalement chargé
                ></motion.img>
            </div>

            <div className="card-body text-center">
                <h5 className="card-title">{produit.title}</h5>
                <h4 className="card-title mb-4">{convertirEuroEnFCFA(produit.price) + ' FCFA'}</h4>
                <div className="d-flex justify-content-center">
                    <a href={'./' + produit.id} className="btn btn-dark">A propos</a>
                </div>

            </div>
        </div>
    </>
}