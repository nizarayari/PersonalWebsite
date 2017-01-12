import React, { Component } from 'react';
import $ from 'jquery';

export default class Header extends Component {

  componentDidMount(){
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      if(wScroll < 306){
        $('.intro').css({
          'transform': 'translate(0px, '+ wScroll/2 +'px)'
        })
      }
      
    })
  }


  render(){

    return (
      <div className='header overlay'>


          <img src="../assets/logo.svg" className='logo'/>

          <nav>
            <a href='#about-me'> About Me </a>
            <a href='#me'> Work </a>
            <a href='#ref'> References </a>
            <a href='#contact'> Contact </a>
          </nav>

          <div className='intro'>
            <h1> <span> Software Engineer </span> </h1>
            <p className='subtitle'> Desktop | Web | Mobile </p>
          </div>

      </div>
    )
  }
}