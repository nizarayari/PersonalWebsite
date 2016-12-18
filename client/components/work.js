import React, { Component } from 'react';
import $ from 'jquery';
import WorkDetails from './workDetails';
import Projects from '../data/projects';

export default class Work extends Component {

  constructor(){
    super()
    this.state = {
      currentWork : ''
    }
  }


  workBelt(project){
    $('.work-belt').css('left','-100%')
    $('.work-container').show()

    let projectInfo = Projects[project]
    this.setState({currentWork: projectInfo})
  }


  renderWork(){
    
    let projects = [];

    for(let work in Projects ) {
      projects.push(
        <div 
          className="thumb-unit" 
          onClick={()=>{this.workBelt(work)}} 
          style={{ backgroundImage: `url(${Projects[work].img})` }}>

          <div className="thumb-overlay">
            <strong>{work}</strong>
            <div className="zoom-icon">
              <i className="ion-ios-search"></i>
              <i className="ion-ios-plus-empty"></i>
            </div>
          </div>
        </div>
      )
    }

    return projects;
  }


  render(){

    return (
      <div className="work-lockup">
        <h3 id="me">work</h3>

        <div className='work-belt'>

          <div className='thumb-wrap'>
            <div className="thumb-container">
              {this.renderWork()}
            </div>
          </div>

          <WorkDetails projectInfo={this.state.currentWork}/>
          

        </div>

      </div>
    )

  }
}