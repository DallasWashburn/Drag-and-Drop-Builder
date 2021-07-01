import React from "react"


function XButton(props) {



    return (
        <div className="XContainer">
                <button className="xButton" onClick={props.removeElement}>
            <span className="btn-text">Delete</span></button>
        </div>
    )
}

export default XButton