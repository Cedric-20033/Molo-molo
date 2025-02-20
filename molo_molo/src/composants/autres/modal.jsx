import { forwardRef } from "react";
import { GetCategorie } from "../autres/getCategorie";

export const Modal = forwardRef(({ setShowModal, selectedCategories, setSelectedCategories }, ref) => {
    const categories = Object.keys(selectedCategories);

    return (
        <div ref={ref} className="modal fade" id="ModalFiltre" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ModalFiltreLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Filtres</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setShowModal(false)}
                        >X</button>
                    </div>
                    <div className="modal-body">
                        <h6>CATEGORIES</h6>
                        <ul className="list-unstyled">
                            {categories.map((cat) => (
                                <GetCategorie
                                    key={cat}
                                    cat={cat}
                                    selectedCategories={selectedCategories}
                                    setSelectedCategories={setSelectedCategories}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={() => setShowModal(false)}
                        >Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    );
});
