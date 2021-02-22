import React from "react";
import "./Save-Button.css"

const SaveButton = (props) => {
  return <button onClick={props.handleSave} className="btn saveButton" >Save</button>;
};

export default SaveButton;