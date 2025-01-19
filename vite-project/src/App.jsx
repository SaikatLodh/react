import "./App.css";
import Map from "./components/map/Map";
import Onclick from "./components/onclick/Onclick";
import Css from "./components/css/Css";
import Props from "./components/props/Props";
import One from "./components/props/assinment/One";
import Home from "./components/routerdom/Home";
import About from "./components/routerdom/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/routerdom/Navbar";
import State from "./components/state/State";
import Counter from "./components/state/Counter";
import Assignment from "./components/state/assignment";
import Assignmentthree from "./components/state/Assignmentthree";
import Card from "./components/useeffect/card";
import Carddeatails from "./components/useeffect/Carddeatails";

function App() {
  return (
    <>
      {/* Fast class */}
      {/* <Css />
      <Onclick />
      <Map /> */}

      {/* secondclass */}
      {/* <Props />
      <One/> */}

      {/* thirdclass */}
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router> */}
      {/* <State /> */}
      {/* <Counter/> */}
      {/* <Assignment /> */}
      {/* <Assignmentthree/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/carddetailes/:id" element={<Carddeatails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
