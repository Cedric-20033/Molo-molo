export function Modal({ content }) {

    console.log(content)

    return <>

        

        <div className="modal fade" id="ModalFiltre" tabIndex="-1" aria-labelledby="ModalFiltreLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalFiltreLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-dark">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}