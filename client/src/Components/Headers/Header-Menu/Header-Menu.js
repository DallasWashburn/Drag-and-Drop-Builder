import React, { Component } from "react";
import "./Header-Menu.css"
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from '../../../utils';

class HeaderMenu extends Component {
    constructor() {
        super();

        this.state = {
            items1: generateItems(4, (i) => ({ id: '1' + i, data: `Header-${i}`, info:"" })),
        }
    }

    render() {
        return (
            <>
                

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne"  data-parent="#accordionHeader">
                        <Container id="ContactMenu" dragClass="opacity-ghost" dropClass="opacity-ghost-drop" groupName="1" behaviour="copy" getChildPayload={i => this.state.items1[i]} onDrop={e => this.setState({ items1: applyDrag(this.state.items1, e) })}
                            dropPlaceholder={{
                                animationDuration: 150,
                                showOnTop: true,
                                className: 'drop-preview'
                            }}
                            dropPlaceholderAnimationDuration={200}>
                            {
                                this.state.items1.map((p, i) => {
                                    // console.log(i);

                                    return (
                                        <Draggable key={i}>
                                            <div className="text-center data-title">{p.data}</div>
                                            <div id={p.data} className="draggable-item">
                                            {p.info}
                                            </div>
                                        </Draggable>
                                    );
                                    
                                })
                            }
                        </Container>
                    </div>

                
            </>
        )
    }
}

export default HeaderMenu


