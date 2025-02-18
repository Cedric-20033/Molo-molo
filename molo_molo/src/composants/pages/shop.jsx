import { ErreurFetchProduits } from "../autres/erreurFetchProduits"
import { BaniereShop } from "../baniereShop"
import { useProducts } from "../context/ProductContext"
import { Footer } from "./footer"
import './shop.css'

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
        <div className="container mt-3">

        </div>
        <Footer />
    </>
}