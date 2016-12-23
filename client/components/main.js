import React from "react";
import $ from "jquery";


import Header from "./header";
import Footer from "./footer";
import About from "./about";
import Work from "./work";
import Reference from "./reference";
import Contact from "./contact";
import Form from "./form";

import fitText from '../helpers/fitText.js';

export default class App extends React.Component {


componentDidMount(){
  this.smoothScroll(1000);

  $(".intro h1").fitText(1, { minFontSize: '30px', maxFontSize: '72px' });
  $(".bigEmail").fitText(1, { minFontSize: '10px', maxFontSize: '45px' });

}

smoothScroll(duration){
  $('a[href^="#"]').on('click', function(event){
    
    const target = $( $(this).attr('href') );

    if(target.length){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration)
    }

  })
}

  render() {
    return (
      <div>
        <Header/>
        <About/>
        <Work/>
        <Reference/>
        <Contact/>
        <Form/>
        <Footer/>
      </div>
    );
  }
}


