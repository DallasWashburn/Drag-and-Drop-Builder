import React, { Component } from 'react';
import "./Tabs.css"
import API from '../../utils/API';
import { Tabs, TabLink, TabContent } from "react-tabs-redux"
import Container1 from "../Container/Container"
import Container2 from "../Container2/Container2"
import Container3 from "../Container3/Container3"
import Container4 from "../Container4/Container4"
import Container5 from "../Container5/Container5"
import Container6 from "../Container6/Container6"
import Container7 from "../Container7/Container7"
import Container8 from "../Container8/Container8"
import Container9 from "../Container9/Container9"
import Container10 from "../Container10/Container10"
import Container11 from "../Container11/Container11"
import Container12 from "../Container12/Container12"
import Container13 from "../Container13/Container13"
import Container14 from "../Container14/Container14"
import Container15 from "../Container15/Container15"
import Container16 from "../Container16/Container16"
import Container17 from "../Container17/Container17"
import Container18 from "../Container18/Container18"
import Container19 from "../Container19/Container19"
import Container20 from "../Container20/Container20"
import Modal from "../Modal/Modal"
import { applyDrag, generateItems } from '../../utils';
import PDFGenerate from "../PDF-Generate/PDF-Generate"
import SaveButton from "../Save-Button/Save-Button"
import FinalizeButton from '../Finalize-Button/Finalize-Button';

var pageTitles = ["Home Page"]

const styles = {
    activeLinkStyle: {
        backgroundColor: "transparent",
        color: "#00D4BB",
        borderRight: "none"
    },

    notActive: {
        backgroundColor: "transparent",
        color: "#FFF"
    }
}


class ContainerTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {

