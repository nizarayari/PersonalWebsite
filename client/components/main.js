import React from "react";


import Header from "./header";
import Footer from "./footer";
import About from "./about";

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <About/>
        <Footer/>
      </div>
    );
  }
}


