import { convertirEuroEnFCFA } from "../../fonction/convertisseur_prix"

export function ShowLineCart({product, removeFromCart}){
    
    return <>
        <tr>
            <td className="d-flex">
                <div className="img-container-cart">
                    <img className="img-fluid" src={product.image} alt={product.title} />
                </div>
                <div>
                    <h4>{product.title}</h4>
                    <p className="text-danger">{product.category}</p>
                </div>
            </td>
            <td>{convertirEuroEnFCFA(product.price)} FCFA</td>
            <td>{product.quantity}</td>
            <td><strong> {convertirEuroEnFCFA((product.price)*(product.quantity))} FCFA</strong></td>
            <td><p >suprimer</p></td>
        </tr>
    </>
}