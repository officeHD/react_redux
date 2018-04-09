import React, { Component } from 'react'
import BlankLi from './BlankLi'
 
export default class Beneficiary extends Component {
  render() {
    return (
      <div className="coat_ul">
        <BlankLi item="受益人">
           法定受益人
        </BlankLi>
      </div>
    )
  };
}