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
      <div className='header'>

        <img className='logo' src='../assets/logo2.png' />

        <nav>
          <a href='#about-me'> About Me </a>
          <a href='#me'> Work </a>
          <a href='#articles'> Articles </a>
          <a href='#contact'> Contact </a>
        </nav>

        <div className='intro'>
          <h1> <span> JavaScript Enthousiast </span> </h1>
          <p className='subtitle'> Hello there! </p>
        </div>

      </div>
    )
  }
}