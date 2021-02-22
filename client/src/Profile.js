import React, { Component } from "react";
import API from "./utils/API";
import ProfilfeNav from "./Components/Profile-Nav/Profile-Nav"
import { Link } from "react-router-dom"
import ProjectPreview from "./Components/Project-Preview/Project-Preview"


class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [""]

        }
    }


    componentDidMount() {
        this.getId()
    }

    getId = () => {
        API.getUsers()
            .then(users => {
                var theUsers = users.data
                // console.log(theUsers);
                var userProjects = []
                for (let i = 0; i < theUsers.length; i++) {
                    const element = theUsers[i];
                    // console.log(element);
                    if (element.userEmail === this.props.user.email) {
                        // console.log(element.projects);
                        var eachDiv = element.projects;
                        eachDiv.map((user) => {
                            console.log(user);
                            userProjects.push(user)
                            this.setState({ projects: user })
                        })
                    }
                }

                console.log(this.state.projects);
            })
    }



    render() {

            return (
                <>
                    <ProfilfeNav email={this.props.user.email}/>
                    <div className="container">
                        <h1 className="text-center">See your project below</h1>
                        <hr />
                        <div className="row">
                            <div className="col-4">
                        {this.state.projects.map(project => {
                            return (
                            
                            <div key={project.id}><ProjectPreview
                                divId={project.data}
                            />
                            </div>
                            
                            )
                        })}
                        </div>
                        </div>
                    </div>
                </>
            );

        
    }
}



export default Profile;
