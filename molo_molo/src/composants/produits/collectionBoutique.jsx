import { motion } from "framer-motion"
import { melangerUnTableau } from "../../fonction/melangerUnTableau"

export function CollectionBoutique({ produits }) {

    //cette variable contient les catégories de produits fournit par l'API
    let categories = []

    //faire le try pour obtenir la liste des categories sans répétition, "includes" permet de déterminer si un éléments existe dans un tableau
    produits.map((product) => {
        if (!categories.includes(product.category)) {
            categories.push(product.category)
        }
    })

    //modifier l'ordre des élements du tableau
    const produitCollection = melangerUnTableau(produits)

    return <>
        <div className="d-flex justify-content-center mt-5"><h3><strong>collection de la boutique</strong></h3></div>
        <div className="row justify-content-center ">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card card-collection mb-4" style={{ width: "18rem" }} >
                    <div className="img-container">
                        <motion.img
                            src={produitCollection[0].images[0]}
                            className="card-img-top img-cover img-fluid"
                            alt={produitCollection[0].title}
                            style={{ cursor: 'pointer' }}

                            whileHover={{ scale: 1.1 }} //agrandir l'image a 110% quand il est survolé
                            transition={{ duration: 0.3 }} //ajoute une transition fluide sur 0.3 secondes
                        ></motion.img>
                    </div>

                    <div className="card-body text-center">
                        <h5 className="card-title font-weight-bold">
                            collection: {produitCollection[0].category}
                        </h5>
                        <p className="card-text">
                            {produitCollection[0].title}
                        </p>
                        <div className="d-flex justify-content-center">
                            <a href={'./collection/' + produitCollection[0].id} className="btn btn-dark">collection</a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card card-collection mb-4" style={{ width: "18rem" }} >
                    <div className="img-container">
                        <motion.img
                            src={produitCollection[1].images[0]}
                            className="card-img-top img-cover img-fluid"
                            alt={produitCollection[1].title}
                            style={{ cursor: 'pointer' }}

                            whileHover={{ scale: 1.1 }} //agrandir l'image a 110% quand il est survolé
                            transition={{ duration: 0.3 }} //ajoute une transition fluide sur 0.3 secondes
                        ></motion.img>
                    </div>

                    <div className="card-body text-center">
                        <h5 className="card-title font-weight-bold">
                            collection: {produitCollection[1].category}
                        </h5>
                        <p className="card-text">
                            {produitCollection[1].title}
                        </p>
                        <div className="d-flex justify-content-center">
                            <a href={'./collection/' + produitCollection[1].id} className="btn btn-dark">collection</a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card card-collection mb-4" style={{ width: "18rem" }} >
                    <div className="img-container">
                        <motion.img
                            src={produitCollection[2].images[0]}
                            className="card-img-top img-cover img-fluid"
                            alt={produitCollection[2].title}
                            style={{ cursor: 'pointer' }}

                            whileHover={{ scale: 1.1 }} //agrandir l'image a 110% quand il est survolé
                            transition={{ duration: 0.3 }} //ajoute une transition fluide sur 0.3 secondes
                        ></motion.img>
                    </div>

                    <div className="card-body text-center">
                        <h5 className="card-title font-weight-bold">
                            collection: {produitCollection[2].category}
                        </h5>
                        <p className="card-text">
                            {produitCollection[2].title}
                        </p>
                        <div className="d-flex justify-content-center">
                            <a href={'./collection/' + produitCollection[2].id} className="btn btn-dark">collection</a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card card-collection mb-4" style={{ width: "18rem" }} >
                    <div className="img-container">
                        <motion.img
                            src={produitCollection[3].images[0]}
                            className="card-img-top img-cover img-fluid"
                            alt={produitCollection[3].title}
                            style={{ cursor: 'pointer' }}

                            whileHover={{ scale: 1.1 }} //agrandir l'image a 110% quand il est survolé
                            transition={{ duration: 0.3 }} //ajoute une transition fluide sur 0.3 secondes
                        ></motion.img>
                    </div>

                    <div className="card-body text-center">
                        <h5 className="card-title font-weight-bold">
                            collection: {produitCollection[3].category}
                        </h5>
                        <p className="card-text">
                            {produitCollection[3].title}
                        </p>
                        <div className=" d-flex justify-content-center">
                            <a href={'./collection/' + produitCollection[3].id} className="btn btn-dark">collection</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
}