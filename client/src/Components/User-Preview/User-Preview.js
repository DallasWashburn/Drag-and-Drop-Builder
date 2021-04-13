import React, { Component } from 'react';



class UserPreview extends Component {




    render() {
        // console.log(this.props.user.projects[1]);
        // var home = this.props.user.projects[0][0].data
        // // var page1 = this.props.user.projects[1]

        return (
            <>
                <div className="col-6 user-preview">
                    <h3 className="text-center">{this.props.user.userEmail}</h3>
                    {/* Title: {home} */}
                </div>
            </>
        )
    }
}

export default UserPreview