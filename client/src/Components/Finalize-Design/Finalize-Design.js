import React, { Component } from "react";

class FinalizeDesign extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggled: false
        }
    }

    handleOnChange = () => {

    }
    

    render() {
        return (
            <>
            <button onClick={() => {this.props.finalizeDesign(this.props.id)}}>Finalize Design</button>

          </>
          );
    }
}

export default FinalizeDesign;