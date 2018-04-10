import React,{Component} from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import LoadingContainer from '../containers/LoadingContainer'
import OrderContainer from '../containers/OrderContainer'

import { Link } from 'react-router'
import style from './asset/css/index.less'
import Footer from './public/Footer'


export default class Step2 extends Component {

  render() {
   
    return (
      <div >
        <TitleBarStepContainer />
        <div className={style.pbottom}>
          <OrderContainer/>
          
          <div className={style.ordermes}>
            <label>投保人信息</label>
            <ul>
                <li>姓名：{this.props.holderName} </li>             
                <li>手机号码：{this.props.holderPhone} </li>             
                <li>证件号：{this.props.holderCertiNo} </li>             
                <li>证件有效期：{this.props.certiNoEffictive} </li>             
                <li>电子邮箱：{this.props.holderEmail} </li>             
                <li>投保地区：{this.props.holderAddress} </li>             
                <li>详细地区：{this.props.holderLocation} </li>             
            </ul>
          </div>
          <div className={style.ordermes}>
            <label>被保人信息</label>
            <ul>
                <li>被保人与投保人关系：{this.props.forInsuredPerson} </li> 
                <li>被保人职业：{this.props.jobCategory} </li>       
            </ul>
            {this.props.forInsuredPerson[0] === '本人'?
            null:<ul>
                <li>姓名：{this.props.insurantName} </li>             
                <li>手机号码：{this.props.insurantPhone} </li>             
                <li>证件号：{this.props.insurantCertiNo} </li>             
                         
                     
            </ul>
             }
           
          </div>
          <Footer/>
        </div>
        <div className={style.next_box}>
          <button className={style.next_btn} onClick={this.props.onGoToStep}>确定</button>
        </div>             
       
        <LoadingContainer />

      </div>
    )
  };
}
 