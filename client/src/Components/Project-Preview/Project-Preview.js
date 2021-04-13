import React, { Component } from 'react';
import "./Project-Preview.css"


class ProjectPreview extends Component {




    render() {
        return (
            <>
                <div className="projectPreviewWrap">
                    <div id={this.props.divId} className="projectPreview">
                    </div>
                </div>

            </>
        )
    }
}

export default ProjectPreview