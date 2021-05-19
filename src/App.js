import React from "react";
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificat from './components/Certificat';
import ScrollUpButton from './components/ScrollUpButton';

function App() {
  return (
    <div>
      <ScrollUpButton />
      <Navbar />
      <Jumbotron />
      <About />
      <Certificat />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
