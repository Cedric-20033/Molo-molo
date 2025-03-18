import { ShowLineCart } from "../cart/showLineCart";
import { useCart } from "../context/cartContext";

export function Cart(){

    const {cart, removeFromCart, updateQuantity, getCartCount, clearCart} = useCart()

    return <>
         <div className="container d-flex align-item-center justify-content-center">
            <main> 
                <h3 className="text-center mb-4"> Votre panier ({getCartCount()})</h3>
                <div className="row">
                    <div className="col-12 col-lg-9">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Prix</th>
                                    <th scope="col">Quantité</th>
                                    <th scope="col">Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(product => (
                                        <ShowLineCart key={product.id} product={product} removeFromCart={removeFromCart} />
                                    ))
                                }
                            </tbody>
                        </table>
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