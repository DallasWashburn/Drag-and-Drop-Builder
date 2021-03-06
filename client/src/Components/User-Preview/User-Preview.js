import React, { Component } from 'react';

import Tooltip from "../Tooltip/Tooltip"

class UserPreview extends Component {




    render() {
        // console.log(this.props.projects);

        // console.log(JSON.stringify(userProjects));

        return (
            <>
                <div className="profile-btn-wrap">
                    <Tooltip content="Click to erase client" direction="top">
                        <button className="btn profile-delete">X</button>
                    </Tooltip>
                </div>
                <h3  className="text-uppercase text-center py-2">{this.props.url}</h3>
                <p><strong>Company Name:</strong> {this.props.company}</p>
                <p><strong>User Email:</strong> {this.props.email}</p>
                <p className="text-center"><strong>Download Project</strong></p>
            </>
        )
    }
}

export default UserPreview