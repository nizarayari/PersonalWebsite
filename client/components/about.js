import React, { Component } from 'react';
import SkillSet from './skillSet'

export default class About extends Component {

  render(){

    return (
      <div className='about'>

        <div className="about__header">

          <h3 className="about__header__title" id='about-me'> About myself </h3>

          <div className="container-dot">
            <img src="../assets/dot.svg"/>
          </div>

          <div className='face-lockup'>
            <div className='face-container'>
              <div className='img mozilla-img'/>
              <div className='img qonto1-img'/>
              <div className='img face-img'/>
              <div className='img qonto2-img'/>
              <div className='img venteprive-img'/>
            </div>
          </div>

          <div className="wave-start">
            <img className="wave-1" src="../assets/wave1.svg"/>
            <img className="wave-2" src="../assets/wave2.svg"/>
            <img className="wave-3" src="../assets/wave3.svg"/>
            <img className="wave-4" src="../assets/wave4.svg"/>
            <img className="wave-5" src="../assets/wave5.svg"/>
            <img className="wave-6" src="../assets/wave6.svg"/>
          </div>

        </div>

        <div className='blurb'>
          <p> <strong>Nizar mostly deals with the entire JavaScript web application stack.</strong> He originally studied Financial Engineering , but found an overwhelming excitement for new technologies. To fully immerse himself in the field, he spent two years trying to learn as much as possible, completely throwing himself into the task and graduated from the well-known advanced immersive Software Engineering <a href='http://www.hackreactor.com/' target="_blank"> Hack Reactor</a>. During his spare time, Nizar likes to organize <a href='https://www.meetup.com/Paris-EmberJS-Lab/' target="_blank"> Meetups</a> on different tech topics
           and enjoys time with his family.<i className="em em-family"></i></p>
        </div>

        <SkillSet/>

      </div>
    )
  }
}