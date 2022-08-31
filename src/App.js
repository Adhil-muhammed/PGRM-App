import React from "react";
import Nevbar from "./Components/Nevbar/Nevbar";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Pagetwo from "./Components/Pageone/Pagetwo";
import Home from "./Components/home/Home";
import SigupPage from "./pages/Singup/SigupPage";
import AboutPageRl from "./pages/AboutPageRl/AboutPageRl";

function App() {
  return (
    <div>
      <Router>
      <Nevbar />
      <Route exact path="/home">
            <Home/>
          </Route>

          <Route  path="/signup">
          <SigupPage/>
          </Route>
          <Route path="/pagetwo">
            <Pagetwo/>
          </Route>
          <Route path={"/about"}>
            <AboutPageRl/>
          </Route>
      </Router>
      
    </div>
  );
}

export default App;
