import { Checkbox } from "../formulaires/checkbox";
import { useState } from "react"

export function GetCategorie({ cat, selectedCategories, setSelectedCategories }) {

    //gérer le changement de case à cocher
    const handleCheckboxChange = (isChecked) => {
        setSelectedCategories((v) => ({
            ...v,
            [cat]: isChecked
        }))
    }

    console.log(cat)
    console.log(selectedCategories[cat])

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