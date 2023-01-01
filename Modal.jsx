import React from 'react'
import './Modal.css'
import { useCallback, useEffect } from 'react'


const Modal = (props) => {

    const { onClose } = props
    const closeOnEscapeKeyDown = useCallback((e) => {
        if ((e.charCode || e.keyCode) === 27) {
            onClose()
        }
    }, [onClose])

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, [closeOnEscapeKeyDown]);

    if (!props.show) {
        return null
    }

    return (

        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>
                <div className="modal-body">{props.children}</div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button">
                        Close
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Modal