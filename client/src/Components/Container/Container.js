import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import XButton from "../XButton/XButton"
import DuplicateButton from "../Duplicate-Button/Duplicate-Button"
import HeaderCheck from "../Header-Check/Header-Check"




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

    editText(event){
        event.preventDefault();
        console.log(event.target.textContent);
        var content = event.target.textContent;
        
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
                            return (
                                <Draggable key={i}>
                                    <div id={p.data} className="draggable-item">
                                        <HeaderCheck editText={this.editText} items2={this.props.items2}/>
                                        <DuplicateButton duplicateElement={this.props.duplicateElement}/>
                                        <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                    </div>
                                </Draggable>
                            );
                        })
                    }
                </Container>
            </>


        );
    }
}


export default Container1;