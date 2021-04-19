import React from "react"
import Tooltip from "../Tooltip/Tooltip"

function DuplicateButton(props) {



    return (
        <div className="duplicateContainer">
            <button className="duplicate" onClick={props.duplicateElement}>
            <span class="btn-text">Duplicate</span>
            </button>
        </div>
    )
}

export default DuplicateButton