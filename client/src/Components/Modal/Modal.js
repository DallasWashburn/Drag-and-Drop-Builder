import React from "react"
import "./Modal.css"

function Modal(props) {
    
    

    return (
        <div id="modal-bk">
            <div id="modal-wrap">
                <div id="modalExit" onClick={props.modalClose}>X</div>
                <div className="modal-container">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal