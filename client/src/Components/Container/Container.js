import React, { Component } from 'react';
import API from '../../utils/API';
import { Container, Draggable } from 'react-smooth-dnd';
import XButton from "../XButton/XButton"
import DuplicateButton from "../Duplicate-Button/Duplicate-Button"
import Header0 from "../Headers/Header0/Header0"
import Header1 from "../Headers/Header1/Header1"
import Header2 from "../Headers/Header2/Header2"
import Header3 from "../Headers/Header3/Header3"
import Intro0 from "../Intros/Intro0/Intro0"
import Intro1 from "../Intros/Intro1/Intro1"
import Intro2 from "../Intros/Intro2/Intro2"
import Intro3 from "../Intros/Intro3/Intro3"
import Intro4 from "../Intros/Intro4/Intro4"
import Content0 from "../Content/Content0/Content0"
import Content1 from "../Content/Content1/Content1"
import Content2 from "../Content/Content2/Content2"
import Gallery0 from "../Gallery/Gallery0/Gallery0"
import Gallery1 from "../Gallery/Gallery1/Gallery1"
import Gallery3 from "../Gallery/Gallery3/Gallery3"
import EditButton from "../Edit-Button/Edit-Button"










class Container1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }


    handleSave = (event) => {

        let project = {
            name: this.props.user,
            email: this.props.email,
            projects: this.props.items2,
            date: Date.now()
        }

        API.saveUser(project)

    }

    handleXButton(event, id) {
        event.stopPropagation();
        event.preventDefault();

        const noScroll = () => {
            window.scrollTo(0, 0);
        }

        window.addEventListener("scroll", noScroll)
        const selectedDiv = event.target.parentElement;
        let parentDiv = selectedDiv.parentElement;
        console.log(parentDiv.id);
        parentDiv.remove();
        window.removeEventListener('scroll', noScroll);
    }

    editText(event) {
        event.preventDefault();
        console.log(event.target.textContent);
        var content = event.target.textContent;

    }

    renderSwitch(id, index) {
        switch (id) {
            case "Header-0":
                return <Draggable key={index}><div id={id} className="draggable-item"><Header0 /></div></Draggable>;
            default:
                return <Draggable key={index}><div id={id} className="draggable-item"><Header1 /></div></Draggable>;
        }
    }



    render() {
        return (
            <>
                <Container dragClass="opacity-ghost" dropClass="opacity-ghost-drop" id="dropZone" groupName="1" getChildPayload={this.props.getChildPayload} onDrop={this.props.onDrop}
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}>
                    {
                        this.props.generateItems.map((p, i) => {
                            if (p.data === "Header-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header0 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header1 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-2") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header2 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-3") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header3 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro0 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro1 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-2") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro2 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-3") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro3 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-4") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro4 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item" data-element={p.data}>
                                            <Content0 h3Heading={this.props.h3Heading} pFirst={this.props.pFirst}/>
                                            <div className="button-wrap">
                                                <EditButton data={p.data} openEdit={this.props.openEdit} getElements={this.getElements} />
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content1 />
                                            <div className="button-wrap">
                                                <EditButton data={p.data} openEdit={this.props.openEdit} getElements={this.getElements} />

                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-2") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content2 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Gallery-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Gallery0 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Gallery-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Gallery1 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Gallery-3") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Gallery3 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                            <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                        </div>
                                    </Draggable>
                                );
                            }

                        })
                    }
                </Container>
            </>


        );
    }
}


export default Container1;


// var id = p.data
// switch(id){
//     case "Header-0":<Draggable key={i}><div id={p.data} className="draggable-item"><Header2 /></div><Draggable>;
//     break;

// }
