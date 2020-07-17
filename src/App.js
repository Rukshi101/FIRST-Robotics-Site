import React, { Component } from "react";
// import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from './components/NavBar/Navbar';

// import SideDrawer from './components/SideDrawer/sideDrawer'
// import Backdrop from './components/Backdrop/Backdrop.js';
// import GetStarted from './components/Cards/getStarted';
import "./App.css";
import "./Forward.css";
import "./videoTitle.css";
// import Cards from './components/Cards/Cards.js'
// import ReactDOM from 'react-dom'
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  fab,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCoffee,
  faRobot,
  faProjectDiagram,
  faPhoneSquare,
  faUserPlus,
  faHome,
  faUsers,
  faCheckDouble,
  faClipboard,
  faBook,
  faLink,
  faArrowDown,
  faPeopleCarry,
  faHandshake,
  faPeopleArrows,
  faArrowRight,
  faGraduationCap,
  faScroll,
  faSchool
} from "@fortawesome/free-solid-svg-icons";

// import Nav from './components/Nav'
//  import ExampleComponent from './components/ExampleComponent';
// import VideoTitle from './components/VideoTitle';
// import Footer from './components/Footer'
// import Commitment from './components/Commitment'
// import OnlineHubs from './components/OnlineHubs'
// import Testimonials from './components/Testimonial'
// import Form from './components/Form'
// import SignUp from './components/SignUpPage'
import Resources from "./components/Resources";
import Home from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
// import Safety from './components/Resources'
import SafetyPage from "./components/SafetyPage";
import DesignBuild from "./components/DesignBuild";
import ElectricalProgramming from "./components/ElectricalProgramming";
import Playbook from "./components/PlayBooks/Playbook";
import InEvent from "./components/InEvent/InEvent";
import Game from "./components/Game/Game";
import Landing from "./components/FIRSTFORWARDPAGE/Landing";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import FirstSteps from "./components/FirstSteps";
// import ProjectLinkSection from './components/FIRSTFORWARDPAGE/ProjectLinkSection'
library.add(
  fab,
  faRobot,
  faProjectDiagram,
  faPhoneSquare,
  faUserPlus,
  faHome,
  faYoutube,
  faTwitter,
  faPeopleArrows,
  faCheckDouble,
  faPeopleCarry,
  faHandshake,
  faArrowDown,
  faInstagram,
  faCoffee,
  faUsers,
  faClipboard,
  faBook,
  faLink,
  faArrowRight,
  faGraduationCap,
  faScroll,
  faSchool
);
// const fetchedProducts = [
//   {
//     id:1,name:"Name"
//   },
//   {
//     id:2,name:"Dogs"
//   }
// ]

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    

    
    
    return (
      <Router>
        <div className="App" style={{ height: "100%" }}>
          

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/rookies" exact component={Home} />

            <Route path="/signup" component={SignUpPage} />
            <Route path="/resources" component={Resources} />
            <Route path="/safety" component={SafetyPage} />
            <Route path="/designbuild" component={DesignBuild} />
            <Route path="/safety" component={SafetyPage} />
            <Route path="/resources/safety" component={SafetyPage} />

            <Route path="/InEvent" component={InEvent} />
            <Route path="/Playbooks" component={Playbook} />
            <Route path="/game" component={Game} />
            <Route path="/register" component={Registration} />
            <Route path="/contact" component={Contact} />
            <Route path="/firststeps" component={FirstSteps} />
            <Route
              path="/ElectricalProgramming"
              component={ElectricalProgramming}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
