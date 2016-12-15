import React, { Component } from 'react';
import $ from 'jquery';

export default class Work extends Component {

  closeWorkBelt(){
    $('.work-belt').css('left','0%')
    $('.work-container').hide(800)
  }

  render(){

    const {title, description, img, techStack} = this.props.projectInfo;

    console.log(this.props.projectInfo)

    return (
          <div className='work-wrap'>
            <div className="work-container" onClick={()=>{this.closeWorkBelt()}}>
              <div className='work-return'>
                <i className="ion-android-arrow-dropleft-circle"></i>
              </div> 
              <h4>{title}</h4>
              <img src='../assets/header.png'/>
              <p> {description} </p>
              <p> Tech Stack : {techStack} </p>
            </div>
          </div>
    )

  }
}