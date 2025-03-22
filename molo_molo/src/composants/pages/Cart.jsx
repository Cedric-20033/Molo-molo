import { convertirEuroEnFCFA } from "../../fonction/convertisseur_prix";
import { ShowLineCart } from "../cart/showLineCart";
import { useCart } from "../context/cartContext";

export function Cart() {

    const { cart, removeFromCart, getCartCount, clearCart, getAmount } = useCart()

    return <>
        <div className="container d-flex align-item-center justify-content-center">
            <main>
                <h3 className="text-center mb-4"> Votre panier ({getCartCount()}) </h3>
                <div className="row">
                    <div className="col-12 col-lg-9">
                        <div className="table-responsive">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        {/*<th scope="col" className="d-none d-md-block">Prix</th>*/}
                                        <th scope="col">Quantité</th>
                                        <th scope="col">Total</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map(product => (
                                            <ShowLineCart key={product.id} product={product} removeFromCart={removeFromCart} />
                                        ))
                                    }
                                    <tr className="align-items-center">
                                        <td><strong>Montant Total a Payer</strong></td>
                                        <td colspan="3">
                                            <strong>
                                                {
                                                    convertirEuroEnFCFA(getAmount())
                                                } FCFA
                                            </strong>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => clearCart()}
                            >
                                vider le panier
                                <i
                                    className="far fa-trash-alt text-whrite ml-1"
                                    style={{ fontSize: "1.2rem" }}
                                ></i>
                            </button>
                        </div>

                    </div>
                    <div className="col-12 col-lg-3">
                        <h3 className="text-center">TOTAL</h3>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis placeat et optio repellendus sit quo facere quod natus eos, ea sint minus quas, nisi facilis tempore non, quaerat nostrum perspiciatis.
                    </div>
                </div>
            </main>

        </div>
    </>
}