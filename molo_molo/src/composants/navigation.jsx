import { NavLink, Outlet } from "react-router-dom"
import { useCart } from "./context/cartContext"

//cette fonction crée la barre de navigation pour l'afficher sur toutes les pages
export function Navigation() {

    //gestion du panier present dans le context
    const { getCartCount } = useCart()

    return <>
        <header className="fixed-top">
            <div className="">
                <div className="bg-dark text-white text-center">30% de réduction - temps limité <NavLink className={({ isActive }) => (isActive ? "" : "")} to="./shop" style={{ textDecoration: 'underline', color: 'yellow' }}>boutique</NavLink></div>
            </div>

            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-danger">
                <a href="#" className="navbar-brand">Molo Molo</a>

                {/* Zone des icônes visible sur les petits écrans */}
                <div className="d-lg-none align-items-center">
                    <ul className="navbar-nav ml-auto">
                        <div className="d-flex">
                            <li className="navbar-item ml-4">
                                <NavLink to="#" className="nav-link"><i className="fas fa-search" style={{ cursor: "pointer" }}></i></NavLink>
                            </li>
                            <li className="navbar-item ml-4 d-flex">
                                <NavLink to="cart" className="nav-link mr-1"><i className="fas fa-shopping-cart" style={{ cursor: "pointer" }}></i>{getCartCount()}</NavLink>
                            </li>
                            <li className="navbar-item ml-4">
                                <NavLink to="profiles" className="nav-link"><i className="fas fa-user" style={{ cursor: "pointer" }}></i></NavLink>
                            </li>
                            <li className="navbar-item ml-4">
                                <NavLink to="/connexion" className="nav-link"><i className="fas fa-sign-in-alt" style={{ cursor: "pointer" }}></i></NavLink>
                            </li>
                            <li className="navbar-item ml-4">
                                <NavLink to="/deconnexion" className="nav-link"><i className="fas fa-sign-out-alt" style={{ cursor: "pointer" }}></i></NavLink>
                            </li>
                        </div>

                    </ul>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <NavLink to="" className="nav-link">Accueil</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="./shop" className="nav-link">Boutique</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="./epargne" className="nav-link">Epargne</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="./contact" className="nav-link">Nous contater</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Zone des icônes visible sur les grands écrans */}
                <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item ml-3">
                            <NavLink to="#" className="nav-link"><i className="fas fa-search" style={{ cursor: "pointer" }}></i></NavLink>
                        </li>
                        <li className="navbar-item ml-3 d-flex">
                            <NavLink to="cart" className="nav-link mr-1"><i className="fas fa-shopping-cart" style={{ cursor: "pointer" }}></i>{getCartCount()}</NavLink>
                        </li>
                        <li className="navbar-item ml-3">
                            <NavLink to="profiles" className="nav-link"><i className="fas fa-user" style={{ cursor: "pointer" }}></i></NavLink>
                        </li>
                        <li className="navbar-item ml-3">
                            <NavLink to="#" className="nav-link"><i className="fas fa-sign-in-alt" style={{ cursor: "pointer" }}></i></NavLink>
                        </li>
                        <li className="navbar-item ml-3">
                            <NavLink to="#" className="nav-link"><i className="fas fa-sign-out-alt" style={{ cursor: "pointer" }}></i></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <div className="mt-3">.</div>
        <div className="mt-5">
            {
                //affiche le contenu des routes enfants
            }
            <Outlet />
        </div>
    </>
}