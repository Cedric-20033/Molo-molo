import { useEffect, useRef, useState } from "react";
import { ErreurFetchProduits } from "../autres/erreurFetchProduits";
import { BaniereShop } from "../baniereShop";
import { useProducts } from "../context/ProductContext";
import { Footer } from "./footer";
import "./shop.css";
import { Modal } from "../autres/modal";
import { GetCategorie } from "../autres/getCategorie";
import { Radio } from "../formulaires/radio";
import { filtreProduits } from "../../fonction/filtreProduits";
import { ShowProducts } from "../produits/showProductsShop";
import { melangerUnTableau } from "../../fonction/melangerUnTableau";
import { PaginationShop } from "../autres/paginationShop";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Cart } from "../cart/setCart";

export function Shop() {

    //récupération des données de produits depuis le productContext a parti du useProducts
    const { products, loading, error } = useProducts();

    //cette variable contendra la liste des produits a afficher
    const [productsShow, setProductShow] = useState([])

    //définit si la modal des filtres est ouverte ou pas
    const [showModal, setShowModal] = useState(false);
    //définit une référence pour les modals
    const refModal = useRef(null);
    //définit une reference pour la section filtre
    const refFiltre = useRef(null);

    // Initialisation de selectedCategories pour stocker les categories filtrées
    const initialSelectedCategorie = { categorie: {}, prix: { min: 0, max: 0 } }
    const [selectedCategories, setSelectedCategories] = useState(() => {
        try{
            const item = JSON.parse(localStorage.getItem("selectedCategorie")) //récupération des categories filtrées dans le localStorage et le convertir en format JSON
            if(item){
                return item
            }else{
                return initialSelectedCategorie
            }
        } catch(e){
            return initialSelectedCategorie //si les choses se passent mal, retourner les valeurs par défaut
        }
        
    });

    // État pour la pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8; // Nombre de produits affichés par page

    //gestion du panier
    const [cart, addToCart, updateQuantity, removeFromCart, sizeCart] = Cart([])
    const t = sizeCart
    console.log(t)
      


    // Mettre à jour selectedCategories quand les produits sont chargés et a chaque fois que products change
    useEffect(() => {
    
        if (products.length > 0) {
            const item = JSON.parse(localStorage.getItem("selectedCategorie"))
            const initialCategories = item? item.categorie : {};
            
            if(JSON.stringify(item.categorie) === '{}'){ //vérifie si les informations prises sur le localStorage qui contient les categories sont vides, si oui on crée un nouveau
                products.forEach(product => {
                initialCategories[product.category] = false;
            });
            }
            
            setSelectedCategories((v) => ({
                ...v,
                categorie: initialCategories
            }));
        }
    }, [products]);

    //mettre a jour la liste des produits a afficher
    useEffect(() => {

        try {
            localStorage.setItem("selectedCategorie", JSON.stringify(selectedCategories)) //transformer les informations de filtre en string et l'insérer dans le stockage local 
        } catch(e){
            <ErreurFetchProduits error="une erreur s'est produite avec votre stockage local" />
        }
        setProductShow(melangerUnTableau(filtreProduits(products, selectedCategories)))
        

    }, [products, selectedCategories])

    if (loading) return <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center">
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden"></span>
            </div>
            <p>chargements des articles...</p>
        </div>
    </div>

    if (error) return <ErreurFetchProduits error={error} />

    //on récupère les catégories pour les afficher sur la section des filtres
    const categories = Array.from(new Set(products.map(product => product.category)));

    // Calculer l'index des produits à afficher
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsShow.slice(indexOfFirstProduct, indexOfLastProduct);


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

                    <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                        <h5>Articles</h5>
                        <div>
                            <span className="mr-2">Trier</span>
                            <select id="sort" className="form-control d-inline-block w-auto">
                                <option value="default">par défaut</option>
                                <option value="price_asc">prix croissant</option>
                                <option value="price_desc">prix décroissant</option>
                            </select>
                        </div>

                    </div>
                    <div id="product-grid" className="row">
                        {
                            /* Les produits seront affichés ici */

                            <>
                                <ShowProducts products={currentProducts} addToCart={addToCart}/>
                                <PaginationShop currentPage={currentPage} setCurrentPage={setCurrentPage} productsShow={productsShow} productsPerPage={productsPerPage}/>
                            </>
                        }

                    </div>
                </main>
            </div>

            <Footer />

            {/* Passer selectedCategories à la Modal */}
            <Modal ref={refModal} setShowModal={setShowModal} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
        </>
    );
}

