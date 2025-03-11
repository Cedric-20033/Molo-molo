import Toast from 'react-bootstrap/Toast';

export function Notification({ text, delai, showNotification, setShowNotification }) {

    return <>
        <Toast onClose={() => setShowNotification(false)} show={showNotification} delay={delai} autohide>
            <Toast.Header className="d-flex justify-content-between">

                <strong className="me-auto text-danger font-weight-bold">Molo Molo</strong>
                <small className="font-italic font-weight-bold">maintenant</small>
            </Toast.Header>
            <Toast.Body className="text-success">{text}</Toast.Body>
        </Toast>
    </>
}