import React, { Component } from "react";
import "./Toggle-Button.css"
import API from "../../utils/API"

class ToggleButton extends Component {
    state = {
        checked: false
    }


    setToggle = () => {
        this.setState({ checked: !this.state.checked })
        API.updateUserDesignStatus(this.props.toggleId, this.state.checked)
       
    }


    render() {
        return (
            <>
                <input
                    checked={this.props.isOn}
                    onChange={this.setToggle}
                    className="react-switch-checkbox"
                    id={this.props.toggleId}
                    type="checkbox"
                />
                <label
                    style={{ background: this.props.isOn && this.props.onColor }}
                    className="react-switch-label"
                    htmlFor={this.props.toggleId}
                >
                    <span className={`react-switch-button`} />
                </label>
            </>
        );
    }
}

export default ToggleButton;