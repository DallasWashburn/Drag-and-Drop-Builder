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
import Modal from "./Components/Modal/Modal";
import AdminEdit from "./Components/Admin-Edit/Admin-Edit";


class Copy extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            closed: false,
            userId: props.user.sub,
            userEmail: props.user.email,
            companyName: "",
            URL: "",
            nickname: props.user.nickname,
            login: 1,
            dbId: "",
            dataContent: "",
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

    onUpload = (event) => {
        this.setState({ images: EventTarget })
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
                    // [this.state.items3][this.state.items4][this.state.items5][this.state.items6][this.state.items7][this.state.items8]
                    API.saveUser(project)
                    this.setState({ nickname: 2 })
                    this.getId()
                }
            })

    }

    handleSubmit = (evt) => {
        evt.preventDefault();

    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        this.setState({

        })


    }

    getContent = (event) => {
        var content = event.target.parentElement.getAttribute("data-content")
        this.setState({
            dataContent: content
        })
    }

    setContent = () => {
        if (this.state.dataContent !== "") {
            var contentBlock = document.querySelectorAll(`[data-element=${this.state.dataContent}]`);
            var pTag1 = contentBlock[0].getElementsByTagName("p")[0].innerText
            // var mainHeading = contentBlock[0].getElementsByTagName("h1")
            var subHeading = contentBlock[0].getElementsByTagName("h3")[0].innerText
            var imageBlock = contentBlock[0].getElementsByTagName("img")
            this.setState({
                h3Heading: subHeading,
                pFirst: pTag1
            })
        }


    }

    openEdit = (event) => {
        setTimeout(this.setContent, 1000)
        document.getElementById("mySidebar").style.width = "249px";

    }

    fullScreen = () => {
        document.getElementById("container1").style.visibility = "hidden";
        document.getElementById("container2").style.minWidth = "99%"
        document.getElementById("webBox").style.minWidth = "110%"
        document.getElementById("container2").style.marginRight = "280px"
        document.getElementById("menuArrow").style.visibility = "hidden"
    }

    closeScreen = () => {
        document.getElementById("container1").style.visibility = "visible";
        document.getElementById("container2").style.minWidth = "80%"
        document.getElementById("webBox").style.minWidth = "120%"
        document.getElementById("container2").style.marginRight = "20px"
        document.getElementById("menuArrow").style.visibility = "visible"

    }


    closeEdit = () => {
        document.getElementById("mySidebar").style.width = "0";
    }


    render() {
        if (this.state.nickname === 1 && this.state.login === 1) {
            return <NewClientForm
                saveUser={this.saveUser}
                handleChange={this.handleInputChange}
            />

        }  else {

            return (
                <>
                    <Header name={this.state.userId} email={this.state.userEmail} nickname={this.state.nickname} />
                    <div id="reviewBanner">Your project is in review</div>
                    <div id="designBanner">Your project is now in content edit mode</div>
                    <div id="wrapper" >
                        {/* <span id="menuArrow" className="menuArrow"><i onClick={this.fullScreen} className="fas fa-lg fa-angle-left"></i></span> */}
                        {/* <span id="openArrow"><i onClick={this.closeScreen} className="fas fa-lg fa-angle-left"></i></span> */}
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
                                openEdit={this.openEdit}
                                name={this.state.userId}
                                email={this.state.userEmail}
                                userId={this.state.userId}
                                dbId={this.state.dbId}
                                getId={this.getId}
                                handleSubmit={this.handleSubmit}
                                handleInputChange={this.handleInputChange}
                                dataContent={this.state.dataContent}
                                closeEdit={this.closeEdit}
                            />

                        </div>


                    </div>
                </>
            );
        }
    }
}



export default Copy;



// else if (this.state.userEmail === 'admin@cybermark.com') {


//     return (
//         <>

//             <Header name={this.state.userId} email={this.state.userEmail} nickname={this.state.nickname} />
//             <div id="reviewBanner">Your project is in review</div>
//             <div id="designBanner">Your project is now in content edit mode</div>
//             <div id="wrapper" >
//                 <div className="container1 fixed" id="container1">
//                     <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png" height="45" alt="cybermark logo" />
//                     <br></br>
//                     <h5 className="content-blocks">Content Blocks</h5>
//                     <Headers />
//                     <Intros />
//                     <ContentContainer />
//                     <Gallery />
//                     <Features />
//                     <Team />
//                     <Testimonials />
//                     <ContactContainer />
//                     <Footers />
//                 </div>


//                 <div id="container2">
//                     <ContainerTabs
//                         openEdit={this.openEdit}
//                         name={this.state.userId}
//                         email={this.state.userEmail}
//                         userId={this.state.userId}
//                         dbId={this.state.dbId}
//                         getId={this.getId}
//                         handleSubmit={this.handleSubmit}
//                         handleInputChange={this.handleInputChange}
//                         dataContent={this.state.dataContent}
//                         closeEdit={this.closeEdit}
//                     />
//                 </div>


//             </div>
//         </>
//     )
// }