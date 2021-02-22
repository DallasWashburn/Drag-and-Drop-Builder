import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../../Profile"


const AuthForProjects= () => {
    const { user, isAuthenticated } = useAuth0();
    return (
    <Profile user={user}/>
    );
};

export default AuthForProjects;