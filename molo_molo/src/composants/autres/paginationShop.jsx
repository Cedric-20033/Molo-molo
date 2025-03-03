export function PaginationShop({ currentPage, setCurrentPage, productsShow, productsPerPage }) {

    return <>

        <nav className="d-flex justify-content-center mt-4 ">
            <ul className="pagination">
                {/* Bouton "Précédent" */}
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Précédent</button>
                </li>

                {/* 
                
                    Génération des numéros de pages 

                    Math.ceil(productsShow.length / productsPerPage) calcule le nombre total de pages.

                    Array.from({ length: ... }) génère un tableau contenant tous les numéros de pages.
                
                */}
                {Array.from({ length: Math.ceil(productsShow.length / productsPerPage) }, (_, i) => (
                    <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                    </li>
                ))}

                {/* Bouton "Suivant" */}
                <li className={`page-item ${currentPage === Math.ceil(productsShow.length / productsPerPage) ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Suivant</button>
                </li>
            </ul>
        </nav>
    </>
}