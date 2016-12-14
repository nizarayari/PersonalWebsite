import React, { Component } from 'react';
import SkillSet from './skillSet'

export default class About extends Component {

  render(){

    return (
      <div className='about'>

        <h3 id='about-me'> About myself </h3>

        <div className='face-lockup'>

          <div className='face-img'/>

          <div className='icon-pencil'> <i className="fa fa-pencil" aria-hidden="true"></i> </div>
          <div className='icon-mouse'> <i className="fa fa-code" aria-hidden="true"></i></div>
          <div className='icon-browser'> <i className="fa fa-youtube-play" aria-hidden="true"></i></div>
          <div className='icon-video'> <i className="fa fa-laptop" aria-hidden="true"></i></div>


        </div>

        <div className='blurb'>
          <p> <strong>Nizar mostly deals with front-end code.</strong> He originally studied Financial Engineering , but found an overwhelming excitement for new technologies. To fully immerse himself in the field, he spent two years trying to learn as much as possible, completely throwing himself into the task and graduated from the well-known advanced immersive Software Engineering <a href='http://www.hackreactor.com/' target="_blank"> Hack Reactor</a>. 
          </p>
        </div>

        <SkillSet/>

      </div>
    )
  }
}