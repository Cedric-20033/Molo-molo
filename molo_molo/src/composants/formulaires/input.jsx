import { useCart } from "../context/cartContext"

export function Input({value, id}) {

    const { updateQuantity } = useCart()
    
    return <>
        <input
            className="form-control"
            type="number"
            value={value}
            onChange={(e) => {
                let v = e.target.value
                if(v<1){
                    v = 1
                }
                updateQuantity(id, parseInt(v))
            }}
        />
    </>
}