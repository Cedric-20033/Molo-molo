import { ProductShop } from "./productShop"

export function ShowProducts({products, addToCart}){

    return <>

        <div className="row justify-content-center">
            {products.map((product) => (<ProductShop clas="card_shop" addToCart={addToCart} produit={product} key={product.title}/>))}
        
        </div>
    </>
}