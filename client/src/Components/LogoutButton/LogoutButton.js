import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LogoutButton = () => {
  const { logout, user } = useAuth0();
  // const { email } = user;
 

  return <a  id="logOut" className=""
            type="submit"
            onClick={() => logout({ returnTo: window.location.origin, })}>
              Logout
            {/* onClick={() => logout()}>Log Out */}
        </a>;
};

export default LogoutButton;