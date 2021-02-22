import React from "react";
import "./Profile-Button.css"

const ProfileButton = (props) => {

  return <a onClick={props.getUsers} className="btn profileBtn">Profile</a>;
};

export default ProfileButton;

// href="/profile"