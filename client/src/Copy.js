import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withRouter } from "react-router";
import ContainerTabs from "./Components/Tabs/Tabs"
import FileUpload from "./Components/File-Upload/File-Upload"
import ContactContainer from "./Components/Contact/Contact-Container/Contact-Container"
import ContentContainer from "./Components/Content/Content-Container/Content-Container"
import Features from "./Components/Featues/Features-Container/Features-Container"
import Gallery from "./Components/Gallery/Gallery-Container/Gallery-Container"
import Pricing from "./Components/Pricing/Pricing-Container/Pricing-Container"
import Headers from "./Components/Headers/Header-Container/Header-Container"
import Testimonials from "./Components/Testimonials/Testimonials-Container/Testimonials-Container"
import Footers from "./Components/Footers/Footer-Container/Footer-Container"
import Team from "./Components/Team/Team-Container/Team-Container"
import Intros from "./Components/Intros/Intros-Container/Intros-Container"
import Header from "./Components/Header/Header"
import NewClientForm from "./Components/New-Client-Form/New-Client-Form"
import LoginButton from "./Components/LoginButton/LoginButton";
import API from "./utils/API"
import EditMenu from "./Components/Edit-Menu/Edit-Menu";
import EditButton from "./Components/Edit-Button/Edit-Button"

class Copy extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: props.user.sub,
            userEmail: props.user.email,
            companyName: "",
            URL: "",
            nickname: props.user.nickname,
            login: 1,
            dbId: "",
            dataContent: ""
        }
    }

    componentDidMount() {
        this.getId()
        this.getUsers()

    }

    getUsers = () => {

        API.getUsers()
            .then(users => {
                var theUsers = users.data
                console.log(theUsers);
            })
        // console.log(allUsers);

    }

    onUpload = (event) => {
        this.setState({ images: EventTarget })
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    getId = () => {
        API.getUsers()
            .then(users => {
                var theUsers = users.data
                // console.log(theUsers);
                for (let i = 0; i < theUsers.length; i++) {
                    const element = theUsers[i];
                    console.log(element);
                    if (element.userId === this.props.user.sub) {
                        console.log(element._id);
                        this.setState({
                            dbId: element._id,
                            login: 2
                        })

                    }
                }
            })
    }



    saveUser = () => {

        var nameOfPage1 = { id: "pageName1", data: "Home Page" }
        var nameOfPage2 = { id: "pageName2", data: "+" }
        var nameOfPage3 = { id: "pageName3", data: "+" }
        var nameOfPage4 = { id: "pageName4", data: "+" }
        var nameOfPage5 = { id: "pageName5", data: "+" }
        var nameOfPage6 = { id: "pageName6", data: "+" }
        var nameOfPage7 = { id: "pageName7", data: "+" }



        var allPages = [nameOfPage1, [], nameOfPage2, [], nameOfPage3, [], nameOfPage4, [], nameOfPage5, [], nameOfPage6, [], nameOfPage7, []]


        API.getUsers()
            .then(users => {
                var theUsers = users.data
                console.log(theUsers);
                var num = 0
                for (let i = 0; i < theUsers.length; i++) {
                    const element = theUsers[i];
                    console.log(element);
                    if (element.userId === this.props.user.sub) {
                        num = 2
                    }
                }
                if (num === 2) {
                    this.setState({ nickname: 2 })
                    return
                } else {
                    let project = {
                        userId: this.state.userId,
                        userEmail: this.state.userEmail,
                        companyName: this.state.companyName,
                        url: this.state.URL,
                        projects: allPages
                    }
                    console.log(project)
                    // [this.state.items3][this.state.items4][this.state.items5][this.state.items6][this.state.items7][this.state.items8]
                    API.saveUser(project)
                    this.setState({ nickname: 2 })
                }
            })


    }

    getElements = (event) => {
        // event.preventDefault();
    }

    openEdit = (event) => {
        console.log(event.target.parentElement.getAttribute("data-content"));
        var content = event.target.parentElement.getAttribute("data-content")
        document.getElementById("mySidebar").style.width = "249px";
        this.setState({dataContent:content})
    }

    closeEdit = () => {
    document.getElementById("mySidebar").style.width = "0";
    }
    render() {
        
        if (this.state.nickname === 1 && this.state.login === 1) {
            return <NewClientForm
                saveUser={this.saveUser}
                handleChange={this.handleChange}
            />

        } else {

            return (
                <>
                    <Header name={this.state.userId} email={this.state.userEmail} nickname={this.state.nickname} />
                    <div id="wrapper" >
                        <span className="menuArrow"><i className="fas fa-lg fa-angle-left"></i></span>
                        <div className="container1 fixed">
                            <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png" height="45" alt="cybermark logo" />
                            <br></br>
                            <h5 className="content-blocks">Content Blocks</h5>
                            <Headers />
                            <Intros />
                            <ContentContainer />
                            <Gallery />
                            <Features />
                            <Team />
                            <Pricing />
                            <Testimonials />
                            <ContactContainer />
                            <Footers />
                            {/* <div>
                                <EditButton openEdit={this.openEdit}/>
                            </div> */}
                            <div>
                                <FileUpload name={this.state.userId} email={this.state.userEmail} onUpload={this.onUpload} />
                            </div>
                            <div>
                                <EditMenu dataContent={this.state.dataContent} closeEdit={this.closeEdit} />
                            </div>
                        </div>


                        <div id="container2">
                            <ContainerTabs openEdit={this.openEdit} name={this.state.userId} email={this.state.userEmail} userId={this.state.userId} dbId={this.state.dbId} getId={this.getId} />

                        </div>


                    </div>
                </>
            );
        }
    }
}



export default Copy;



    // handleAddPage() {
    //     var navLink = document.createElement("LI");
    //     var homePage = document.getElementById("homePage");
    //     var pageTitle = prompt("What would you like to name this page?", "Services Page");
    //     navLink.classList.add("nav-item");
    //     navLink.innerHTML = '<button onClick={this.handleClassSwitch} id="tab-tab2" role="tab" aria-selected="true" aria-controls="tabpanel-tab2" class="tab-link" style="">' + pageTitle + '</button>';
    //     navLink.classList.add("new-link")
    //     // navLink.style.padding="8px 0px 0px 10px";
    //     var count = homePage.childNodes.length;
    //     homePage.insertBefore(navLink, homePage.childNodes[count - 1])
    //     console.log(count);
    // }