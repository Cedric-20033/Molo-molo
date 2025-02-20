import { useEffect, useRef, useState } from "react";
import { ErreurFetchProduits } from "../autres/erreurFetchProduits";
import { BaniereShop } from "../baniereShop";
import { useProducts } from "../context/ProductContext";
import { Footer } from "./footer";
import "./shop.css";
import { Modal } from "../autres/modal";
import { GetCategorie } from "../autres/getCategorie";

export function Shop() {
    const { products, loading, error } = useProducts();

    const [showModal, setShowModal] = useState(false);
    const refModal = useRef(null);
    const refFiltre = useRef(null);

    // Initialisation correcte de selectedCategories
    const [selectedCategories, setSelectedCategories] = useState({});

    // Mettre à jour selectedCategories quand les produits sont chargés
    useEffect(() => {
        if (products.length > 0) {
            const initialCategories = {};
            products.forEach(product => {
                initialCategories[product.category] = true;
            });
            setSelectedCategories(initialCategories);
        }
    }, [products]);

    if (loading) return <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center">
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden"></span>
            </div>
            <p>chargements des articles...</p>
        </div>
    </div>

    if (error) return <ErreurFetchProduits error={error} />

    const categories = Array.from(new Set(products.map(product => product.category)));

    return (
        <>
            <BaniereShop />
            <div className="container-fluid mt-3 d-flex">
                {/* Filtre */}
                <aside ref={refFiltre} className="col-md-3 overlay d-none d-md-block" id="overlay">
                    <div className="overlay-content" id="overlay-content">
                        <h5 className="mt-4">Filtres</h5>
                        <div className="filter-category">
                            <h6>CATEGORIES</h6>
                            <ul className="list-unstyled">
                                {categories.map((cat) => (
                                    <GetCategorie
                                        key={cat}
                                        cat={cat}
                                        selectedCategories={selectedCategories}
                                        setSelectedCategories={setSelectedCategories}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Bouton flottant pour ouvrir la modal */}
                {!showModal && (
                    <button
                        type="button"
                        className="arrow-button d-block d-md-none"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalFiltre"
                        id="openModal"
                        style={{ border: "none" }}
                        onClick={() => setShowModal(true)}
                    >
                        Filtres &#x25B2;
                    </button>
                )}

                {/* Contenu principal */}
                <main className="col-12 col-md-9">
                    <h5>Articles</h5>
                    <div id="product-grid" className="row">
                        {/* Les produits seront affichés ici */}
                    </div>
                </main>
            </div>

            <Footer />

            {/* Passer selectedCategories à la Modal */}
            <Modal ref={refModal} setShowModal={setShowModal} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
        </>
    );
}
