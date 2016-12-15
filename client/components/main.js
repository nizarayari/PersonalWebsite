import React from "react";
import $ from "jquery";


import Header from "./header";
import Footer from "./footer";
import About from "./about";
import Work from "./work";

export default class App extends React.Component {


componentDidMount(){
  this.smoothScroll(1000);
}

smoothScroll(duration){
  console.log(duration,'duration')
  $('a[href^="#"]').on('click', function(event){
    
    const target = $( $(this).attr('href') );

    console.log(target,'target')
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
        <Footer/>
      </div>
    );
  }
}


