import React from "react";
import Navbar from "./Componets/Navbar/Navbar";
import Hero from "./Componets/Hero/Hero";
import Program from "./Componets/Programs/Program";
import Title from "./Componets/Title/Title";
import About from "./Componets/About/About";
import Campus from "./Componets/Campus/Campus";
import Test from "./Componets/Test/Test";
import Contact from "./Componets/Contact/Contact";
import Footer from "./Componets/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Program />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Test" title="What Student Says" />
        <Test />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
