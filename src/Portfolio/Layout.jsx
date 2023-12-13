import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Layout;
