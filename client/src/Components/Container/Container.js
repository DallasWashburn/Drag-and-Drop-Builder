import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import XButton from "../XButton/XButton"
import DuplicateButton from "../Duplicate-Button/Duplicate-Button"
import HeaderCheck from "../Header-Check/Header-Check"
import Header0 from "../Headers/Header0/Header0"
import Header1 from "../Headers/Header1/Header1"
import Header2 from "../Headers/Header2/Header2"
import Header3 from "../Headers/Header3/Header3"
import Intro0 from "../Intros/Intro0/Intro0"




class Container1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
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

    renderSwitch(id , index){
        switch(id){
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
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-1") {
                                return (
                                <Draggable key={i}>
                                    <div id={p.data} className="draggable-item">
                                        <Header1 />
                                    </div>
                                </Draggable>
                                )
                            } else if (p.data === "Header-2") {
                                return (
                                <Draggable key={i}>
                                    <div id={p.data} className="draggable-item">
                                        <Header2 />
                                    </div>
                                </Draggable>
                                )
                            }  else if (p.data === "Header-3") {
                                return (
                                <Draggable key={i}>
                                    <div id={p.data} className="draggable-item">
                                        <Header3 />
                                    </div>
                                </Draggable>
                                )
                            }  else if (p.data === "Intro-0") {
                                return (
                                <Draggable key={i}>
                                    <div id={p.data} className="draggable-item">
                                        <Intro0 />
                                    </div>
                                </Draggable>
                                )
                            }  else {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
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
