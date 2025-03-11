import { ProductShop } from "./productShop"

export function ShowProducts({products, addToCart, setShowNotification}){

    /**
     * cette fonction ajoute dans la panier un produit avec uniquement les informartions dont on aura besoin
     * @param {produit} ite 
     */
    const addcart = (ite) => {

        const prod = {
            id: ite.id,
            title: ite.title,
            quantity: 1,
            image: ite.images[0],
            price: ite.price,
            category: ite.category
        }
        addToCart(prod)
    }

    return <>

        <div className="row justify-content-center">
            {products.map((product) => (<ProductShop clas="card_shop" addToCart={addcart} setShowNotification={setShowNotification} produit={product} key={product.title}/>))}
        
        </div>
    </>
}