import { ProductShop } from "./productShop"

export function ShowProducts({products}){

    return <>

        <div className="row justify-content-center">
            {products.map((product) => (<ProductShop clas="card_shop" produit={product} key={product.title}/>))}
            
        </div>
    </>
}