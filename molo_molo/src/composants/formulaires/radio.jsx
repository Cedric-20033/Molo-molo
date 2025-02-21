export function Radio({ name, value, onchange, label, selectedPrice = null, setSelectedPrice = ()=> null }) {

    let checked = false
    console.log(selectedPrice)

    if(typeof(value) === 'object' && selectedPrice !== null){
        if(value.min === selectedPrice.min && value.max === selectedPrice.max){
            checked = true
        }
    }

    const changeValue=((e) =>{
        
        setSelectedPrice({min: value.min, max: value.max})
        checked = true
    })
    

    return <>
        <div className="form-check">
            <input
                className="form-check-input"
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={(e) => changeValue(e) }
                id={(typeof(value) === 'object' ? value.min+value.max : value)} />

            <label
                className="form-check-label"
                htmlFor={(typeof(value) === 'object' ? value.min+value.max : value)}>
                {label}
            </label>
        </div>
    </>
}