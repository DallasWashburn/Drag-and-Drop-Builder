import React, { Component } from "react"
import "./Content0.css"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Content0 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heading: "Cybermark Wireframe",
            copy:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            imgSrc:"https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png"

        }

    }
    render(){
        return (


            <div className="section_wrapper">
            <div className="container content1">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img className="image-border" src={this.state.imgSrc} alt="" height="300px" width="100%"/>
                        <ImageButton getImage={this.props.getImage}/>
                    </div>
                    <div className="col-md-6">
                        <h3>
                            <InlineEdit 
                                text={this.state.heading}
                                onSetText={(text) => {
                                    this.setState({heading:text})
                                }
                                }
                            />
                            </h3>
                        <p> <InlineEdit 
                                text={this.state.copy}
                                onSetText={(text) => {
                                this.setState({copy:text})
                                }
                            }
                            /></p>
                    </div>
    
                </div>
            </div>
        </div>
        )
    }
}


export default Content0