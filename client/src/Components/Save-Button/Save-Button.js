import React from "react";
import "./Save-Button.css"

const SaveButton = (props) => {
  return <button onClick={props.updateUser} className=" saveButton" >Save</button>;
};

export default SaveButton;