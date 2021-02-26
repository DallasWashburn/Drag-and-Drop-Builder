import React, { Component } from "react"
import "./Content0.css"
import InlineEdit from "../../inlineEdit"

class Content0 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heading: "Cybermark Wireframe",
            copy:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!"

        }
    }
    render(){
        return (
            <div class="section_wrapper">
            <div class="container content1">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img className="image-border" src="https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png" alt="" height="300px" width="100%"/>
                    </div>
                    <div class="col-md-6">
                        <h3>
                            <InlineEdit 
                                text={this.state.heading}
                                onSetText={text => this.setState({heading:text})}
                            />
                            </h3>
                        <p> <InlineEdit 
                                text={this.state.copy}
                                onSetText={text => this.setState({copy:text})}
                            /></p>
                    </div>
    
                </div>
            </div>
        </div>
        )
    }
}


export default Content0