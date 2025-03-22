import { convertirEuroEnFCFA } from "../../fonction/convertisseur_prix"
import { useCart } from "../context/cartContext";

export function ShowLineCart({ product, removeFromCart }) {
    const { updateQuantity } = useCart()

    return (
        <tr className="align-items-center">
            {/* Image et détails */}
            <td>
                <div className="d-flex flex-column flex-md-row align-items-center">
                    <div className="img-container-cart me-md-3 mr-3">
                        <img className="img-cover img-fluid" src={product.image} alt={product.title}
                            style={{ maxWidth: "70px", height: "auto" }} />
                    </div>
                    <div className="text-md-start">
                        <h6 className="mb-1">{product.title}</h6>
                        <p className="text-danger small">{product.category}</p>
                    </div>
                </div>
            </td>

            {/* Prix }
            <td className="align-middle d-none d-md-block">{convertirEuroEnFCFA(product.price)} FCFA</td> {*/}

            {/* Quantité */}
            <td className="align-middle">
                <p className="d-flex justify-content-center">
                    <button
                        type="button"
                        className="btn btn-outline-secondary mr-2"
                        onClick={() => updateQuantity(product.id, parseInt(product.quantity)-1)}
                    ><strong>-</strong></button>
                    {product.quantity}
                    <button
                        type="button"
                        className="btn btn-outline-secondary ml-2"
                        onClick={() => updateQuantity(product.id, parseInt(product.quantity)+1)}
                    ><strong>+</strong></button>
                </p>

            </td>

            {/* Total */}
            <td className="align-middle">
                <strong>{convertirEuroEnFCFA(product.price * product.quantity)} FCFA</strong>
            </td>

            {/* Supprimer */}
            <td className="align-middle">
                <i
                    className="far fa-trash-alt text-danger"
                    style={{ cursor: "pointer", fontSize: "1.2rem" }}
                    onClick={() => removeFromCart(product.id)}
                ></i>
            </td>
        </tr>
    );
}
