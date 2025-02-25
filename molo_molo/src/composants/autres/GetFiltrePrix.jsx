import { Checkbox } from "../formulaires/checkbox";

export function GetFiltrePrix({ cat, selectedPrice, setSelectedPrice }) {

    //gérer le changement de case à cocher
    const handleCheckboxChange = (isChecked) => {
        setSelectedPrice((v) => ({
            ...v,
            [cat]: isChecked
        }))
    }



    return <>
        <li>
            <Checkbox
                label={cat}
                name={'category'}
                checked={!!selectedCategories[cat]}
                valeur={cat}
                onchange={handleCheckboxChange}
            /> </li>
    </>
}