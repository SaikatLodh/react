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
import Maineffect from "./components/useeffect/Maineffect";
import Usereduce from "./components/usereduce/Usereduce";
import Data from "./components/getcontextapidata/Data";
import Fetch from "./components/axios/Fetch";
// import LoadingAbout from "./components/lazyloading/LoadingAbout";
// import AboutImage from "./components/lazyloading/AboutImage";
import Lazyloading from "./components/lazyloading/Lazyloading";
import { lazy, Suspense } from "react";
import Formhandel from "./components/formhandel/Formhandel";
import Postform from "./components/Crud/Formhandel";
import UserCard from "./components/formhandel/UserCard";
import Getuser from "./components/Crud/Getuser";
import Updateproducts from "./components/Crud/Updateproducts";
import Getusertwo from "./components/Crudtwo/Getuser";
import Formhandeltwo from "./components/Crudtwo/Formhandel";
import Login from "./components/auth/Login";
import Dashbord from "./components/auth/Dashbord";
import Register from "./components/auth/Register";
import Forgotpassword from "./components/auth/Forgotpassword";
import Updatepassword from "./components/auth/Updatepassword";

const LoadingAbout = lazy(() =>
  import("./components/lazyloading/LoadingAbout")
);
const AboutImage = lazy(() => import("./components/lazyloading/AboutImage"));

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
      {/* <Router>
        <Routes>
          <Route path="/" element={<Maineffect />} />
          <Route path="/carddetailes/:id" element={<Carddeatails />} />
        </Routes>
      </Router> */}
      {/* <Usereduce /> */}
      {/* <Data/> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
<Router>
        <Routes>
          <Route path="/" element={<Lazyloading/>}/>
          <Route path="/about" element={<LoadingAbout/>}/>
          <Route path="/aboutimage" element={<AboutImage/>}/>
        </Routes>
      </Router>
</Suspense> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<UserCard />} />
          <Route path="/addduser" element={<Formhandel />} />
        </Routes>
      </Router> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<Getuser />} />
          <Route path="/addduser" element={<Postform />} />
          <Route path="/updateproduct/:id" element={<Updateproducts />} />
        </Routes>
      </Router> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<Getusertwo />} />
          <Route path="/addduser" element={<Formhandeltwo />} />
        </Routes>
      </Router> */}

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashbord />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/updatepassword" element={<Updatepassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
