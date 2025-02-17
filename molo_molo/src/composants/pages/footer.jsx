export function Footer() {

    return <>
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-let">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Molo Molo</h5>
                        <p>boutique ecommerce et épargne</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">liens utiles</h5>
                        <p><a href="./" className="text-white" style={{textDecoration: "none"}}>Accueil</a></p>
                        <p><a href="/shop" className="text-white" style={{textDecoration: "none"}}>Boutique</a></p>
                        <p><a href="./epargne" className="text-white" style={{textDecoration: "none"}}>Epargne</a></p>
                        <p><a href="./contact" className="text-white" style={{textDecoration: "none"}}>Contacts</a></p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Rejoignez notre newsletter</h5>
                        <p>connectez-vous pour bénéficier de plus de produits</p>
                        <form action="">
                            <div className="form-group mb-3">
                                <input type="email" name="email" id="" className="form-control" placeholder="Email" />
                            </div>
                            <button type="submit" className="btn btn-warning">se connecter</button>
                        </form>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">suivez-nous</h5>
                        <div className="d-flex justify-content-center">
                            <a href="#" className="text-white mr-4">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-white mr-4">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white mr-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-white mr-4">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="mb-4" style={{backgroundColor: "white"}} />
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p className="text-center text-md-left">2025 Molo Molo. tous droits reservés.
                                <a href="#" style={{textDecoration: "none"}}>
                                    <strong className="text-warning">politique de confidentialité</strong>
                                </a> |
                                <a href="#" style={{textDecoration: "none"}}>
                                    <strong className="text-warning">politique d'utilisation</strong>
                                </a>
                            </p>
                        </div>
                    </div>

            </div>
        </footer>
    </>
}