import React, { Component } from "react";
import API from "./utils/API";
import ProfilfeNav from "./Components/Profile-Nav/Profile-Nav"
// import { Link } from "react-router-dom"
import ProjectPreview from "./Components/Project-Preview/Project-Preview"
import ProfilePreview from "./Components/Profile-Preview/Profile-Preview"



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
            Page7: [""],
            Page8Title: [""],
            Page8: [""],
            Page9Title: [""],
            Page9: [""],
            Page10Title: [""],
            Page10: [""],
            Page11Title: [""],
            Page11: [""],
            Page12Title: [""],
            Page12: [""],
            Page13Title: [""],
            Page13: [""],
            Page14Title: [""],
            Page14: [""],
            Page15Title: [""],
            Page15: [""],
            Page16Title: [""],
            Page16: [""],
            Page17Title: [""],
            Page17: [""],
            Page18Title: [""],
            Page18: [""],
            Page19Title: [""],
            Page19: [""],
            Page20Title: [""],
            Page20: [""],
            email: this.props.user.email,
            AllUsers: [""],
            allProjects: [""],
            checked: false

        }
    }


    componentDidMount() {
        this.getId()
    }

    finalizeDesign = (id) => {
        // event.preventDefault()
        API.updateUserDesignStatus(id, true)
        console.log(id);

    }


    getId = () => {
        API.getUsers()
            .then(users => {
                var theUsers = users.data
                if (this.state.email === 'admin@cybermark.com') {
                    this.setState({
                        AllUsers: theUsers
                    })
                    let users = this.state.AllUsers
                    for (let i = 0; i < users.length; i++) {
                        let userProjects = []
                        const element = users[i];
                        let allProjects = element.projects
                        this.setState({
                            allProjects: allProjects
                        })
                    }
                    return
                }
                for (let i = 0; i < theUsers.length; i++) {
                    const element = theUsers[i];
                    if (element.userEmail === this.props.user.email) {
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
                        var Page8Title = element.projects[14]
                        var Page8 = element.projects[15];
                        var Page9Title = element.projects[16]
                        var Page9 = element.projects[17];
                        var Page10Title = element.projects[18]
                        var Page10 = element.projects[19];
                        var Page11Title = element.projects[20]
                        var Page11 = element.projects[21];
                        var Page12Title = element.projects[22]
                        var Page12 = element.projects[23];
                        var Page13Title = element.projects[24]
                        var Page13 = element.projects[25];
                        var Page14Title = element.projects[26]
                        var Page14 = element.projects[27];
                        var Page15Title = element.projects[28]
                        var Page15 = element.projects[29];
                        var Page16Title = element.projects[30]
                        var Page16 = element.projects[31];
                        var Page17Title = element.projects[32]
                        var Page17 = element.projects[33];
                        var Page18Title = element.projects[34]
                        var Page18 = element.projects[35];
                        var Page19Title = element.projects[36]
                        var Page19 = element.projects[37];
                        var Page20Title = element.projects[38]
                        var Page20 = element.projects[39];
                        if (Page2Title[0].data === "+") {
                            Page2Title = [""]
                        }
                        if (Page3Title[0].data === "+") {
                            Page3Title = [""]
                        }
                        if (Page4Title[0].data === "+") {
                            Page4Title = [""]
                        }
                        if (Page5Title[0].data === "+") {
                            Page5Title = [""]
                        }
                        if (Page6Title[0].data === "+") {
                            Page6Title = [""]
                        }
                        if (Page7Title[0].data === "+") {
                            Page7Title = [""]
                        }
                        if (Page8Title[0].data === "+") {
                            Page8Title = [""]
                        }
                        if (Page9Title[0].data === "+") {
                            Page9Title = [""]
                        }
                        if (Page10Title[0].data === "+") {
                            Page10Title = [""]
                        }
                        if (Page11Title[0].data === "+") {
                            Page11Title = [""]
                        }
                        if (Page12Title[0].data === "+") {
                            Page12Title = [""]
                        }
                        if (Page13Title[0].data === "+") {
                            Page13Title = [""]
                        }
                        if (Page14Title[0].data === "+") {
                            Page14Title = [""]
                        }
                        if (Page15Title[0].data === "+") {
                            Page15Title = [""]
                        }
                        if (Page16Title[0].data === "+") {
                            Page16Title = [""]
                        }
                        if (Page17Title[0].data === "+") {
                            Page17Title = [""]
                        }
                        if (Page18Title[0].data === "+") {
                            Page18Title = [""]
                        }
                        if (Page19Title[0].data === "+") {
                            Page19Title = [""]
                        }
                        if (Page20Title[0].data === "+") {
                            Page20Title = [""]
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
                            Page7: Page7,
                            Page8Title: Page8Title,
                            Page8: Page8,
                            Page9Title: Page9Title,
                            Page9: Page9,
                            Page10Title: Page10Title,
                            Page10: Page10,
                            Page11Title: Page11Title,
                            Page11: Page11,
                            Page12Title: Page12Title,
                            Page12: Page12,
                            Page13Title: Page13Title,
                            Page13: Page13,
                            Page14Title: Page14Title,
                            Page14: Page14,
                            Page15Title: Page15Title,
                            Page15: Page15,
                            Page16Title: Page16Title,
                            Page16: Page16,
                            Page17Title: Page17Title,
                            Page17: Page17,
                            Page18Title: Page18Title,
                            Page18: Page18,
                            Page19Title: Page19Title,
                            Page19: Page19,
                            Page20Title: Page20Title,
                            Page20: Page20,
                        })
                    }

                }

            })
    }



    render() {
        // var randomNumber = this.getRandomNumber()
        const email = this.state.email;
        if (email === "admin@cybermark.com") {
            const pageTitles = ["Home Page"]
            return (
                <>
                    <ProfilfeNav email={this.props.user.email} />
                    <div className="container admin">
                        <h1 className="text-center">See your clients below</h1>
                        <hr />
                        <div className="row">
                            {this.state.AllUsers.map(user => {
                                if (!user.projects) {
                                    return <span>Loading ...</span>
                                }
                                if (user.projects[2][0].data != "+") {
                                    pageTitles.push(user.projects[2][0].data)
                                }
                                if (user.projects[4][0].data != "+") {
                                    pageTitles.push(user.projects[4][0].data)
                                }
                                if (user.projects[6][0].data != "+") {
                                    pageTitles.push(user.projects[6][0].data)
                                }
                                if (user.projects[8][0].data != "+") {
                                    pageTitles.push(user.projects[8][0].data)
                                }
                                if (user.projects[10][0].data != "+") {
                                    pageTitles.push(user.projects[10][0].data)
                                }
                                if (user.projects[12][0].data != "+") {
                                    pageTitles.push(user.projects[12][0].data)
                                }
                                if (user.projects[14][0].data != "+") {
                                    pageTitles.push(user.projects[14][0].data)
                                }
                                if (user.projects[16][0].data != "+") {
                                    pageTitles.push(user.projects[16][0].data)
                                }
                                if (user.projects[18][0].data != "+") {
                                    pageTitles.push(user.projects[18][0].data)
                                }
                                if (user.projects[20][0].data != "+") {
                                    pageTitles.push(user.projects[20][0].data)
                                }
                                if (user.projects[22][0].data != "+") {
                                    pageTitles.push(user.projects[22][0].data)
                                }
                                if (user.projects[24][0].data != "+") {
                                    pageTitles.push(user.projects[24][0].data)
                                }
                                if (user.projects[26][0].data != "+") {
                                    pageTitles.push(user.projects[26][0].data)
                                }
                                if (user.projects[28][0].data != "+") {
                                    pageTitles.push(user.projects[28][0].data)
                                }
                                if (user.projects[30][0].data != "+") {
                                    pageTitles.push(user.projects[30][0].data)
                                }
                                if (user.projects[32][0].data != "+") {
                                    pageTitles.push(user.projects[32][0].data)
                                }
                                if (user.projects[34][0].data != "+") {
                                    pageTitles.push(user.projects[34][0].data)
                                }
                                if (user.projects[36][0].data != "+") {
                                    pageTitles.push(user.projects[36][0].data)
                                }
                                if (user.projects[38][0].data != "+") {
                                    pageTitles.push(user.projects[38][0].data)
                                }
                                return (
                                    <ProfilePreview
                                        projects={user.projects}
                                        company={user.companyName}
                                        email={user.userEmail}
                                        url={user.url}
                                        dataFromContainer1={user.projects[1]}
                                        dataFromContainer2={user.projects[3]}
                                        dataFromContainer3={user.projects[5]}
                                        dataFromContainer4={user.projects[7]}
                                        dataFromContainer5={user.projects[9]}
                                        dataFromContainer6={user.projects[11]}
                                        dataFromContainer7={user.projects[13]}
                                        dataFromContainer8={user.projects[15]}
                                        dataFromContainer9={user.projects[17]}
                                        dataFromContainer10={user.projects[19]}
                                        dataFromContainer11={user.projects[21]}
                                        dataFromContainer12={user.projects[23]}
                                        dataFromContainer13={user.projects[25]}
                                        dataFromContainer14={user.projects[27]}
                                        dataFromContainer15={user.projects[29]}
                                        dataFromContainer16={user.projects[31]}
                                        dataFromContainer17={user.projects[33]}
                                        dataFromContainer18={user.projects[35]}
                                        dataFromContainer19={user.projects[37]}
                                        dataFromContainer20={user.projects[39]}
                                        pageTitles={pageTitles}
                                        toggleId={user._id}
                                        designFinalized={user.designFinalized}
                                        finalized={user.finalized}

                                    />
                                )
                            })}
                        </div>
                    </div>
                </>
            )
        } else {

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
                            <div className="col-6 projectCard" id="page8">
                                <h3>{this.state.Page8Title[0].data}</h3>
                                {this.state.Page8.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page9">
                                <h3>{this.state.Page9Title[0].data}</h3>
                                {this.state.Page9.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page10">
                                <h3>{this.state.Page10Title[0].data}</h3>
                                {this.state.Page10.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page11">
                                <h3>{this.state.Page11Title[0].data}</h3>
                                {this.state.Page11.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page12">
                                <h3>{this.state.Page12Title[0].data}</h3>
                                {this.state.Page12.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page13">
                                <h3>{this.state.Page13Title[0].data}</h3>
                                {this.state.Page13.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page14">
                                <h3>{this.state.Page14Title[0].data}</h3>
                                {this.state.Page14.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page15">
                                <h3>{this.state.Page15Title[0].data}</h3>
                                {this.state.Page15.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page16">
                                <h3>{this.state.Page16Title[0].data}</h3>
                                {this.state.Page16.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page17">
                                <h3>{this.state.Page17Title[0].data}</h3>
                                {this.state.Page17.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page18">
                                <h3>{this.state.Page18Title[0].data}</h3>
                                {this.state.Page18.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page19">
                                <h3>{this.state.Page19Title[0].data}</h3>
                                {this.state.Page19.map(project => {
                                    return (

                                        <div key={project.id}><ProjectPreview
                                            divId={project.data}
                                        />
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="col-6 projectCard" id="page20">
                                <h3>{this.state.Page20Title[0].data}</h3>
                                {this.state.Page20.map(project => {
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
}



export default Profile;
