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
import Modal from "../Modal/Modal"
import { applyDrag, generateItems } from '../../utils';
import PDFGenerate from "../PDF-Generate/PDF-Generate"
import SaveButton from "../Save-Button/Save-Button"
import ProfileButton from "../Profile-Button/Profile-Button"
import Tooltip from "../Tooltip/Tooltip"
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
            dbId: this.props.dbId,
            h3Heading: "",
            copy1: "",
            final: false
        }
    }


    componentDidMount() {
        this.getProject()
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
                            items11: Page10
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
            var link10New = document.getElementById("link-10")
            var link10Child = link10New.childNodes[0]
            link10Child.setAttribute("data-clicks", 1);
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

        var allPages = [nameOfPage1, this.state.items2, nameOfPage2, this.state.items3, nameOfPage3, this.state.items4, nameOfPage4, this.state.items5, nameOfPage5, this.state.items6, nameOfPage6, this.state.items7, nameOfPage7, this.state.items8, nameOfPage8, this.state.items9, nameOfPage9, this.state.items10, nameOfPage10, this.state.items11]

        API.updateUser(this.props.dbId, allPages)

        window.alert("Thank you, Your Project Has Been Saved")

    }


    finalize = (event) => {
        event.preventDefault()
        // console.log("finalize working");
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
            this.setState({ items10: array })
        }
    }

    // Duplicates Element from Tab-9
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
                    </Tabs>


                </div>
            </>
        );
    }
}

export default ContainerTabs;




