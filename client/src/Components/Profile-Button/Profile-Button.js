import React from "react";
import { Link } from "react-router-dom"
import "./Profile-Button.css"

const ProfileButton = (props) => {
 

  return <Link to={{
    pathname:"/profile", 
    state:[{email:"soldbydw", dbId:props.dbId}]}}  className="btn profileBtn">Profile</Link>
};

export default ProfileButton;

// href="/profile"