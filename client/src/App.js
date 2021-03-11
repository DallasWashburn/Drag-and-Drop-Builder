import Copy from "./Copy"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
// import Profile from "./Profile"
import { useAuth0 } from "@auth0/auth0-react";
import AuthForProjects from "./Components/AuthForProjects/AuthForProjects"
import withSplashScreen from "./Components/Splash-Screen/withSplashScreen"
import Loading from "../src/Components/Loading/Loading"

// import UserProvided from "./providers/UserProvider"
// import Application from "./Application";


function App() {
  const { isLoading } = useAuth0();

  if(isLoading){
    return <Loading />
  }

  return (

    <Router>

      <Route exact path="/" component={Home} />
      <Route exact path="/react" component={Copy} />
      <Route exact path="/profile" component={AuthForProjects} />




    </Router>  );
}

export default App;