            name: this.props.name,
            userEmail: this.props.email,
            userId: this.props.userId,
            items2: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 2 - ${i}` })),
            items3: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 3 - ${i}` })),
            items4: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 4 - ${i}` })),
            items5: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 5 - ${i}` })),
            items6: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 6 - ${i}` })),
            items7: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 7 - ${i}` })),
            items8: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 8 - ${i}` })),
            items9: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 9 - ${i}` })),
            items10: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 10 - ${i}` })),
            items11: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 11 - ${i}` })),
            items12: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 12 - ${i}` })),
            items13: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 13 - ${i}` })),
            items14: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 14 - ${i}` })),
            items15: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 15 - ${i}` })),
            items16: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 16 - ${i}` })),
            items17: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 17 - ${i}` })),
            items18: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 18 - ${i}` })),
            items19: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 19 - ${i}` })),
            items20: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 20 - ${i}` })),
            items21: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 21 - ${i}` })),
            pageName1: "Home Page",
            pageName2: "+",
            pageName3: "+",
            pageName4: "+",
            pageName5: "+",
            pageName6: "+",
            pageName7: "+",
            pageName8: "+",
            pageName9: "+",
            pageName10: "+",
            pageName11: "+",
            pageName12: "+",
            pageName13: "+",
            pageName14: "+",
            pageName15: "+",
            pageName16: "+",
            pageName17: "+",
            pageName18: "+",
            pageName19: "+",
            pageName20: "+",
            isHidden1: true,
            isHidden2: true,
            isHidden3: true,
            isHidden4: true,
            isHidden5: true,
            isHidden6: true,
            isHidden7: true,
            isHidden8: true,
            isHidden9: true,
            isHidden10: true,
            isHidden11: true,
            isHidden12: true,
            isHidden13: true,
            isHidden14: true,
            isHidden15: true,
            isHidden16: true,
            isHidden17: true,
            isHidden18: true,
            isHidden19: true,
            isHidden20: true,
            dbId: this.props.dbId,
        }
    }

    componentDidMount() {
        this.getProject()
    }

    getOccurance = (array, value) => {
        var count = 0;
        array.forEach((v) => {
            (v.data === value && count++)

        });
        
        console.log(count);
        return count;
    }

    getDuplicates = () => {
        var array = [...this.state.items2];
        var contentCount = this.getOccurance(array, "Content-0")
        var corrected = []
        window.setTimeout(() => {
        var elementPosition = array.map((x) => {
            if(contentCount > 1 && x.data === "Content-0"){
                console.log("plzzzzzzzz");
                x.data ="Content-0" + 1
                console.log(x);
                this.setState({items2:array})
            } else {
                console.log("no");
            }
            return x.data
        })
    }, 1000)
        // this.setState({items2:array})
    }

    getProject = () => {

        API.getUsers()
            .then(users => {
                var theUsers = users.data
                for (let i = 0; i < theUsers.length; i++) {
                    const element = theUsers[i];
                    if (element.userEmail === this.state.userEmail) {
                        var Page1Title = element.projects[0];
                        var Page1 = element.projects[1];
                        var Page2Title = element.projects[2][0].data;
                        var Page2 = element.projects[3];
                        var Page3Title = element.projects[4][0].data;
                        var Page3 = element.projects[5];
                        var Page4Title = element.projects[6][0].data;
                        var Page4 = element.projects[7];
                        var Page5Title = element.projects[8][0].data;
                        var Page5 = element.projects[9];
                        var Page6Title = element.projects[10][0].data;
                        var Page6 = element.projects[11];
                        var Page7Title = element.projects[12][0].data;
                        var Page7 = element.projects[13];
                        var Page8Title = element.projects[14][0].data;
                        var Page8 = element.projects[15]
                        var Page9Title = element.projects[16][0].data;
                        var Page9 = element.projects[17];
                        var Page10Title = element.projects[18][0].data;
                        var Page10 = element.projects[19];
                        var Page11Title = element.projects[20][0].data;
                        var Page11 = element.projects[21];
                        var Page12Title = element.projects[22][0].data;
                        var Page12 = element.projects[23];
                        var Page13Title = element.projects[24][0].data;
                        var Page13 = element.projects[25];
                        var Page14Title = element.projects[26][0].data;
                        var Page14 = element.projects[27];
                        var Page15Title = element.projects[28][0].data;
                        var Page15 = element.projects[29];
                        var Page16Title = element.projects[30][0].data;
                        var Page16 = element.projects[31];
                        var Page17Title = element.projects[32][0].data;
                        var Page17 = element.projects[33];
                        var Page18Title = element.projects[34][0].data;
                        var Page18 = element.projects[35];
                        var Page19Title = element.projects[36][0].data;
                        var Page19 = element.projects[37];
                        var Page20Title = element.projects[38][0].data;
                        var Page20 = element.projects[39];


                        if (element.finalized === true) {
                            var divDisable = document.getElementById("container2");
                            divDisable.classList.add("final");
                            var imageDisable = document.getElementsByClassName("image-button");
                            var container1Disable = document.getElementsByClassName("menu-btn");
                            var buttonDisable = document.getElementsByClassName("button-wrap");
                            var dragDisable = document.getElementsByClassName("smooth-dnd-draggable-wrapper");
                            var reviewBanner = document.getElementById("reviewBanner")
                            reviewBanner.style.visibility = "visible"
                            setTimeout(function () {
                                for (let index = 0; index < imageDisable.length; index++) {
                                    const element = imageDisable[index];
                                    element.style.display = "none"
                                }
                                for (let j = 0; j < container1Disable.length; j++) {
                                    const element = container1Disable[j];
                                    element.style.pointerEvents = "none"
                                }

                                for (let k = 0; k < buttonDisable.length; k++) {
                                    const element = buttonDisable[k];
                                    element.style.display = "none"
                                }

                                for (let d = 0; d < dragDisable.length; d++) {
                                    const element = dragDisable[d];
                                    element.style.pointerEvents = "none"
                                }
                            }, 1000)

                        }
                        if (element.designFinalized === true) {
                            var container1Disable = document.getElementsByClassName("menu-btn");
                            var dragDisable = document.getElementsByClassName("tab-content");
                            var buttonDisable = document.getElementsByClassName("button-wrap");
                            var designBanner = document.getElementById("designBanner")
                            designBanner.style.visibility = "visible"
                            setTimeout(function () {
                                for (let j = 0; j < container1Disable.length; j++) {
                                    const element = container1Disable[j];
                                    element.style.pointerEvents = "none"
                                }
                                for (let d = 0; d < dragDisable.length; d++) {
                                    const element = dragDisable[d];
                                    element.children[0].classList.remove("smooth-dnd-container");
                                }
                                for (let k = 0; k < buttonDisable.length; k++) {
                                    const element = buttonDisable[k];
                                    element.style.display = "none"
                                }
                            }, 1000)

                        }
                        this.setState({
                            Page1Title: Page1Title,
                            items2: Page1,
                            pageName2: Page2Title,
                            items3: Page2,
                            pageName3: Page3Title,
                            items4: Page3,
                            pageName4: Page4Title,
                            items5: Page4,
                            pageName5: Page5Title,
                            items6: Page5,
                            pageName6: Page6Title,
                            items7: Page6,
                            pageName7: Page7Title,
                            items8: Page7,
                            pageName8: Page8Title,
                            items9: Page8,
                            pageName9: Page9Title,
                            items10: Page9,
                            pageName10: Page10Title,
                            items11: Page10,
                            pageName11: Page11Title,
                            items12: Page11,
                            pageName12: Page12Title,
                            items13: Page12,
                            pageName13: Page13Title,
                            items14: Page13,
                            pageName14: Page14Title,
                            items15: Page14,
                            pageName15: Page15Title,
                            items16: Page15,
                            pageName16: Page16Title,
                            items17: Page16,
                            pageName17: Page17Title,
                            items18: Page17,
                            pageName18: Page18Title,
                            items19: Page18,
                            pageName19: Page19Title,
                            items20: Page19,
                            pageName20: Page20Title,
                            items21: Page20,
                        })
                    }
                }
                this.checkTabs()
            })
    }

    checkTabs = () => {
        if (this.state.pageName2.length > 1) {

            var link3 = document.getElementById("link-3")
            link3.style.visibility = "visible";
            var link2 = document.getElementById("link-2")
            var link2Child = link2.childNodes[0]
            link2Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName3.length > 1) {

            var link4 = document.getElementById("link-4")
            link4.style.visibility = "visible";
            var link3New = document.getElementById("link-3")
            var link3Child = link3New.childNodes[0]
            link3Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName4.length > 1) {

            var link5 = document.getElementById("link-5")
            link5.style.visibility = "visible";
            var link4New = document.getElementById("link-4")
            var link4Child = link4New.childNodes[0]
            link4Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName5.length > 1) {

            var link6 = document.getElementById("link-6")
            link6.style.visibility = "visible";
            var link5New = document.getElementById("link-5")
            var link5Child = link5New.childNodes[0]
            link5Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName6.length > 1) {

            var link7 = document.getElementById("link-7")
            link7.style.visibility = "visible";
            var link6New = document.getElementById("link-6")
            var link6Child = link6New.childNodes[0]
            link6Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName7.length > 1) {

            var link8 = document.getElementById("link-8")
            link8.style.visibility = "visible";
            var link7New = document.getElementById("link-7")
            var link7Child = link7New.childNodes[0]
            link7Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName8.length > 1) {

            var link9 = document.getElementById("link-9")
            link9.style.visibility = "visible";
            var link8New = document.getElementById("link-8")
            var link8Child = link8New.childNodes[0]
            link8Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName9.length > 1) {

            var link10 = document.getElementById("link-10")
            link10.style.visibility = "visible";
            var link9New = document.getElementById("link-9")
            var link9Child = link9New.childNodes[0]
            link9Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName10.length > 1) {
            var link11 = document.getElementById("link-11")
            link11.style.visibility = "visible";
            var link10New = document.getElementById("link-10")
            var link10Child = link10New.childNodes[0]
            link10Child.setAttribute("data-clicks", 1);
            document.getElementById("homePage").style.justifyContent="space-around";
            document.getElementById("sub-menu-btn").style.zIndex= "1"

        }
        if (this.state.pageName11.length > 1) {
            var link12 = document.getElementById("link-12")
            link12.style.visibility = "visible";
            var link11New = document.getElementById("link-11")
            var link11Child = link11New.childNodes[0]
            link11Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName12.length > 1) {
            var link13 = document.getElementById("link-13")
            link13.style.visibility = "visible";
            var link12New = document.getElementById("link-12")
            var link12Child = link12New.childNodes[0]
            link12Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName13.length > 1) {
            var link14 = document.getElementById("link-14")
            link14.style.visibility = "visible";
            var link13New = document.getElementById("link-13")
            var link13Child = link13New.childNodes[0]
            link13Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName14.length > 1) {
            var link15 = document.getElementById("link-15")
            link15.style.visibility = "visible";
            var link14New = document.getElementById("link-14")
            var link14Child = link14New.childNodes[0]
            link14Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName15.length > 1) {
            var link16 = document.getElementById("link-16")
            link16.style.visibility = "visible";
            var link15New = document.getElementById("link-15")
            var link15Child = link15New.childNodes[0]
            link15Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName16.length > 1) {
            var link17 = document.getElementById("link-17")
            link17.style.visibility = "visible";
            var link16New = document.getElementById("link-16")
            var link16Child = link16New.childNodes[0]
            link16Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName17.length > 1) {
            var link18 = document.getElementById("link-18")
            link18.style.visibility = "visible";
            var link17New = document.getElementById("link-17")
            var link17Child = link17New.childNodes[0]
            link17Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName18.length > 1) {
            var link19 = document.getElementById("link-19")
            link19.style.visibility = "visible";
            var link18New = document.getElementById("link-18")
            var link18Child = link18New.childNodes[0]
            link18Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName19.length > 1) {
            var link20 = document.getElementById("link-20")
            link20.style.visibility = "visible";
            var link19New = document.getElementById("link-19")
            var link19Child = link19New.childNodes[0]
            link19Child.setAttribute("data-clicks", 1);
        }
        if (this.state.pageName20.length > 1) {
            var link20New = document.getElementById("link-20")
            var link20Child = link20New.childNodes[0]
            link20Child.setAttribute("data-clicks", 1);
        }
    }


    updateUser = () => {
        var nameOfPage1 = { id: "pageName1", data: this.state.pageName1 }
        var nameOfPage2 = { id: "pageName2", data: this.state.pageName2 }
        var nameOfPage3 = { id: "pageName3", data: this.state.pageName3 }
        var nameOfPage4 = { id: "pageName4", data: this.state.pageName4 }
        var nameOfPage5 = { id: "pageName5", data: this.state.pageName5 }
        var nameOfPage6 = { id: "pageName6", data: this.state.pageName6 }
        var nameOfPage7 = { id: "pageName7", data: this.state.pageName7 }
        var nameOfPage8 = { id: "pageName8", data: this.state.pageName8 }
        var nameOfPage9 = { id: "pageName9", data: this.state.pageName9 }
        var nameOfPage10 = { id: "pageName10", data: this.state.pageName10 }
        var nameOfPage11 = { id: "pageName11", data: this.state.pageName11 }
        var nameOfPage12 = { id: "pageName12", data: this.state.pageName12 }
        var nameOfPage13 = { id: "pageName13", data: this.state.pageName13 }
        var nameOfPage14 = { id: "pageName14", data: this.state.pageName14 }
        var nameOfPage15 = { id: "pageName15", data: this.state.pageName15 }
        var nameOfPage16 = { id: "pageName16", data: this.state.pageName16 }
        var nameOfPage17 = { id: "pageName17", data: this.state.pageName17 }
        var nameOfPage18 = { id: "pageName18", data: this.state.pageName18 }
        var nameOfPage19 = { id: "pageName19", data: this.state.pageName19 }
        var nameOfPage20 = { id: "pageName20", data: this.state.pageName20 }

        var allPages = [nameOfPage1, this.state.items2, nameOfPage2, this.state.items3, nameOfPage3, this.state.items4, nameOfPage4, this.state.items5, nameOfPage5, this.state.items6, nameOfPage6, this.state.items7, nameOfPage7, this.state.items8, nameOfPage8, this.state.items9, nameOfPage9, this.state.items10, nameOfPage10, this.state.items11, nameOfPage11, this.state.items12, nameOfPage12, this.state.items13, nameOfPage13, this.state.items14, nameOfPage14, this.state.items15, nameOfPage15, this.state.items16, nameOfPage16, this.state.items17, nameOfPage17, this.state.items18, nameOfPage18, this.state.items19, nameOfPage19, this.state.items20, nameOfPage20, this.state.items21,]

        API.updateUser(this.props.dbId, allPages)

        window.alert("Thank you, Your Project Has Been Saved")

    }

    passUp = (items) => {
        this.setState({items2:items})
    }


    finalize = (event) => {
        event.preventDefault()
        var question = window.confirm("Are you sure you would like to finalize this project? You will not be able to make any more edits once this is performed")
        if (question === true) {
            API.updateUserStatus(this.props.dbId, true)
            var divDisable = document.getElementById("container2")
            divDisable.classList.add("final")
            window.location.reload()
        } else {
            // console.log("no im still working");
        }
    }




    // Handles the form inside modal and disperses text to the corresponding page 

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        var modalBackground = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        if (modalBackground.id === "modal1") {
            this.setState({
                pageName2: value
            });
        }
        if (modalBackground.id === "modal2") {
            this.setState({
                pageName3: value
            });
        }
        if (modalBackground.id === "modal3") {
            this.setState({
                pageName4: value
            });
        }
        if (modalBackground.id === "modal4") {
            this.setState({
                pageName5: value
            });
        }
        if (modalBackground.id === "modal5") {
            this.setState({
                pageName6: value
            });
        }
        if (modalBackground.id === "modal6") {
            this.setState({
                pageName7: value
            });
        }
        if (modalBackground.id === "modal7") {
            this.setState({
                pageName8: value
            });
        }
        if (modalBackground.id === "modal8") {
            this.setState({
                pageName9: value
            });
        }
        if (modalBackground.id === "modal9") {
            this.setState({
                pageName10: value
            });
        }
        if (modalBackground.id === "modal10") {
            this.setState({
                pageName11: value
            });
        }
        if (modalBackground.id === "modal11") {
            this.setState({
                pageName12: value
            });
        }
        if (modalBackground.id === "modal12") {
            this.setState({
                pageName13: value
            });
        }
        if (modalBackground.id === "modal13") {
            this.setState({
                pageName14: value
            });
        }
        if (modalBackground.id === "modal14") {
            this.setState({
                pageName15: value
            });
        }
        if (modalBackground.id === "modal15") {
            this.setState({
                pageName16: value
            });
        }
        if (modalBackground.id === "modal16") {
            this.setState({
                pageName17: value
            });
        }
        if (modalBackground.id === "modal17") {
            this.setState({
                pageName18: value
            });
        }
        if (modalBackground.id === "modal18") {
            this.setState({
                pageName19: value
            });
        }
        if (modalBackground.id === "modal19") {
            this.setState({
                pageName20: value
            });
        }

    }

    modalClose = (event) => {
        event.preventDefault();
        let modalTab = event.target.parentElement.parentElement.parentElement.parentElement
        modalTab.dataset.clicks = 0;
        if (modalTab.id === "tab-tab2") {
            var previous = document.getElementById("tab-tab2");
            previous.setAttribute("aria-selected", "false");
            previous.classList.remove("tab-link-active")
            modalTab.setAttribute("aria-selected", "true");
            modalTab.classList.add("tab-content-visible")
            this.setState({
                isHidden1: true,
                pageName2: "+"

            })
        } else if (modalTab.id === "tab-tab3") {
            var previous = document.getElementById("tab-tab3");
            previous.setAttribute("aria-selected", "false");
            previous.classList.remove("tab-link-active")
            modalTab.setAttribute("aria-selected", "true");
            modalTab.classList.add("tab-content-visible")
            this.setState({
                isHidden2: true,
                pageName3: "+"
            })
        } else if (modalTab.id === "tab-tab4") {
            this.setState({ isHidden3: true })
        } else if (modalTab.id === "tab-tab5") {
            this.setState({ isHidden4: true })
        } else if (modalTab.id === "tab-tab6") {
            this.setState({ isHidden5: true })
        } else if (modalTab.id === "tab-tab7") {
            this.setState({ isHidden6: true })
        } else if (modalTab.id === "tab-tab8") {
            this.setState({ isHidden7: true })
        } else if (modalTab.id === "tab-tab9") {
            this.setState({ isHidden8: true })
        } else if (modalTab.id === "tab-tab10") {
            this.setState({ isHidden9: true })
        } else if (modalTab.id === "tab-tab11") {
            this.setState({ isHidden10: true })
        } else if (modalTab.id === "tab-tab12") {
            this.setState({ isHidden11: true })
        } else if (modalTab.id === "tab-tab13") {
            this.setState({ isHidden12: true })
        } else if (modalTab.id === "tab-tab14") {
            this.setState({ isHidden13: true })
        } else if (modalTab.id === "tab-tab15") {
            this.setState({ isHidden14: true })
        } else if (modalTab.id === "tab-tab16") {
            this.setState({ isHidden15: true })
        } else if (modalTab.id === "tab-tab17") {
            this.setState({ isHidden16: true })
        } else if (modalTab.id === "tab-tab18") {
            this.setState({ isHidden17: true })
        } else if (modalTab.id === "tab-tab19") {
            this.setState({ isHidden18: true })
        } else if (modalTab.id === "tab-tab20") {
            this.setState({ isHidden19: true })
        }

    }

    // Handles the submit button on the modal 
    handleSubmit = (event) => {
        var modalName = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;

        // Pushes page titles to pdf doc, if name is not inputed, it will autofill the number of the page
        // Shows the next tab after the one before it has been used

        var divId = event.target.parentElement;
        var divParent = divId.parentElement
        var divGrandparent = divParent.parentElement
        var lastOne = divGrandparent.parentElement
        var oneINeed = lastOne.parentElement.parentElement
        // console.log(oneINeed);

        if (oneINeed.id === "tab-tab2") {

            if (this.state.pageName2 === "+") {
                this.setState({
                    pageName2: "Page 2"
                })
            }
            pageTitles.push(this.state.pageName2)
            var link3 = document.getElementById("link-3")
            link3.style.visibility = "visible"
        }

        if (oneINeed.id === "tab-tab3") {

            if (this.state.pageName3 === "+") {
                this.setState({
                    pageName3: "Page 3"

                })
            }
            pageTitles.push(this.state.pageName3)
            var link4 = document.getElementById("link-4")
            link4.style.visibility = "visible"
        }

        if (oneINeed.id === "tab-tab4") {

            if (this.state.pageName4 === "+") {
                this.setState({
                    pageName4: "Page 4"

                })
            }
            pageTitles.push(this.state.pageName4)
            var link5 = document.getElementById("link-5")
            link5.style.visibility = "visible"
        }

        if (oneINeed.id === "tab-tab5") {

            if (this.state.pageName5 === "+") {
                this.setState({
                    pageName5: "Page 5"

                })
            }
            pageTitles.push(this.state.pageName5)
            var link6 = document.getElementById("link-6")
            link6.style.visibility = "visible"
        }

        if (oneINeed.id === "tab-tab6") {

            if (this.state.pageName6 === "+") {
                this.setState({
                    pageName6: "Page 6"
                })
            }
            pageTitles.push(this.state.pageName6)
            var link7 = document.getElementById("link-7")
            link7.style.visibility = "visible"
        }

        if (oneINeed.id === "tab-tab7") {

            if (this.state.pageName7 === "+") {
                this.setState({
                    pageName7: "Page 7"

                })
            }
            pageTitles.push(this.state.pageName7)
            var link8 = document.getElementById("link-8")
            link8.style.visibility = "visible"
        }
        if (oneINeed.id === "tab-tab8") {

            if (this.state.pageName8 === "+") {
                this.setState({
                    pageName8: "Page 8"

                })
            }
            pageTitles.push(this.state.pageName8)
            var link9 = document.getElementById("link-9")
            link9.style.visibility = "visible"

        }
        if (oneINeed.id === "tab-tab9") {

            if (this.state.pageName9 === "+") {
                this.setState({
                    pageName9: "Page 9"

                })
            }
            pageTitles.push(this.state.pageName9)
            var link10 = document.getElementById("link-10")
            link10.style.visibility = "visible"

        }
        if (oneINeed.id === "tab-tab10") {

            if (this.state.pageName10 === "+") {
                this.setState({
                    pageName10: "Page 10"

                })
            }
            pageTitles.push(this.state.pageName10)

        }
        if (oneINeed.id === "tab-tab11") {

            if (this.state.pageName11 === "+") {
                this.setState({
                    pageName11: "Page 11"

                })
            }
            pageTitles.push(this.state.pageName11)

        }
        if (oneINeed.id === "tab-tab12") {

            if (this.state.pageName12 === "+") {
                this.setState({
                    pageName12: "Page 12"

                })
            }
            pageTitles.push(this.state.pageName12)

        }
        if (oneINeed.id === "tab-tab13") {

            if (this.state.pageName13 === "+") {
                this.setState({
                    pageName13: "Page 13"

                })
            }
            pageTitles.push(this.state.pageName13)

        }
        if (oneINeed.id === "tab-tab14") {

            if (this.state.pageName14 === "+") {
                this.setState({
                    pageName14: "Page 14"

                })
            }
            pageTitles.push(this.state.pageName14)

        }
        if (oneINeed.id === "tab-tab15") {
            if (this.state.pageName15 === "+") {
                this.setState({
                    pageName15: "Page 15"

                })
            }
            pageTitles.push(this.state.pageName15)
        }
        if (oneINeed.id === "tab-tab16") {
            if (this.state.pageName16 === "+") {
                this.setState({
                    pageName16: "Page 16"

                })
            }
            pageTitles.push(this.state.pageName16)
        }
        if (oneINeed.id === "tab-tab17") {
            if (this.state.pageName17 === "+") {
                this.setState({
                    pageName17: "Page 17"

                })
            }
            pageTitles.push(this.state.pageName17)
        }
        if (oneINeed.id === "tab-tab18") {
            if (this.state.pageName18 === "+") {
                this.setState({
                    pageName18: "Page 18"

                })
            }
            pageTitles.push(this.state.pageName18)
        }
        if (oneINeed.id === "tab-tab19") {
            if (this.state.pageName19 === "+") {
                this.setState({
                    pageName19: "Page 19"

                })
            }
            pageTitles.push(this.state.pageName19)
        }
        if (oneINeed.id === "tab-tab20") {
            if (this.state.pageName20 === "+") {
                this.setState({
                    pageName20: "Page 20"

                })
            }
            pageTitles.push(this.state.pageName20)
        }


        // Closes the corresponding modal //

        if (modalName.id === "modal1") {
            this.setState({ isHidden1: true })
            modalName.remove()
        }
        if (modalName.id === "modal2") {
            this.setState({ isHidden2: true })
            modalName.remove()
        }
        if (modalName.id === "modal3") {
            this.setState({ isHidden3: true })
            modalName.remove()
        }
        if (modalName.id === "modal4") {
            this.setState({ isHidden4: true })
            modalName.remove()
        }
        if (modalName.id === "modal5") {
            this.setState({ isHidden5: true })
            modalName.remove()
        }
        if (modalName.id === "modal6") {
            this.setState({ isHidden6: true })
            modalName.remove()
        }
        if (modalName.id === "modal7") {
            this.setState({ isHidden7: true })
            modalName.remove()
        }
        if (modalName.id === "modal8") {
            this.setState({ isHidden8: true })
            modalName.remove()
        }
        if (modalName.id === "modal9") {
            this.setState({ isHidden9: true })
            modalName.remove()
        }
        if (modalName.id === "modal10") {
            this.setState({ isHidden10: true })
            modalName.remove()
        }
        if (modalName.id === "modal11") {
            this.setState({ isHidden11: true })
            modalName.remove()
        }
        if (modalName.id === "modal12") {
            this.setState({ isHidden12: true })
            modalName.remove()
        }
        if (modalName.id === "modal13") {
            this.setState({ isHidden13: true })
            modalName.remove()
        }
        if (modalName.id === "modal14") {
            this.setState({ isHidden14: true })
            modalName.remove()
        }
        if (modalName.id === "modal15") {
            this.setState({ isHidden15: true })
            modalName.remove()
        }
        if (modalName.id === "modal16") {
            this.setState({ isHidden16: true })
            modalName.remove()
        }
        if (modalName.id === "modal17") {
            this.setState({ isHidden17: true })
            modalName.remove()
        }
        if (modalName.id === "modal18") {
            this.setState({ isHidden18: true })
            modalName.remove()
        }
        if (modalName.id === "modal19") {
            this.setState({ isHidden19: true })
            modalName.remove()
        }
        if (modalName.id === "modal20") {
            this.setState({ isHidden20: true })
            modalName.remove()
        }
    }

    //  Opens the modal for corresponding tab 

    modalOpen = (event) => {

        // this.toggleHidden();
        var element = event.target
        var parent = element.parentElement;
        if (parent.id === "tab-tab2" && parent.dataset.clicks === "0" && element.textContent.length > 1) {
            parent.setAttribute("data-clicks", 1)
            var inputBox = parent.getElementsByTagName('INPUT')[0];
            console.log(inputBox);
            this.setState({ isHidden1: false })
            inputBox.focus();
        }
        if (parent.id === "tab-tab3" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden2: false })
        }
        if (parent.id === "tab-tab4" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden3: false })
        }
        if (parent.id === "tab-tab5" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden4: false })
        }
        if (parent.id === "tab-tab6" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden5: false })
        }
        if (parent.id === "tab-tab7" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden6: false })
        }
        if (parent.id === "tab-tab8" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden7: false })
        }
        if (parent.id === "tab-tab9" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden8: false })
        }
        if (parent.id === "tab-tab10" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden9: false })
        }
        if (parent.id === "tab-tab11" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden10: false })
        }
        if (parent.id === "tab-tab12" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden11: false })
        }
        if (parent.id === "tab-tab13" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden12: false })
        }
        if (parent.id === "tab-tab14" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden13: false })
        }
        if (parent.id === "tab-tab15" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden14: false })
        }
        if (parent.id === "tab-tab16" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden15: false })
        }
        if (parent.id === "tab-tab17" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden16: false })
        }
        if (parent.id === "tab-tab18" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden17: false })
        }
        if (parent.id === "tab-tab19" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden18: false })
        }
        if (parent.id === "tab-tab20" && parent.dataset.clicks === "0") {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden19: false })
        }

    }
    // Deletes tab and array 
    deleteTab = (event) => {
        var tab = event.target.parentElement.parentElement
        if (tab.id === "tab-tab2") {
            this.setState({ pageName2: "" })
            document.getElementById("tabpanel-tab2").remove()
        }
        if (tab.id === "tab-tab3") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName3: "" })
            document.getElementById("tabpanel-tab3").remove()
        }
        if (tab.id === "tab-tab4") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName4: "" })
            document.getElementById("tabpanel-tab4").remove()
        }
        if (tab.id === "tab-tab5") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName5: "" })
            document.getElementById("tabpanel-tab5").remove()
        }
        if (tab.id === "tab-tab6") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName6: "" })
            document.getElementById("tabpanel-tab6").remove()
        }
        if (tab.id === "tab-tab7") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName7: "" })
            document.getElementById("tabpanel-tab7").remove()
        }
        if (tab.id === "tab-tab8") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName8: "" })
            document.getElementById("tabpanel-tab8").remove()
        }
        if (tab.id === "tab-tab9") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName9: "" })
            document.getElementById("tabpanel-tab9").remove()
        }
        if (tab.id === "tab-tab10") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName10: "" })
            document.getElementById("tabpanel-tab10").remove()
        }
        if (tab.id === "tab-tab11") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName11: "" })
            document.getElementById("tabpanel-tab11").remove()
        }
        if (tab.id === "tab-tab12") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName12: "" })
            document.getElementById("tabpanel-tab12").remove()
        }
        if (tab.id === "tab-tab13") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName13: "" })
            document.getElementById("tabpanel-tab13").remove()
        }
        if (tab.id === "tab-tab14") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName14: "" })
            document.getElementById("tabpanel-tab14").remove()
        }
        if (tab.id === "tab-tab15") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName15: "" })
            document.getElementById("tabpanel-tab15").remove()
        }
        if (tab.id === "tab-tab16") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName16: "" })
            document.getElementById("tabpanel-tab16").remove()
        }
        if (tab.id === "tab-tab17") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName17: "" })
            document.getElementById("tabpanel-tab17").remove()
        }
        if (tab.id === "tab-tab18") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName18: "" })
            document.getElementById("tabpanel-tab18").remove()
        }
        if (tab.id === "tab-tab19") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName19: "" })
            document.getElementById("tabpanel-tab19").remove()
        }
        if (tab.id === "tab-tab20") {
            var tab = event.target.parentElement.parentElement
            this.setState({ pageName20: "" })
            document.getElementById("tabpanel-tab20").remove()
        }
        tab.remove();
    }

    checkPageTitle = (event) => {
        var target = event.target.className;
        var targetFirstChar = event.target.textContent.charAt(0)
        var pageTitle = event.target.parentElement.dataset.clicks;
        var tabX = event.target.getElementsByTagName("span")[0];
        if (pageTitle === "0" && targetFirstChar === "+") {
            tabX.style.display = "none"
        } else if (pageTitle === "1" && target === "pageSpan") {
            tabX.style.display = "inline"
            tabX.style.marginLeft = "auto"
        } else {
            return
        }
    }


    // Removes Element from Tab-1
    removeElement1 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        // console.log(grandparent);
        var array = [...this.state.items2];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items2: array })
        }
    }

    // Duplicates Element from Tab-1
    duplicateElement1 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items2];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        array.push(element[elementPosition])
        this.setState({ items2: array })
    }

    // Recieves Element's data when dropped into Tab-1
    getChildPayload1 = (i) => {
        return (
            this.state.items2[i]
        )
    }


    // Recieves Element when dropped on Tab-1 and Places Element in its correct index 
    onDrop1 = (e) => {
        this.setState({ items2: applyDrag(this.state.items2, e) });
    }

    // Removes Element from Tab-2
    removeElement2 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items3];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items3: array })
        }
    }

    // Duplicates Element from Tab-2
    duplicateElement2 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items3];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })

        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items3: array })
    }

    // Recieves Element's data when dropped into Tab-2
    getChildPayload2 = (i) => {
        return (
            this.state.items3[i]
        )
    }

    // Recieves Element when dropped on Tab-2 and Places Element in its correct index 
    onDrop2 = (e) => {
        this.setState({ items3: applyDrag(this.state.items3, e) })
    }

    // Removes Element from Tab-3
    removeElement3 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items4];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items4: array })
        }
    }

    // Duplicates Element from Tab-3
    duplicateElement3 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items4];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })

        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items4: array })
    }

    // Recieves Element's data when dropped into Tab-3
    getChildPayload3 = (i) => {
        return (
            this.state.items4[i]
        )
    }

    // Recieves Element when dropped on Tab-3 and Places Element in its correct index 
    onDrop3 = (e) => {
        this.setState({ items4: applyDrag(this.state.items4, e) })
    }

    // Removes Element from Tab-4
    removeElement4 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items5];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items5: array })
        }
    }

    // Duplicates Element from Tab-4
    duplicateElement4 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items5];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        array.push(element[elementPosition])
        this.setState({ items5: array })
    }

    // Recieves Element's data when dropped into Tab-4
    getChildPayload4 = (i) => {
        return (
            this.state.items5[i]
        )
    }

    // Recieves Element when dropped on Tab-4 and Places Element in its correct index 
    onDrop4 = (e) => {
        this.setState({ items5: applyDrag(this.state.items5, e) })
    }

    // Removes Element from Tab-5
    removeElement5 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items6];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items6: array })
        }
    }

    // Duplicates Element from Tab-5
    duplicateElement5 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items6];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })


        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items6: array })
    }

    // Recieves Element's data when dropped into Tab-5
    getChildPayload5 = (i) => {
        return (
            this.state.items6[i]
        )
    }

    // Recieves Element when dropped on Tab-5 and Places Element in its correct index 
    onDrop5 = (e) => {
        this.setState({ items6: applyDrag(this.state.items6, e) })
    }

    // Removes Element from Tab-6
    removeElement6 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items7];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items7: array })
        }
    }

    // Duplicates Element from Tab-6
    duplicateElement6 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items7];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items7: array })
    }

    // Recieves Element's data when dropped into Tab-6
    getChildPayload6 = (i) => {
        return (
            this.state.items7[i]
        )
    }

    // Recieves Element when dropped on Tab-6 and Places Element in its correct index 
    onDrop6 = (e) => {
        this.setState({ items7: applyDrag(this.state.items7, e) })
    }

    // Removes Element from Tab-7
    removeElement7 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items8];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items8: array })
        }
    }

    // Duplicates Element from Tab-7
    duplicateElement7 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items8];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items8: array })
    }

    // Recieves Element's data when dropped into Tab-7
    getChildPayload7 = (i) => {
        return (
            this.state.items8[i]
        )
    }

    // Recieves Element when dropped on Tab-7 and Places Element in its correct index 
    onDrop7 = (e) => {
        this.setState({ items8: applyDrag(this.state.items8, e) })
    }

    // Removes Element from Tab-8
    removeElement8 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items9];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items9: array })
        }
    }

    // Duplicates Element from Tab-8
    duplicateElement8 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items9];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items9: array })
    }

    // Recieves Element's data when dropped into Tab-8
    getChildPayload8 = (i) => {
        return (
            this.state.items9[i]
        )
    }

    // Recieves Element when dropped on Tab-8 and Places Element in its correct index 
    onDrop8 = (e) => {
        this.setState({ items9: applyDrag(this.state.items9, e) })
    }

    // Removes Element from Tab-9
    removeElement9 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items10];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items10: array })
        }
    }

    // Duplicates Element from Tab-9
    duplicateElement9 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items10];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items10: array })
    }

    // Recieves Element's data when dropped into Tab-9
    getChildPayload9 = (i) => {
        return (
            this.state.items10[i]
        )
    }

    // Recieves Element when dropped on Tab-9 and Places Element in its correct index 
    onDrop9 = (e) => {
        this.setState({ items10: applyDrag(this.state.items10, e) })
    }

    // Removes Element from Tab-10
    removeElement10 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items11];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items11: array })
        }
    }

    // Duplicates Element from Tab-10
    duplicateElement10 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items11];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items11: array })
    }

    // Recieves Element's data when dropped into Tab-10
    getChildPayload10 = (i) => {
        return (
            this.state.items11[i]
        )
    }

    // Recieves Element when dropped on Tab-10 and Places Element in its correct index 
    onDrop10 = (e) => {
        this.setState({ items11: applyDrag(this.state.items11, e) })
    }

    // Removes Element from Tab-11
    removeElement11 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items12];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items12: array })
        }
    }

    // Duplicates Element from Tab-11
    duplicateElement11 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items12];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items12: array })
    }

    // Recieves Element's data when dropped into Tab-11
    getChildPayload11 = (i) => {
        return (
            this.state.items12[i]
        )
    }

    // Recieves Element when dropped on Tab-11 and Places Element in its correct index 
    onDrop11 = (e) => {
        this.setState({ items12: applyDrag(this.state.items12, e) })
    }

    // Removes Element from Tab-12
    removeElement12 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items13];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items13: array })
        }
    }

    // Duplicates Element from Tab-12
    duplicateElement12 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items13];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items13: array })
    }

    // Recieves Element's data when dropped into Tab-12
    getChildPayload12 = (i) => {
        return (
            this.state.items13[i]
        )
    }

    // Recieves Element when dropped on Tab-12 and Places Element in its correct index 
    onDrop12 = (e) => {
        this.setState({ items13: applyDrag(this.state.items13, e) })
    }

    // Removes Element from Tab-13
    removeElement13 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items14];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items14: array })
        }
    }

    // Duplicates Element from Tab-13
    duplicateElement13 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items14];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items14: array })
    }

    // Recieves Element's data when dropped into Tab-13
    getChildPayload13 = (i) => {
        return (
            this.state.items14[i]
        )
    }

    // Recieves Element when dropped on Tab-13 and Places Element in its correct index 
    onDrop13 = (e) => {
        this.setState({ items14: applyDrag(this.state.items14, e) })
    }

    // Removes Element from Tab-14
    removeElement14 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items15];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items15: array })
        }
    }

    // Duplicates Element from Tab-14
    duplicateElement14 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items15];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items15: array })
    }

    // Recieves Element's data when dropped into Tab-14
    getChildPayload14 = (i) => {
        return (
            this.state.items15[i]
        )
    }

    // Recieves Element when dropped on Tab-14 and Places Element in its correct index 
    onDrop14 = (e) => {
        this.setState({ items15: applyDrag(this.state.items15, e) })
    }

    // Removes Element from Tab-15
    removeElement15 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items16];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items16: array })
        }
    }

    // Duplicates Element from Tab-15
    duplicateElement15 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items16];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items16: array })
    }

    // Recieves Element's data when dropped into Tab-15
    getChildPayload15 = (i) => {
        return (
            this.state.items16[i]
        )
    }

    // Recieves Element when dropped on Tab-15 and Places Element in its correct index 
    onDrop15 = (e) => {
        this.setState({ items16: applyDrag(this.state.items16, e) })
    }

    // Removes Element from Tab-16
    removeElement16 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items17];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items17: array })
        }
    }

    // Duplicates Element from Tab-16
    duplicateElement16 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items17];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items17: array })
    }

    // Recieves Element's data when dropped into Tab-16
    getChildPayload16 = (i) => {
        return (
            this.state.items17[i]
        )
    }

    // Recieves Element when dropped on Tab-16 and Places Element in its correct index 
    onDrop16 = (e) => {
        this.setState({ items17: applyDrag(this.state.items17, e) })
    }

    // Removes Element from Tab-17
    removeElement17 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items18];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items18: array })
        }
    }

    // Duplicates Element from Tab-17
    duplicateElement17 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items18];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items18: array })
    }

    // Recieves Element's data when dropped into Tab-17
    getChildPayload17 = (i) => {
        return (
            this.state.items18[i]
        )
    }

    // Recieves Element when dropped on Tab-17 and Places Element in its correct index 
    onDrop17 = (e) => {
        this.setState({ items18: applyDrag(this.state.items18, e) })
    }

    // Removes Element from Tab-18
    removeElement18 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items19];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items19: array })
        }
    }

    // Duplicates Element from Tab-18
    duplicateElement18 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items19];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items19: array })
    }

    // Recieves Element's data when dropped into Tab-18
    getChildPayload18 = (i) => {
        return (
            this.state.items19[i]
        )
    }

    // Recieves Element when dropped on Tab-18 and Places Element in its correct index 
    onDrop18 = (e) => {
        this.setState({ items19: applyDrag(this.state.items19, e) })
    }

    // Removes Element from Tab-19
    removeElement19 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items20];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items20: array })
        }
    }

    // Duplicates Element from Tab-19
    duplicateElement19 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items20];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items20: array })
    }

    // Recieves Element's data when dropped into Tab-19
    getChildPayload19 = (i) => {
        return (
            this.state.items20[i]
        )
    }

    // Recieves Element when dropped on Tab-19 and Places Element in its correct index 
    onDrop19 = (e) => {
        this.setState({ items20: applyDrag(this.state.items20, e) })
    }

    // Removes Element from Tab-20
    removeElement20 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items21];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        if (array !== -1) {
            array.splice(elementPosition, 1);
            this.setState({ items21: array })
        }
    }

    // Duplicates Element from Tab-20
    duplicateElement20 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
        var array = [...this.state.items21];
        var elementPosition = array.map(function (x) {
            return x.data
        }).indexOf(grandparent.id);
        var element = array.map(function (x) {
            return x
        })
        // element.setAttribute("id", "working")
        array.push(element[elementPosition])
        this.setState({ items21: array })
    }

    // Recieves Element's data when dropped into Tab-20
    getChildPayload20 = (i) => {
        return (
            this.state.items21[i]
        )
    }

    // Recieves Element when dropped on Tab-20 and Places Element in its correct index 
    onDrop20 = (e) => {
        this.setState({ items21: applyDrag(this.state.items21, e) })
    }

    handleSubMenu =(event) => {
        event.preventDefault();
        var subMenu= document.getElementById("home-sub-menu");
        var custom = window.getComputedStyle(subMenu)
        var zu = custom.zIndex
        if (zu === "-1"){
            subMenu.style.zIndex = "1"
        } else {
            subMenu.style.zIndex = "-1"
        }
    }

    render() {
        return (
            <>
                <PDFGenerate
                    userName={this.state.userName}
                    userEmail={this.state.userEmail}
                    dataFromContainer1={this.state.items2}
                    dataFromContainer2={this.state.items3}
                    dataFromContainer3={this.state.items4}
                    dataFromContainer4={this.state.items5}
                    dataFromContainer5={this.state.items6}
                    dataFromContainer6={this.state.items7}
                    dataFromContainer7={this.state.items8}
                    dataFromContainer8={this.state.items9}
                    dataFromContainer9={this.state.items10}
                    dataFromContainer10={this.state.items11}
                    dataFromContainer11={this.state.items12}
                    dataFromContainer12={this.state.items13}
                    dataFromContainer13={this.state.items14}
                    dataFromContainer14={this.state.items15}
                    dataFromContainer15={this.state.items16}
                    dataFromContainer16={this.state.items17}
                    dataFromContainer17={this.state.items18}
                    dataFromContainer18={this.state.items19}
                    dataFromContainer19={this.state.items20}
                    dataFromContainer20={this.state.items21}
                    pageTitles={pageTitles} />

                <SaveButton
                    updateUser={this.updateUser} />

                <FinalizeButton
                    finalize={this.finalize} />

                <div id="tabsContainer">


                    <Tabs
                        activeLinkStyle={styles.activeLinkStyle}
                    >
                        <div id="tab__header">
                            <ul id="homePage">
                                <li className="nav-item" >
                                    <TabLink style={styles.notActive} to="tab1"><span id="firstPage"><span className="pageSpan">{this.state.pageName1}</span></span></TabLink>
                                </li>
                                <li className="nav-item" id="link-2">
                                    <TabLink style={styles.notActive} data-clicks={0} to="tab2">
                                        <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName2}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                        <div id="modal1" className={this.state.isHidden1 ? "hidden" : "visible"}>
                                            <Modal modalClose={this.modalClose}>
                                                <div className="form-group">
                                                    <label>Enter Page Name:</label>
                                                    <input
                                                        type="text"
                                                        name={this.state.pageName2}
                                                        onChange={e => this.handleChange(e)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                        Save
                                                    </span>
                                                </div>
                                            </Modal>
                                        </div>
                                    </TabLink>
                                </li>
                                <li className="nav-item" id="link-3" >
                                    <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab3">
                                        <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName3}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                        <div id="modal2" className={this.state.isHidden2 ? "hidden" : "visible"}>
                                            <Modal modalClose={this.modalClose}>
                                                <div className="form-group">
                                                    <label>Enter Page Name:</label>
                                                    <input
                                                        type="text"
                                                        name={this.state.pageName3}
                                                        onChange={e => this.handleChange(e)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                        Save
                                                    </span>
                                                </div>
                                            </Modal>
                                        </div>
                                    </TabLink>
                                </li>
                                <li className="nav-item" id="link-4" >
                                    <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab4">
                                        <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName4}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                        <div id="modal3" className={this.state.isHidden3 ? "hidden" : "visible"}>
                                            <Modal modalClose={this.modalClose}>
                                                <div className="form-group">
                                                    <label>Enter Page Name:</label>
                                                    <input
                                                        type="text"
                                                        name={this.state.pageName4}
                                                        onChange={e => this.handleChange(e)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                        Save
                                                    </span>
                                                </div>
                                            </Modal>

                                        </div>
                                    </TabLink>
                                </li>
                                <li className="nav-item" id="link-5">
                                    <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab5">
                                        <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName5}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                        <div id="modal4" className={this.state.isHidden4 ? "hidden" : "visible"}>
                                            <Modal modalClose={this.modalClose}>
                                                <div className="form-group">
                                                    <label>Enter Page Name:</label>
                                                    <input
                                                        type="text"
                                                        name={this.state.pageName5}
                                                        onChange={e => this.handleChange(e)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                        Save
                                                    </span>
                                                </div>
                                            </Modal>
                                        </div>
                                    </TabLink>
                                </li>
                                <li className="nav-item" id="link-6" >
                                    <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab6">
                                        <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName6}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                        <div id="modal5" className={this.state.isHidden5 ? "hidden" : "visible"}>
                                            <Modal modalClose={this.modalClose}>
                                                <div className="form-group">
                                                    <label>Enter Page Name:</label>
                                                    <input
                                                        type="text"
                                                        name={this.state.pageName6}
                                                        onChange={e => this.handleChange(e)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                        Save
                                                    </span>
                                                </div>
                                            </Modal>
                                        </div>
                                    </TabLink>
                                </li>
                                <li className="nav-item" id="link-7">
                                    <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab7">
                                        <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName7}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                        <div id="modal6" className={this.state.isHidden6 ? "hidden" : "visible"}>
                                            <Modal modalClose={this.modalClose}>
                                                <div className="form-group">
                                                    <label>Enter Page Name:</label>
                                                    <input
                                                        type="text"
                                                        name={this.state.pageName7}
                                                        onChange={e => this.handleChange(e)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                        Save
                                                    </span>
                                                </div>
                                            </Modal>
                                        </div>
                                    </TabLink>
                                </li>
                                <li className="nav-item" id="link-8">
                                    <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab8">
                                        <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName8}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                        <div id="modal7" className={this.state.isHidden7 ? "hidden" : "visible"}>
                                            <Modal modalClose={this.modalClose}>
                                                <div className="form-group">
                                                    <label>Enter Page Name:</label>
                                                    <input
                                                        type="text"
                                                        name={this.state.pageName8}
                                                        onChange={e => this.handleChange(e)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                        Save
                                                    </span>
                                                </div>
                                            </Modal>
                                        </div>
                                    </TabLink>
                                </li>
                                <li className="nav-item" id="link-9">
                                    <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab9">
                                        <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName9}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                        <div id="modal8" className={this.state.isHidden8 ? "hidden" : "visible"}>
                                            <Modal modalClose={this.modalClose}>
                                                <div className="form-group">
                                                    <label>Enter Page Name:</label>
                                                    <input
                                                        type="text"
                                                        name={this.state.pageName9}
                                                        onChange={e => this.handleChange(e)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                        Save
                                                    </span>
                                                </div>
                                            </Modal>
                                        </div>
                                    </TabLink>
                                </li>
                                <li className="nav-item" id="link-10">
                                    <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab10">
                                        <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName10}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                        <div id="modal9" className={this.state.isHidden9 ? "hidden" : "visible"}>
                                            <Modal modalClose={this.modalClose}>
                                                <div className="form-group">
                                                    <label>Enter Page Name:</label>
                                                    <input
                                                        type="text"
                                                        name={this.state.pageName10}
                                                        onChange={e => this.handleChange(e)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                        Save
                                                    </span>
                                                </div>
                                            </Modal>
                                        </div>
                                    </TabLink>
                                </li>
                                <button onClick={this.handleSubMenu} id="sub-menu-btn" className="btn"><i className="far fa-caret-square-down"></i></button>
                                <ul id="home-sub-menu" className="sub-menu">
                                    
                                    <li className="nav-item" id="link-11">
                                        <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab11">
                                            <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName11}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                            <div id="modal10" className={this.state.isHidden10 ? "hidden" : "visible"}>
                                                <Modal modalClose={this.modalClose}>
                                                    <div className="form-group">
                                                        <label>Enter Page Name:</label>
                                                        <input
                                                            type="text"
                                                            name={this.state.pageName11}
                                                            onChange={e => this.handleChange(e)}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                            Save
                                                        </span>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </TabLink>
                                    </li>
                                    <li className="nav-item" id="link-12">
                                        <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab12">
                                            <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName12}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                            <div id="modal11" className={this.state.isHidden11 ? "hidden" : "visible"}>
                                                <Modal modalClose={this.modalClose}>
                                                    <div className="form-group">
                                                        <label>Enter Page Name:</label>
                                                        <input
                                                            type="text"
                                                            name={this.state.pageName12}
                                                            onChange={e => this.handleChange(e)}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                            Save
                                                        </span>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </TabLink>
                                    </li>
                                    <li className="nav-item" id="link-13">
                                        <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab13">
                                            <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName13}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                            <div id="modal12" className={this.state.isHidden12 ? "hidden" : "visible"}>
                                                <Modal modalClose={this.modalClose}>
                                                    <div className="form-group">
                                                        <label>Enter Page Name:</label>
                                                        <input
                                                            type="text"
                                                            name={this.state.pageName13}
                                                            onChange={e => this.handleChange(e)}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                            Save
                                                        </span>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </TabLink>
                                    </li>
                                    <li className="nav-item" id="link-14">
                                        <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab14">
                                            <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName14}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                            <div id="modal13" className={this.state.isHidden13 ? "hidden" : "visible"}>
                                                <Modal modalClose={this.modalClose}>
                                                    <div className="form-group">
                                                        <label>Enter Page Name:</label>
                                                        <input
                                                            type="text"
                                                            name={this.state.pageName14}
                                                            onChange={e => this.handleChange(e)}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                            Save
                                                        </span>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </TabLink>
                                    </li>
                                    <li className="nav-item" id="link-15">
                                        <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab15">
                                            <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName15}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                            <div id="modal14" className={this.state.isHidden14 ? "hidden" : "visible"}>
                                                <Modal modalClose={this.modalClose}>
                                                    <div className="form-group">
                                                        <label>Enter Page Name:</label>
                                                        <input
                                                            type="text"
                                                            name={this.state.pageName15}
                                                            onChange={e => this.handleChange(e)}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                            Save
                                                        </span>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </TabLink>
                                    </li>
                                    <li className="nav-item" id="link-16">
                                        <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab16">
                                            <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName16}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                            <div id="modal15" className={this.state.isHidden15 ? "hidden" : "visible"}>
                                                <Modal modalClose={this.modalClose}>
                                                    <div className="form-group">
                                                        <label>Enter Page Name:</label>
                                                        <input
                                                            type="text"
                                                            name={this.state.pageName16}
                                                            onChange={e => this.handleChange(e)}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                            Save
                                                        </span>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </TabLink>
                                    </li>
                                    <li className="nav-item" id="link-17">
                                        <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab17">
                                            <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName17}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                            <div id="modal16" className={this.state.isHidden16 ? "hidden" : "visible"}>
                                                <Modal modalClose={this.modalClose}>
                                                    <div className="form-group">
                                                        <label>Enter Page Name:</label>
                                                        <input
                                                            type="text"
                                                            name={this.state.pageName17}
                                                            onChange={e => this.handleChange(e)}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                            Save
                                                        </span>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </TabLink>
                                    </li>
                                    <li className="nav-item" id="link-18">
                                        <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab18">
                                            <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName18}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                            <div id="modal17" className={this.state.isHidden17 ? "hidden" : "visible"}>
                                                <Modal modalClose={this.modalClose}>
                                                    <div className="form-group">
                                                        <label>Enter Page Name:</label>
                                                        <input
                                                            type="text"
                                                            name={this.state.pageName18}
                                                            onChange={e => this.handleChange(e)}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                            Save
                                                        </span>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </TabLink>
                                    </li>
                                    <li className="nav-item" id="link-19">
                                        <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab19">
                                            <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName19}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                            <div id="modal18" className={this.state.isHidden17 ? "hidden" : "visible"}>
                                                <Modal modalClose={this.modalClose}>
                                                    <div className="form-group">
                                                        <label>Enter Page Name:</label>
                                                        <input
                                                            type="text"
                                                            name={this.state.pageName19}
                                                            onChange={e => this.handleChange(e)}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                            Save
                                                        </span>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </TabLink>
                                    </li>
                                    <li className="nav-item" id="link-20">
                                        <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab20">
                                            <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName20}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                            <div id="modal19" className={this.state.isHidden17 ? "hidden" : "visible"}>
                                                <Modal modalClose={this.modalClose}>
                                                    <div className="form-group">
                                                        <label>Enter Page Name:</label>
                                                        <input
                                                            type="text"
                                                            name={this.state.pageName20}
                                                            onChange={e => this.handleChange(e)}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <span className="btn form-btn" type="button" onClick={this.handleSubmit}>
                                                            Save
                                                        </span>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </TabLink>
                                    </li>
                                </ul>
                            </ul>
                        </div>


                        <TabContent for="tab1">
                            <Container1
                                onDrop={this.onDrop1}
                                getChildPayload={this.getChildPayload1}
                                generateItems={this.state.items2}
                                removeElement={this.removeElement1}
                                duplicateElement={this.duplicateElement1}
                                userEmail={this.state.userEmail}
                                getDuplicates={this.getDuplicates}
                                passUp={this.passUp}
                            />
                        </TabContent>
                        <TabContent for="tab2">
                            <Container2
                                onDrop={this.onDrop2}
                                getChildPayload={this.getChildPayload2}
                                generateItems={this.state.items3}
                                removeElement={this.removeElement2}
                                duplicateElement={this.duplicateElement2}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab3">
                            <Container3
                                onDrop={this.onDrop3}
                                getChildPayload={this.getChildPayload3}
                                generateItems={this.state.items4}
                                removeElement={this.removeElement3}
                                duplicateElement={this.duplicateElement3}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab4">
                            <Container4
                                onDrop={this.onDrop4}
                                getChildPayload={this.getChildPayload4}
                                generateItems={this.state.items5}
                                removeElement={this.removeElement4}
                                duplicateElement={this.duplicateElement4}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab5">
                            <Container5
                                onDrop={this.onDrop5}
                                getChildPayload={this.getChildPayload5}
                                generateItems={this.state.items6}
                                removeElement={this.removeElement5}
                                duplicateElement={this.duplicateElement5}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab6">
                            <Container6
                                onDrop={this.onDrop6}
                                getChildPayload={this.getChildPayload6}
                                generateItems={this.state.items7}
                                removeElement={this.removeElement6}
                                duplicateElement={this.duplicateElement6}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab7">
                            <Container7
                                onDrop={this.onDrop7}
                                getChildPayload={this.getChildPayload7}
                                generateItems={this.state.items8}
                                removeElement={this.removeElement7}
                                duplicateElement={this.duplicateElement7}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab8">
                            <Container8
                                onDrop={this.onDrop8}
                                getChildPayload={this.getChildPayload8}
                                generateItems={this.state.items9}
                                removeElement={this.removeElement8}
                                duplicateElement={this.duplicateElement8}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab9">
                            <Container9
                                onDrop={this.onDrop9}
                                getChildPayload={this.getChildPayload9}
                                generateItems={this.state.items10}
                                removeElement={this.removeElement9}
                                duplicateElement={this.duplicateElement9}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab10">
                            <Container10
                                onDrop={this.onDrop10}
                                getChildPayload={this.getChildPayload10}
                                generateItems={this.state.items11}
                                removeElement={this.removeElement10}
                                duplicateElement={this.duplicateElement10}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab11">
                            <Container11
                                onDrop={this.onDrop11}
                                getChildPayload={this.getChildPayload11}
                                generateItems={this.state.items12}
                                removeElement={this.removeElement11}
                                duplicateElement={this.duplicateElement11}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab12">
                            <Container12
                                onDrop={this.onDrop12}
                                getChildPayload={this.getChildPayload12}
                                generateItems={this.state.items13}
                                removeElement={this.removeElement12}
                                duplicateElement={this.duplicateElement12}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab13">
                            <Container13
                                onDrop={this.onDrop13}
                                getChildPayload={this.getChildPayload13}
                                generateItems={this.state.items14}
                                removeElement={this.removeElement13}
                                duplicateElement={this.duplicateElement13}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab14">
                            <Container14
                                onDrop={this.onDrop14}
                                getChildPayload={this.getChildPayload14}
                                generateItems={this.state.items15}
                                removeElement={this.removeElement14}
                                duplicateElement={this.duplicateElement14}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab15">
                            <Container15
                                onDrop={this.onDrop15}
                                getChildPayload={this.getChildPayload15}
                                generateItems={this.state.items16}
                                removeElement={this.removeElement15}
                                duplicateElement={this.duplicateElement15}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab16">
                            <Container16
                                onDrop={this.onDrop16}
                                getChildPayload={this.getChildPayload16}
                                generateItems={this.state.items17}
                                removeElement={this.removeElement16}
                                duplicateElement={this.duplicateElement16}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab17">
                            <Container17
                                onDrop={this.onDrop17}
                                getChildPayload={this.getChildPayload17}
                                generateItems={this.state.items18}
                                removeElement={this.removeElement17}
                                duplicateElement={this.duplicateElement17}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab18">
                            <Container18
                                onDrop={this.onDrop18}
                                getChildPayload={this.getChildPayload18}
                                generateItems={this.state.items19}
                                removeElement={this.removeElement18}
                                duplicateElement={this.duplicateElement18}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab19">
                            <Container19
                                onDrop={this.onDrop19}
                                getChildPayload={this.getChildPayload19}
                                generateItems={this.state.items20}
                                removeElement={this.removeElement19}
                                duplicateElement={this.duplicateElement19}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                        <TabContent for="tab20">
                            <Container20
                                onDrop={this.onDrop20}
                                getChildPayload={this.getChildPayload20}
                                generateItems={this.state.items21}
                                removeElement={this.removeElement20}
                                duplicateElement={this.duplicateElement20}
                                userEmail={this.state.userEmail}
                            />
                        </TabContent>
                    </Tabs>


                </div>
            </>
        );
    }
}

export default ContainerTabs;




