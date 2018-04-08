import React, { Component } from 'react'
import BlankLi from './public/BlankLi'
import InputBox from './public/InputBox'
import ClickDiv from './public/ClickDiv'
import RadioSelector from './public/RadioSelector'
import data from '../reducers/data.json'
import { Picker } from 'antd-mobile';
 

export default class OutPut extends Component {

  render() {
     
    let addressData = JSON.parse(sessionStorage.addressData);
    // let addressDatas = JSON.parse(newAdd);
   // 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <li className={style.blank_li}  onClick={props.onClick}>
    <label>{props.extra}</label>
    {props.children}
  </li>
  
);
    return (
      <ul className="coat_ul">
        <BlankLi item="姓名">
          {this.props.justRead ? this.props.holderName :
            <InputBox val={this.props.holderName} onChangeVal={this.props.onChangeHolderName} />
          }
        </BlankLi>
        <BlankLi item="手机号">
          {this.props.justRead ? this.props.holderPhone :
            <InputBox val={this.props.holderPhone} onChangeVal={this.props.onChangeHolderPhone} maxLength="11" />
          }
        </BlankLi>
        <BlankLi item="证件类型">
          {this.props.justRead ? data.HolderCertiType[this.props.holderCertiType] :
            <ClickDiv val={data.HolderCertiType[this.props.holderCertiType]} onClickHandler={e => this.props.showHolderCertiTypeBox(this.props.holderCertiType)} />
          }
        </BlankLi>
        <BlankLi item="证件号码">
          {this.props.justRead ? this.props.holderCertiNo :
            <InputBox val={this.props.holderCertiNo} onChangeVal={this.props.onChangeHolderNo} maxLength="18" />
          }
        </BlankLi>
        <BlankLi item="邮箱">
          {this.props.justRead ? this.props.holderEmail :
          <InputBox val={this.props.holderEmail} onChangeVal={this.props.onChangeHolderEmail} tip="用于接收电子保单"/>
          }
        </BlankLi>
        <Picker
          title="选择地区"
          extra="请选择"
          data={addressData}
          value={this.props.holderAddress}
          onOk={v => this.props.onChangeAddress(v)}
        >
          <BlankLi item="投保地区"></BlankLi>
        </Picker>
        <BlankLi item="详细地址">
          {this.props.justRead ? this.props.holderAddress :
          <InputBox val={this.props.holderAddress} onChangeVal={this.props.onChangeHolderAddress} tip="用于接收电子保单"/>
          }
        </BlankLi>

      </ul>
    )
  };
}