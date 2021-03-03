import React, { Component } from "react"
import "./Content2.css"
import InlineEdit from "../../inlineEdit"


class Content2 extends Component {
    render() {
        return (
            <div class="section_wrapper">
                <div class="container content3">
                    <div class="row">
                        <div class="col text-center">
                            <h3>
                                <InlineEdit
                                    text={this.props.content2Heading}
                                    onSetText={(text) => {
                                        this.props.getContentInfo(undefined, undefined, undefined, undefined, undefined, undefined, text)
                                    }
                                    }
                                />
                            </h3>
                            <p>
                                <InlineEdit
                                    text={this.props.content2Text}
                                    onSetText={(text) => {
                                        this.props.getContentInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)
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


export default Content2