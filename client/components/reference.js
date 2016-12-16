import React, { Component } from 'react';
import $ from 'jquery';
import refList from '../data/ref';

export default class Reference extends Component {

  constructor(){
    super()
    this.state = {
      currentRef: 'Beto'
    }

  }


  refSet(){

    let refViews = []

    for(var ref in refList) {
      const { name, title, content, img, linkedIn } = refList[ref]
      let isActive = this.state.currentRef === ref ? 'active-ref' : ''
      refViews.push(
              <div className={`ref-unit ${isActive}`}>
                <div className='ref-face'>
                  <img src={img} alt='ref-face'/>
                  <strong className='ref-name'> {name} </strong>
                  <em className='ref-title'> {title}</em>
                  <a href={linkedIn} target="_blank"><i className="ion-social-linkedin"></i></a>
                </div>

                <div className='ref-content'>
                  <i className="ion-quote begin"></i>
                  <p>{content}</p>
                  <div className='end'>
                    <i className="ion-quote end"></i>
                  </div>
                </div>
              </div>
      )
    }

    return refViews;

  }

  handleRef(ref){
    this.setState({currentRef : ref})
  }

  handleNext(){
    const refName = Object.keys(refList)
    const curName = this.state.currentRef
    const curNamePos = refName.indexOf(curName)
    const nextName = refName[curNamePos + 1]
    if (nextName){ 
      this.setState({currentRef: nextName}) 
    } else {
      this.setState({currentRef: refName[0]})
    }
  }

  handlePrev(){
    const refName = Object.keys(refList)
    const refLength = Object.keys(refList).length
    const curName = this.state.currentRef
    const curNamePos = refName.indexOf(curName)
    const prevName = refName[curNamePos - 1]
    if (prevName){ 
      this.setState({currentRef: prevName}) 
    } else {
      this.setState({currentRef: refName[refLength-1]})
    }
  }


  refLogo(){
    let refLogoViews = [];
    for(let ref in refList) {
      const { logo } = refList[ref]
      let isActive = this.state.currentRef === ref ? 'active-ref' : ''
      refLogoViews.push(
        <div onClick={()=>{this.handleRef(ref)}} className={`ref-logo ${isActive}`} style={{ backgroundImage: `url(${ logo })`}}> </div>
      )

    }
    return refLogoViews;
  }


  render(){

    return (
          <div className='ref-lockup'>
            <h3 id='ref'> References </h3>
            <div className='ref-controls'>
              <i className="ion-chevron-left" onClick={()=>{this.handlePrev()}}></i>
              <i className="ion-chevron-right" onClick={()=>{this.handleNext()}}></i>
            </div>

            <div className='ref-belt'>

              {this.refSet()}

              <div className='ref-logos'>
                {this.refLogo()}
              </div>

            </div>
          </div>
    )

  }
}