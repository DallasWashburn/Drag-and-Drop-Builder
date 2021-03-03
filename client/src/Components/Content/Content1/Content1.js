import React, { Component } from "react"
import "./Content1.css"
import InlineEdit from "../../inlineEdit"


class Content1 extends Component {
    render() {
        return (
            <div class="section_wrapper">
                <div class="container content2">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h3>
                                <InlineEdit
                                    text={this.props.content1Heading}
                                    onSetText={(text) => {
                                        this.props.getContentInfo(undefined,undefined,undefined,text)
                                    }
                                    }
                                /></h3>
                            <p>
                                <InlineEdit
                                    text={this.props.content1Text}
                                    onSetText={(text) => {
                                        this.props.getContentInfo(undefined,undefined,undefined,undefined,text)
                                    }
                                    }
                                /></p>
                        </div>
                        <div class="col-md-6">
                            <img class="image-border" src={this.props.content1Image} alt="" height="300px" width="100%" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default Content1