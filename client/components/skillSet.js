import React, { Component } from 'react';

export default class SkillSet extends Component {

  skillSet(){
    let skills = {
      Communication: 8,
      Organization: 8,
      Learning: 8,
      Teaching: 6,
      Planning: 7,
      'Visual Design': 5,
      'UX Design': 6,
      Programming: 8
    }

    let skillsViews = []

    for(var skill in skills) {
      skillsViews.push(
          <div key={skill} className='skill-unit'>
            <div className='skill-label'> {skill} </div>
            <div className={`skill-icons skill-${skills[skill]}`}>
              <span/> <span/> <span/> <span/> <span/>
              <span/> <span/> <span/> <span/> <span/>
            </div>
          </div>
      )
    }

    return skillsViews;

  }

  render(){

    return (
      <div className='skill-lockup'>
        {this.skillSet()}          
      </div>
    )

  }
}