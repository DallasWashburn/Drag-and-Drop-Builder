import React from "react"

function DuplicateButton(props) {



    return (
        <div className="duplicateContainer">
            <button className="duplicate" onClick={props.duplicateElement}>
            <span className="btn-text">Duplicate</span>
            </button>
        </div>
    )
}

export default DuplicateButton