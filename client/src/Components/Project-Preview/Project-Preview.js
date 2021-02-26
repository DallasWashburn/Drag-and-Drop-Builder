import React, { Component } from 'react';
import "./Project-Preview.css"


class ProjectPreview extends Component {




    render() {
        return (
            <>
                <div className="projectPreviewWrap">
                    <div id={this.props.divId} className="projectPreview">
                        <h5 className="card-title">{this.props.divId}</h5>
                    </div>
                    {/* <div>
                        <span>{this.props.divId}</span>
                    </div> */}
                </div>

            </>
        )
    }
}

export default ProjectPreview