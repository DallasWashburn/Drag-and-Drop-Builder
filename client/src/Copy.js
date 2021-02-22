import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
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

class Copy extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            userId:props.user.sub,
            userEmail: props.user.email,
            companyName: "",
            URL: "",
            nickname:props.user.nickname
        }
    }

    componentDidMount(){
        this.getUsers()
    }

    getUsers = () => {
        API.getUsers()
        .then(users => {
            var theUsers = users.data
            console.log(theUsers);
            for (let i = 0; i < theUsers.length; i++) {
                const element = theUsers[i];
                console.log(element);
                // users.push(element[])
                
            }
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

    saveUser = () => {
        API.getUsers()
        .then(users => {
            var theUsers = users.data
            console.log(theUsers);
            var num = 0
            for (let i = 0; i < theUsers.length; i++) {
                const element = theUsers[i];
                console.log(element);
                if(element.userId === this.props.user.sub){
                    num = 2
                }
            }
            if(num === 2 ){
                this.setState({nickname:2})
                return
            } else {
                    let project = {
                        userId: this.state.userId,
                        userEmail: this.state.userEmail,
                        companyName: this.state.companyName,
                        url: this.state.URL,
                        projects: []
                    }
                    console.log(project)
                    // [this.state.items3][this.state.items4][this.state.items5][this.state.items6][this.state.items7][this.state.items8]
                    API.saveUser(project)
                    this.setState({ nickname: 2})
                }
        })


    }
render(){

    if(this.state.nickname === 1) {
    return <NewClientForm
        saveUser={this.saveUser}
        handleChange={this.handleChange}
    />

} else {

    return (
        <>
            <Header name={this.state.userId} email={this.state.userEmail} nickname={this.state.nickname} />
            <div id="wrapper" >
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
                    <div>
                        <FileUpload name={this.state.userId} email={this.state.userEmail} onUpload={this.onUpload} />
                    </div>
                </div>


                <div id="container2">
                    <ContainerTabs name={this.state.userId} email={this.state.userEmail} userId={this.state.userId} />

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