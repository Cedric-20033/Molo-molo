import { useState } from "react"
import { ErreurFetchProduits } from "../autres/erreurFetchProduits"
import { BaniereShop } from "../baniereShop"
import { useProducts } from "../context/ProductContext"
import { Footer } from "./footer"
import "./shop.css"

export function Shop() {

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

    return <>
        <BaniereShop />
        <div className="container-fluid mt-3 d-flex">

            {/* Filtre */}
            <aside className="col-lg-3 overlay d-none d-lg-block" id="overlay">
                <div className="overlay-content" id="overlay-content">
                    <div className="d-flex"><h5 className="mt-4">Filtres</h5></div>
                    <div className="filter-category">
                        <h6>CATEGORIES</h6>
                        <ul className="list-unstyled">
                            <li><input type="checkbox" name="category" value="all" />tous</li>
                            <li><input type="checkbox" name="category" value="ordinateur" />ordinateur</li>
                            <li><input type="checkbox" name="category" value="automobile" />automobile</li>
                            <li><input type="checkbox" name="category" value="cuisine" />cuisine</li>
                            <li><input type="checkbox" name="category" value="electromenager" />électro-ménager</li>
                            <li><input type="checkbox" name="category" value="meuble" />meuble</li>
                            <li><input type="checkbox" name="category" value="montre" />montre</li>
                        </ul>
                    </div>
                    <div className="filter-price">
                        <h6>PRIX</h6>
                        <ul className="list-unstyled">
                            <li><input type="checkbox" name="price" value="0-10000" />0-10000</li>
                            <li><input type="checkbox" name="price" value="10000-100000" />10.000xaf - 100.000xaf</li>
                            <li><input type="checkbox" name="price" value="100000-200000" />100.000xaf - 200.000xaf</li>
                            <li><input type="checkbox" name="price" value="200000-300000" />200.000xaf - 300.000xaf</li>
                            <li><input type="checkbox" name="price" value="400000" />400.000xaf +</li>
                        </ul>
                    </div>

                    <button type="button" className="btn btn-danger d-none" id="close-overlay">Fermer</button>
                </div>
            </aside>

            <button className="arrow-button d-block d-lg-none" id="arrow-button" style={{border: "none"}}>Filtres &#x25B2;</button>

            {/* Contenu principal */}
            {
                //<!-- produits-->
            }
            <main className="col-12 col-lg-9">
                <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                    <h5>Articles</h5>
                    <div>
                        <span>Trier par</span>
                        <select id="sort" className="form-control d-inline-block w-auto">
                            <option value="default">par défaut</option>
                            <option value="price_asc">prix croissant</option>
                            <option value="price_desc">prix décroissant</option>
                        </select>
                    </div>
                </div>

                <div id="product-grid" className="row">
                    {
                        //-- les produits seront inséré ici via js --
                    }

                </div>
                <div className="spinner-border d-block" id="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="text-center mt-4 mb-4">
                    <button id="show-more" className="btn btn-dark">suivant</button>
                </div>
            </main>
        </div>
        <Footer />
    </>
}