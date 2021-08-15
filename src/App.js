import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificat from './components/Certificat';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Jumbotron}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/certificates" component={Certificat}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
