import React, { Component } from "react"
import "./Content0.css"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Content0 extends Component {
    render(){
        return (


            <div className="section_wrapper">
            <div className="container content1">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img className="image-border" src={this.props.content0Image} alt="" height="300px" width="100%"/>
                        <ImageButton getImage={this.props.getImage}/>
                    </div>
                    <div className="col-md-6">
                        <h3>
                            <InlineEdit 
                                text={this.props.content0Heading}
                                onSetText={(text) => {
                                    this.props.getContentInfo(text)
                                }
                                }
                            />
                            </h3>
                        <p> <InlineEdit 
                                text={this.props.content0Text}
                                onSetText={(text) => {
                                    this.props.getContentInfo(undefined, text)
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