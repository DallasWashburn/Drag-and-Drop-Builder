import React from "react";

const FinalizeButton = (props) => {
  return <button onClick={props.finalize} className=" finalizeButton" >Finalize</button>;
};

export default FinalizeButton;