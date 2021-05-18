import React, { Component } from "react"
import "./Content2.css"
import InlineEdit from "../../inlineEdit"


class Content2 extends Component {
    render() {
        return (
            <section className="content_1 section__wrapper">
                <div className="container">
                    <div className="section__container text-center">
                        <div className="section__content">
                            <h2><InlineEdit text={this.props.content2Heading} onSetText={text => this.props.getContentInfo(undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h2>
                            <h3><InlineEdit text={this.props.content2SubHeading} onSetText={text => this.props.getContentInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h3>
                            <p><InlineEdit text={this.props.content2Text} onSetText={text => this.props.getContentInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Content2