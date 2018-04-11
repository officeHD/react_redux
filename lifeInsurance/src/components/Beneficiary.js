import React, { Component } from 'react'
import BlankLi from './BlankLi'
import SubTitle from './SubTitle'
export default class Beneficiary extends Component {
  constructor(props){
    super(props);
        this.state = {
          show: true
        }
        this.toggleShow = this.toggleShow.bind(this);    
  }  
  toggleShow() {
      this.setState({
        show: !this.state.show,
      })
  }
  render() {
    return (
      <div>
         <SubTitle title="受益人人信息" show={this.state.show} />
         <div className={this.state.show?"coat_ul":"hide"}>
            <BlankLi item="受益人">
              法定受益人
            </BlankLi>
          </div>
      </div>
      
    )
  };
}