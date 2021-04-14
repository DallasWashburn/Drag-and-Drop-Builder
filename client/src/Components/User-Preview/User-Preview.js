import React, { Component } from 'react';
import PDFGenerate from "../PDF-Generate/PDF-Generate"


class UserPreview extends Component {




    render() {
            // console.log(this.props.projects);
            let userProjects = this.props.projects
            // console.log(JSON.stringify(userProjects));

        return (
            <>
                
                    <h3 className="text-center">{this.props.url}</h3>
                    <p><strong>Company Name:</strong> {this.props.company}</p>
                    <p><strong>User Email:</strong> {this.props.email}</p>
                    <p  className="text-center"><strong>Download Project</strong></p>
                    {/* <PDFGenerate /> */}
                    {/* <pre>{JSON.stringify({userProjects}, null, 1)}</pre> */}
                    
                
            </>
        )
    }
}

export default UserPreview