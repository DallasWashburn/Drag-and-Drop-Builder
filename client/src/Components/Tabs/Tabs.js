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
import Modal from "../Modal/Modal"
import { applyDrag, generateItems } from '../../utils';
import PDFGenerate from "../PDF-Generate/PDF-Generate"
import SaveButton from "../Save-Button/Save-Button"
import ProfileButton from "../Profile-Button/Profile-Button"
var pageTitles = ["Home Page"]

const styles = {
    activeLinkStyle: {
        backgroundColor: "#fff",
        color: "#3c3c3c",
        borderRight:"none"
    },

    notActive: {
        backgroundColor:"#b2b2b2",
        color:"#FFF"
    }
}


class ContainerTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {

            name: this.props.name,
            userEmail: this.props.email,
            userId:this.props.userId,
            items2: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 2 - ${i}` })),
            items3: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 3 - ${i}` })),
            items4: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 4 - ${i}` })),
            items5: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 5 - ${i}` })),
            items6: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 6 - ${i}` })),
            items7: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 7 - ${i}` })),
            items8: generateItems(0, (i) => ({ id: '1' + i, data: `Draggable 8 - ${i}` })),
            pageName1:"Home Page",
            pageName2: "+",
            pageName3: "+",
            pageName4: "+",
            pageName5: "+",
            pageName6: "+",
            pageName7: "+",
            isHidden1: true,
            isHidden2: true,
            isHidden3: true,
            isHidden4: true,
            isHidden5: true,
            isHidden6: true,
            dbId:this.props.dbId,
            h3Heading:"",
            copy1:""
        }
    }

    componentDidMount(){
        this.getProject()
        window.addEventListener("beforeunload", this.onUnload)
    }

    componentWillUnmount(){
        window.removeEventListener("beforeunload", this.onUnload)
    }

    handleSave = (event) => {
        var nameOfPage1= {id:"pageName1", data:this.state.pageName1}
        var nameOfPage2= {id:"pageName2", data:this.state.pageName2}
        var nameOfPage3= {id:"pageName3", data:this.state.pageName3}
        var nameOfPage4= {id:"pageName4", data:this.state.pageName4}
        var nameOfPage5= {id:"pageName5", data:this.state.pageName5}
        var nameOfPage6= {id:"pageName6", data:this.state.pageName6}
        var nameOfPage7= {id:"pageName7", data:this.state.pageName7}



        var allPages = [nameOfPage1, this.state.items2, nameOfPage2, this.state.items3, nameOfPage3, this.state.items4, nameOfPage4, this.state.items5, nameOfPage5, this.state.items6, nameOfPage6, this.state.items7, nameOfPage7, this.state.items8]

        let project = {
            userId:this.state.userId,
            userEmail: this.state.email,
            projects: allPages
        }



        API.saveUser(project)

    }

    onUnload = (event) => {
        event.preventDefault();
        event.returnValue ='';
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
                            items8: Page7
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
    }


    updateUser = () => {
        var nameOfPage1= {id:"pageName1", data:this.state.pageName1}
        var nameOfPage2= {id:"pageName2", data:this.state.pageName2}
        var nameOfPage3= {id:"pageName3", data:this.state.pageName3}
        var nameOfPage4= {id:"pageName4", data:this.state.pageName4}
        var nameOfPage5= {id:"pageName5", data:this.state.pageName5}
        var nameOfPage6= {id:"pageName6", data:this.state.pageName6}
        var nameOfPage7= {id:"pageName7", data:this.state.pageName7}

        var allPages = [nameOfPage1, this.state.items2, nameOfPage2, this.state.items3, nameOfPage3, this.state.items4, nameOfPage4, this.state.items5, nameOfPage5, this.state.items6, nameOfPage6, this.state.items7, nameOfPage7, this.state.items8]

        API.updateUser(this.props.dbId, allPages)

        window.alert("Thank you, Your Project Has Been Saved")

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

    }

    modalClose = (event) => {
        event.preventDefault();
        let modalTab = event.target.parentElement.parentElement.parentElement.parentElement
        modalTab.dataset.clicks = 0;
        if(modalTab.id === "tab-tab2"){
            var previous = document.getElementById("tab-tab2");
            previous.setAttribute("aria-selected", "false");
            previous.classList.remove("tab-link-active")
            modalTab.setAttribute("aria-selected", "true");
            modalTab.classList.add("tab-content-visible")
            this.setState({ 
                isHidden1: true,
                pageName2: "+"
             })
        } else if (modalTab.id === "tab-tab3"){
            this.setState({
                isHidden2:true,
                pageName3: "+"
            })
        } else if (modalTab.id === "tab-tab4"){
            this.setState({isHidden3:true})
        }  else if (modalTab.id === "tab-tab5"){
            this.setState({isHidden4:true})
        }  else if (modalTab.id === "tab-tab6"){
            this.setState({isHidden5:true})
        } else if (modalTab.id === "tab-tab7"){
            this.setState({isHidden6:true})
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


        if (oneINeed.id == "tab-tab2" && oneINeed.dataset.clicks == 1 && this.state.pageName2.length > 1) {
            pageTitles.push(this.state.pageName2)
            var link3 = document.getElementById("link-3")
            link3.style.visibility = "visible"
        }else if (oneINeed.id == "tab-tab2" && oneINeed.dataset.clicks == 1 && this.state.pageName2.length === 1) {
            this.setState({
                pageName2: "Page 2"
            });
            pageTitles.push(this.state.pageName2)
            var link3Next = document.getElementById("link-3")
            link3Next.style.visibility = "visible"
        }

        if (oneINeed.id == "tab-tab3" && oneINeed.dataset.clicks == 1 && this.state.pageName3.length > 1) {
            pageTitles.push(this.state.pageName3)
            var link4 = document.getElementById("link-4")
            link4.style.visibility = "visible"
        } else if (oneINeed.id == "tab-tab3" && oneINeed.dataset.clicks == 1 && this.state.pageName3.length === 1) {
            this.setState({
                pageName3: "Page 3"
            });
            pageTitles.push(this.state.pageName3)
            var link4Next = document.getElementById("link-4")
            link4Next.style.visibility = "visible"
        }

        if (oneINeed.id == "tab-tab4" && oneINeed.dataset.clicks == 1 && this.state.pageName4.length > 1) {
            pageTitles.push(this.state.pageName4)
            var link5 = document.getElementById("link-5")
            link5.style.visibility = "visible"
        } else if (oneINeed.id == "tab-tab4" && oneINeed.dataset.clicks == 1 && this.state.pageName4.length === 1) {
            this.setState({
                pageName4: "Page 4"
            });
            pageTitles.push(this.state.pageName4)
            var link5Next = document.getElementById("link-5")
            link5Next.style.visibility = "visible"
        }

        if (oneINeed.id == "tab-tab5" && oneINeed.dataset.clicks == 1 && this.state.pageName5.length > 1) {
            pageTitles.push(this.state.pageName5)
            var link6 = document.getElementById("link-6")
            link6.style.visibility = "visible"
        } else if (oneINeed.id == "tab-tab5" && oneINeed.dataset.clicks == 1 && this.state.pageName5.length === 1) {
            this.setState({
                pageName5: "Page 5"
            });
            pageTitles.push(this.state.pageName5)
            var link6Next = document.getElementById("link-6")
            link6Next.style.visibility = "visible"
        }

        if (oneINeed.id == "tab-tab6" && oneINeed.dataset.clicks == 1 && this.state.pageName6.length > 1) {
            pageTitles.push(this.state.pageName6)
            var link7 = document.getElementById("link-7")
            link7.style.visibility = "visible"
        } else if (oneINeed.id == "tab-tab6" && oneINeed.dataset.clicks == 1 && this.state.pageName6.length === 1) {
            this.setState({
                pageName6: "Page 6"
            });
            pageTitles.push(this.state.pageName6)
            var link7Next = document.getElementById("link-7")
            link7Next.style.visibility = "visible"
        }

        if (oneINeed.id == "tab-tab7" && oneINeed.dataset.clicks == 1 && this.state.pageName7.length > 1) {
            pageTitles.push(this.state.pageName6)
        } else if (oneINeed.id == "tab-tab7" && oneINeed.dataset.clicks == 1 && this.state.pageName7.length === 1) {
            this.setState({
                pageName7: "Page 7"
            });
            pageTitles.push(this.state.pageName6)
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
    }

    //  Opens the modal for corresponding tab 

    modalOpen = (event) => {

        // this.toggleHidden();
        var element = event.target
        var parent = element.parentElement;
        if (parent.id === "tab-tab2" && parent.dataset.clicks === "0" && element.textContent.length > 1) {
            parent.setAttribute("data-clicks", 1)
            this.setState({ isHidden1: false })
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

    }
    // Deletes tab and array 
    deleteTab = (event) => {
        var tab = event.target.parentElement.parentElement
        if (tab.id === "tab-tab2") {
            this.setState({ pageName2: "" })
            document.getElementById("tabpanel-tab2").remove()

        }
        if (tab.id === "tab-tab3") {

        }
        if (tab.id === "tab-tab4") {

        }
        if (tab.id === "tab-tab5") {

        }
        if (tab.id === "tab-tab6") {

        }
        if (tab.id === "tab-tab7") {

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
            tabX.style.marginLeft ="auto"
        } else {
            return
        }
    }


    // Removes Element from Tab-1
    removeElement1 = (event) => {
        var parentDiv = event.target.parentElement;
        var grandparent = parentDiv.parentElement.parentElement;
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
        var grandparent = parentDiv.parentElement;
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
        var grandparent = parentDiv.parentElement;
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
        var grandparent = parentDiv.parentElement;
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
        var grandparent = parentDiv.parentElement;
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
        var grandparent = parentDiv.parentElement;
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
        var grandparent = parentDiv.parentElement;
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



    render() {
        return (
            <>
                <div id="tabsContainer">
                    <div id="webBox"></div>
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
                        pageTitles={pageTitles} />
                    <br />
                    <SaveButton
                        userName={this.state.userName}
                        userEmail={this.state.userEmail}
                        items2={this.state.items}
                        updateUser={this.updateUser}
                        />
                    {/* <ProfileButton 
                        getUsers={this.getUsers}
                        userEmail={this.state.userEmail}
                        getId={this.props.getId}
                        dbId={this.state.dbId}
                    /> */}
                    <Tabs
                        activeLinkStyle={styles.activeLinkStyle}
                    >
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
                            <li className="nav-item" id="link-5">
                                <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab5">
                                    <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName5}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                    <div id="modal4" className={this.state.isHidden4 ? "hidden" : "visible"}>
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
                            <li className="nav-item" id="link-6" >
                                <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab6">
                                    <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName6}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                    <div id="modal5" className={this.state.isHidden5 ? "hidden" : "visible"}>
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
                            <li className="nav-item" id="link-7">
                                <TabLink style={styles.notActive} data-clicks={0} onClick={this.modalOpen} to="tab7">
                                    <span className="pageSpan" onMouseOver={this.checkPageTitle} onClick={this.modalOpen}>{this.state.pageName7}<span className="tabX" onClick={this.deleteTab}>X</span> </span>

                                    <div id="modal6" className={this.state.isHidden6 ? "hidden" : "visible"}>
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
                        </ul>



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
                                onDrop={this.onDrop}
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
                    </Tabs>


                </div>
            </>
        );
    }
}

export default ContainerTabs;




