import { Checkbox } from "../formulaires/checkbox";
import { useState } from "react"

export function GetCategorie({ cat, selectedCategories, setSelectedCategories }) {

    //gérer le changement de case à cocher
    const handleCheckboxChange = (isChecked) => {
        setSelectedCategories((v) => ({
            ...v,
            //avec object.entries on prends le tableau v.categorie contenant les categories de selectedCategories, et renvoi un tableau key valeur, puis avec map on parcour le tableau et modifie l'élément concerné, ensuite avec object.fromEntries, on recrée un nouvel oject sur la base du tableau précédemment créé
            categorie: Object.fromEntries( Object.entries(v.categorie).map(([key, valeur]) => (
                key === cat ? [key, valeur = isChecked] : [key, valeur]
            )))
        }))

    }

    return <>
        <li>
            <Checkbox
                label={cat}
                name={'category'}
                checked={!!selectedCategories.categorie[cat]}
                valeur={cat}
                onchange={handleCheckboxChange}
            /> </li>
    </>
}