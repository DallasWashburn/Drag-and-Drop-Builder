import React, { Component } from 'react';
import "./Project-Preview.css"


class ProjectPreview extends Component {
    constructor(props) {
        super(props);


    }



    render() {
        return (
            <>
                <div className="projectPreview">
                    <h5 class="card-title">{this.props.divId}</h5>
                </div>

            </>
        )
    }
}

export default ProjectPreview