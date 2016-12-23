import React, { Component } from 'react';
import $ from 'jquery';

export default class Work extends Component {

  closeWorkBelt(){
    $('.work-belt').css('left','0%')
    $('.work-container').hide(800)
  }

  render(){

    const {title, description, role, challenges, link, img, techStack} = this.props.projectInfo;

    console.log(this.props.projectInfo)

    return (
          <div className='work-wrap'>
            <div className="work-container" onClick={()=>{this.closeWorkBelt()}}>
              <div className='work-return'>
                <i className="ion-android-arrow-dropleft-circle"></i>
              </div> 
              <h4>{title}</h4>
              <div className='card-work'>
                <img src={img}/>
                <div className='work-description'>

                  <div className='description-unit'>
                    <div className='description-logo'><i className="ion-laptop"></i></div>
                    <div className='description-text' dangerouslySetInnerHTML={{__html:description}}></div>
                  </div>

                  <div className='description-unit'>
                    <div className='description-logo'><i className="ion-ios-people"></i></div>
                    <div className='description-text'> {role} </div>
                  </div>

                  <div className='description-unit'>
                    <div className='description-logo'><i className="ion-settings"></i></div>
                    <div className='description-text'> {techStack} </div>
                  </div>

                  <div className='description-unit'>
                    <div className='description-logo'><i className="fa fa-link" aria-hidden="true"></i></div>
                    <a className='description-text' href={link} target="_blank"> {link} </a>
                  </div>

                </div>

              </div>
            </div>
          </div>
    )

  }
}


                  // <div className='description-unit'>
                  //   <div className='description-logo'><i className="ion-ios-thunderstorm"></i></div>
                  //   <div className='description-text'> {challenges} </div>
                  // </div>