import React from "react";
import ContainerTabs from "./Components/Tabs/Tabs"
import ContactContainer from "./Components/Contact/Contact-Container/Contact-Container"
import ContentContainer from "./Components/Content/Content-Container/Content-Container"
import Features from "./Components/Featues/Features-Container/Features-Container"
import Gallery from "./Components/Gallery/Gallery-Container/Gallery-Container"
import Headers from "./Components/Headers/Header-Container/Header-Container"
import Testimonials from "./Components/Testimonials/Testimonials-Container/Testimonials-Container"
import Footers from "./Components/Footers/Footer-Container/Footer-Container"
import Team from "./Components/Team/Team-Container/Team-Container"
import Intros from "./Components/Intros/Intros-Container/Intros-Container"
import Header from "./Components/Header/Header"
import NewClientForm from "./Components/New-Client-Form/New-Client-Form"
import API from "./utils/API"
import AdminDropDown from "./Components/Admin-Drop-Down/Admin-Drop-Down";
import AuthForProjects from "./Components/AuthForProjects/AuthForProjects";
// import Modal from "./Components/Modal/Modal";
// import AdminEdit from "./Components/Admin-Edit/Admin-Edit";


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
            allUsers: []
        }
    }

    componentDidMount() {
        this.getId()
        // this.getUsers()

    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    getUsers = () => {

        API.getUsers()
            .then(users => {
                var theUsers = users.data
            })
        // console.log(allUsers);

    }

    getId = () => {
        API.getUsers()
            .then(users => {
                var theUsers = users.data
                this.setState({ allUsers: [theUsers] })
                // console.log(theUsers);
                for (let i = 0; i < theUsers.length; i++) {
                    const element = theUsers[i];
                    if (element.userId === this.props.user.sub) {
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
        var nameOfPage8 = { id: "pageName8", data: "+" }
        var nameOfPage9 = { id: "pageName9", data: "+" }
        var nameOfPage10 = { id: "pageName10", data: "+" }
        var nameOfPage11 = { id: "pageName11", data: "+" }
        var nameOfPage12 = { id: "pageName12", data: "+" }
        var nameOfPage13 = { id: "pageName13", data: "+" }
        var nameOfPage14 = { id: "pageName14", data: "+" }
        var nameOfPage15 = { id: "pageName15", data: "+" }
        var nameOfPage16 = { id: "pageName16", data: "+" }
        var nameOfPage17 = { id: "pageName17", data: "+" }
        var nameOfPage18 = { id: "pageName18", data: "+" }
        var nameOfPage19 = { id: "pageName19", data: "+" }
        var nameOfPage20 = { id: "pageName20", data: "+" }





        var allPages = [nameOfPage1, [], nameOfPage2, [], nameOfPage3, [], nameOfPage4, [], nameOfPage5, [], nameOfPage6, [], nameOfPage7, [], nameOfPage8, [], nameOfPage9, [], nameOfPage10, [], nameOfPage11, [], nameOfPage12, [], nameOfPage13, [], nameOfPage14, [], nameOfPage15, [], nameOfPage16, [], nameOfPage17, [], nameOfPage18, [], nameOfPage19, [], nameOfPage20, []]


        API.getUsers()
            .then(users => {
                var theUsers = users.data
                var num = 0
                for (let i = 0; i < theUsers.length; i++) {
                    const element = theUsers[i];
                    console.log(this.props.user.sub);
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
                    API.saveUser(project)
                    this.setState({ nickname: 2 })
                    this.getId()
                }
            })

    }

    handleSubmit = (evt) => {
        evt.preventDefault();
    }

    handleSelect = (event) => {
        console.log(event.target);
        var selectedValue = event.target.value
        var selectedData = event.target.dataset.idenity
        console.log(selectedData);
        this.setState({
            userEmail:selectedValue,
            dbId:selectedData
        })
    }

    render() {
        if (this.state.nickname === 1 && this.state.login === 1) {
            return <NewClientForm
                saveUser={this.saveUser}
                handleChange={this.handleInputChange}
            />

          }  else if (this.state.userEmail === 'admin@cybermark.com') {


                 return (
                     <>
            
                         <Header name={this.state.userId} email={this.state.userEmail} nickname={this.state.nickname} />
                         <div id="reviewBanner">Your project is in review</div>
                         <div id="designBanner">Your project is now in content edit mode</div>
                         <div id="wrapper" >
                             <div className="container1 fixed" id="container1">
                                 <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png" height="45" alt="cybermark logo" />
                                 <br></br>

                                 <h5 className="content-blocks">Content Blocks</h5>
                                 <Headers />
                                 <Intros />
                                 <ContentContainer />
                                 <Gallery />
                                 <Features />
                                 <Team />
                                 <Testimonials />
                                 <ContactContainer />
                                 <Footers />
                             </div>
            
            
                             <div id="container2">
                                 <AdminDropDown handleSelect={this.handleSelect} />

                                 <br></br>
                                 <ContainerTabs
                                     openEdit={this.openEdit}
                                     name={this.state.userId}
                                     email={this.state.userEmail}
                                     userId={this.state.userId}
                                     dbId={this.state.dbId}
                                     getId={this.getId}
                                     handleSubmit={this.handleSubmit}
                                     handleInputChange={this.handleInputChange}
                                     closeEdit={this.closeEdit}
                                 />
                             </div>
            
            
                         </div>
                     </>
                 )
             }  else {

            return (
                <>
                    <Header name={this.state.userId} email={this.state.userEmail} nickname={this.state.nickname} />
                    <div id="reviewBanner">Your project is in review</div>
                    <div id="designBanner">Your project is now in content edit mode</div>
                    <div id="wrapper" >
                        <div className="container1 fixed" id="container1">
                            <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png" height="45" alt="cybermark logo" />
                            <br></br>
                            <h5 className="content-blocks">Content Blocks</h5>
                            <Headers />
                            <Intros />
                            <ContentContainer />
                            <Gallery />
                            <Features />
                            <Team />
                            <Testimonials />
                            <ContactContainer />
                            <Footers />
                        </div>


                        <div id="container2">
                            <ContainerTabs
                                name={this.state.userId}
                                email={this.state.userEmail}
                                userId={this.state.userId}
                                dbId={this.state.dbId}
                                getId={this.getId}
                                handleSubmit={this.handleSubmit}
                                handleInputChange={this.handleInputChange}
                            />

                        </div>


                    </div>
                </>
            );
        }
    }
}



export default Copy;



