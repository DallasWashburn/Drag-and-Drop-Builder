import React, { Component } from "react";
import "./Toggle-Button.css"
import API from "../../utils/API"

class ToggleButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.checked

        }
    }

    setToggle = (event) => {
        console.log(event.target.dataset.check)
        if (event.target.dataset.check === "design") {
            console.log("design");
            this.setState({ checked: !this.state.checked }, () => {
            API.updateUserDesignStatus(this.props.toggleId, this.state.checked)
            })
        } else {
            console.log(this.props.toggleId);
            var toggleIdBefore = this.props.toggleId
            var toggleIdAfter = toggleIdBefore.split(" ")[0];
            console.log(toggleIdAfter);
            this.setState({ checked: !this.state.checked }, () => {
            API.updateUserStatus(toggleIdAfter, this.state.checked)
            })
        }

    }


    render() {
        return (
            <>
                <input
                    checked={this.state.checked}
                    onChange={this.setToggle}
                    className="react-switch-checkbox"
                    id={this.props.toggleId}
                    type="checkbox"
                    data-check={this.props.dataCheck}
                />
                <label
                    style={{ background: this.state.checked && this.props.onColor }}
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