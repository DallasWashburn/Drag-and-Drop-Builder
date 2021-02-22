import Copy from "./Copy"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
// import Profile from "./Profile"
import AuthForProjects from "./Components/AuthForProjects/AuthForProjects"

// import UserProvided from "./providers/UserProvider"
// import Application from "./Application";


function App() {
  return (

    <Router>

      <Route exact path="/" component={Home} />
      <Route exact path="/react" component={Copy} />
      <Route exact path="/profile" component={AuthForProjects} />




    </Router>  );
}

export default App;
