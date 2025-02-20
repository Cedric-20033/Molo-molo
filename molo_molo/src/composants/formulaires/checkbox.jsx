
export function Checkbox({ label, name, checked = false, valeur, onchange }) {

    return <>
        <input
            id={valeur}
            type="checkbox"
            name={name}
            value={valeur}
            onChange={(e) => onchange(e.currentTarget.checked)}
            checked={checked}
        />
        <label htmlFor={valeur}>{label}</label>
    </>
}