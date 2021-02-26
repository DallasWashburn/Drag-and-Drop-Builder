import React, { Component } from "react";
import API from "./utils/API";
import ProfilfeNav from "./Components/Profile-Nav/Profile-Nav"
import { Link } from "react-router-dom"
import ProjectPreview from "./Components/Project-Preview/Project-Preview"


class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Page1Title: [""],
            Page1: [""],
            Page2Title: [""],
            Page2: [""],
            Page3Title: [""],
            Page3: [""],
            Page4Title: [""],
            Page4: [""],
            Page5Title: [""],
            Page5: [""],
            Page6Title: [""],
            Page6: [""],
            Page7Title: [""],
            Page7: [""]



        }
    }


    componentDidMount() {
        this.getId()
    }

    getId = () => {
        API.getUsers()
            .then(users => {
                var theUsers = users.data
                console.log(theUsers);
                var userProjects = []
                for (let i = 0; i < theUsers.length; i++) {
                    const element = theUsers[i];
                    console.log(element);
                    if (element.userEmail === this.props.user.email) {
                        console.log(element.projects);
                        var Page1Title = element.projects[0];
                        var Page1 = element.projects[1];
                        var Page2Title = element.projects[2];
                        var Page2 = element.projects[3];
                        var Page3Title = element.projects[4];
                        var Page3 = element.projects[5];
                        var Page4Title = element.projects[6];
                        var Page4 = element.projects[7];
                        var Page5Title = element.projects[8];
                        var Page5 = element.projects[9];
                        var Page6Title = element.projects[10];
                        var Page6 = element.projects[11];
                        var Page7Title = element.projects[12];
                        var Page7 = element.projects[13];

                        // console.log(Page2Title[0].data);
                        if(Page2Title[0].data === "+"){
                            Page2Title=[""]
                        }
                        if(Page3Title[0].data === "+"){
                            Page3Title=[""]
                        }
                        if(Page4Title[0].data === "+"){
                            Page4Title=[""]
                        }
                        if(Page5Title[0].data === "+"){
                            Page5Title=[""]
                        }
                        if(Page6Title[0].data === "+"){
                            Page6Title=[""]
                        }
                        if(Page7Title[0].data === "+"){
                            Page7Title=[""]
                        }
                        this.setState({
                            Page1Title: Page1Title,
                            Page1: Page1,
                            Page2Title: Page2Title,
                            Page2: Page2,
                            Page3Title: Page3Title,
                            Page3: Page3,
                            Page4Title: Page4Title,
                            Page4: Page4,
                            Page5Title: Page5Title,
                            Page5: Page5,
                            Page6Title: Page6Title,
                            Page6: Page6,
                            Page7Title: Page7Title,
                            Page7: Page7
                        })
                    }
                }

            })
    }

    getRandomNumber = () => {
        var number_one = Math.floor(Math.random() * 1000);
        return number_one
    }

    render() {
        var randomNumber = this.getRandomNumber()

        return (
            <>
                <ProfilfeNav email={this.props.user.email} />
                <div className="container">
                    <h1 className="text-center">See your project pages below</h1>
                    <hr />
                    <div className="row">
                        <div className="col-6 projectCard" id="page1">
                            <h3>{this.state.Page1Title[0].data}</h3>
                            {this.state.Page1.map(project => {
                                return (

                                    <div key={project.id}><ProjectPreview
                                        divId={project.data}
                                    />
                                    </div>

                                )
                            })}
                        </div>
                        <div className="col-6 projectCard" id="page2">
                        <h3>{this.state.Page2Title[0].data}</h3>
                            {this.state.Page2.map(project => {
                                return (

                                    <div key={project.id}><ProjectPreview
                                        divId={project.data}
                                    />
                                    </div>

                                )
                            })}
                        </div>
                        <div className="col-6 projectCard" id="page3">
                        <h3>{this.state.Page3Title[0].data}</h3>
                            {this.state.Page3.map(project => {
                                return (

                                    <div key={project.id}><ProjectPreview
                                        divId={project.data}
                                    />
                                    </div>

                                )
                            })}
                        </div>
                        <div className="col-6 projectCard" id="page4">
                        <h3>{this.state.Page4Title[0].data}</h3>
                            {this.state.Page4.map(project => {
                                return (

                                    <div key={project.id}><ProjectPreview
                                        divId={project.data}
                                    />
                                    </div>

                                )
                            })}
                        </div>
                        <div className="col-6 projectCard" id="page5">
                        <h3>{this.state.Page5Title[0].data}</h3>
                            {this.state.Page5.map(project => {
                                return (

                                    <div key={project.id}><ProjectPreview
                                        divId={project.data}
                                    />
                                    </div>

                                )
                            })}
                        </div>
                        <div className="col-6 projectCard" id="page6">
                        <h3>{this.state.Page6Title[0].data}</h3>
                            {this.state.Page6.map(project => {
                                return (

                                    <div key={project.id}><ProjectPreview
                                        divId={project.data}
                                    />
                                    </div>

                                )
                            })}
                        </div>
                        <div className="col-6 projectCard" id="page7">
                        <h3>{this.state.Page7Title[0].data}</h3>
                            {this.state.Page7.map(project => {
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
