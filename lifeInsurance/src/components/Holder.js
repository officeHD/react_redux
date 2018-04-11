import React, { Component } from 'react'
import BlankLi from './BlankLi'
import InputBox from './InputBox'
import ClickDiv from './ClickDiv'
import RadioSelector from './RadioSelector'
import data from '../reducers/data.json'
import { Picker,DatePicker } from 'antd-mobile';
import moment from 'moment';
import style from './asset/css/index.less'
import UploadImgContainer from '../containers/UploadImgContainer'
import SubTitle from './SubTitle'
export default class OutPut extends Component {
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
    let addressData = JSON.parse(sessionStorage.addressData);
    return (
      <div>
        <SubTitle title="投保人信息" show={this.state.show} toggleShow={this.toggleShow} />
        <div className={this.state.show?"coat_ul":"hide"}>
          <BlankLi item="姓名">
            <InputBox val={this.props.holderName} onChangeVal={this.props.onChangeHolderName} />
          </BlankLi>
          <BlankLi item="手机号">
            <InputBox val={this.props.holderPhone} onChangeVal={this.props.onChangeHolderPhone} maxLength="11" />
          </BlankLi>
          <BlankLi item="证件类型"> 
            <ClickDiv val={data.HolderCertiType[this.props.holderCertiType]} onClickHandler={e => this.props.showHolderCertiTypeBox(this.props.holderCertiType)}/>
          </BlankLi>
          <BlankLi item="证件号">
            <InputBox val={this.props.holderCertiNo} onChangeVal={this.props.onChangeHolderNo} maxLength="18" />
          </BlankLi>
          <DatePicker
            mode="date"
            value={this.props.holderBirthday?moment(this.props.holderBirthday):null}
            extra={"请选择"}
            minDate={moment().subtract(65, "years")}
            maxDate={moment().subtract(18, "years")}
            onOk={date => this.props.onChangeHolderBirthday(moment(date).format('YYYY-MM-DD'))}
            disabled={this.props.holderCertiType?false:true}
          >  
            <BlankLi item="出生日期"> </BlankLi>
          </DatePicker>
          <DatePicker
            mode="date"
            value={this.props.certiNoEffictive?moment(this.props.certiNoEffictive):null }
            extra={"请选择"}
            minDate={moment()}
            maxDate={moment().add(20, "years")}
            onOk={date => this.props.onChangeEffictive(moment(date).format('YYYY-MM-DD'))}
          >  
            <BlankLi item="证件有效期"> </BlankLi>
          </DatePicker>
          <BlankLi item="长期有效">
            <label className={style.radio_style} onClick={e=>this.props.onChangeEffictive()}>
              <img src={this.props.longEffective ? ctx + '/static/img/carInf/radio_on.png' : ctx + '/static/img/carInf/radio_off.png'} />
            </label>
          </BlankLi>
          <UploadImgContainer/>
          <BlankLi item="邮箱">
            <InputBox val={this.props.holderEmail} onChangeVal={this.props.onChangeHolderEmail} tip="用于接收电子保单"/>
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
            <InputBox val={this.props.holderLocation} onChangeVal={this.props.onChangeHolderLocation} tip="请输入详细地址"/>
          </BlankLi>
          <BlankLi item="邮政编码">
            <InputBox val={this.props.holderZipCode} onChangeVal={this.props.onChangeHolderZipCode} tip="请输入邮政编码" maxLength="6"/>
          </BlankLi>
        </div>
      </div>
    )
  };
}