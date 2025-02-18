/**
 * recoir le message d'erreur et conçois l'affichage
 * @param {sting} param0 
 * @returns 
 */
export function ErreurFetchProduits({error}) {

    return <>
        <div className="container mt-5">
            <div className="alert alert-danger text-center" role="alert">
                {error + ', '} <a href="" style={{ textDecoration: 'none' }}>cliquez ici pour rafraîchir la page</a>
            </div>
        </div>

    </>
}