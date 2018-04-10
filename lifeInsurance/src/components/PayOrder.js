import React, { Component } from 'react'
import BlankLi from './BlankLi'
import InputBox from './InputBox'
import ClickDiv from './ClickDiv'
import RadioSelector from './RadioSelector'
import data from '../reducers/data.json'
import { Picker,DatePicker } from 'antd-mobile';
import moment from 'moment';
import style from './asset/css/index.less'
 
export default class OutPut extends Component {
  render() {
    return (
        <div>
            <div className="coat_ul">
        <Picker
            title="选择付款银行"
            extra="由通联提供支付服务"
            cols="1"
            data={data.payBank}
            value={this.props.bankVal||null}
            onOk={v => this.props.onChangePayBank(v)}
            >
            <BlankLi item="付款银行"> </BlankLi>
        </Picker>
        
        <BlankLi item="持卡人">
             {this.props.holderName}
        </BlankLi>
        <BlankLi item="银行账号">
           <InputBox val={this.props.bankNum} onChangeVal={this.props.onChangeBankNum} maxLength="18" />
        </BlankLi>
                
        <BlankLi item="预留手机号">
            <div className={style.payPhone}>
                <InputBox val={this.props.payPhone} onChangeVal={this.props.onChangePayPhone} maxLength="11" />
                <label className={this.props.second>0?style.default:null} onClick={e=>this.props.onGetMesCode(this.props.second)}>{this.props.second<=0?'获取验证码':`${this.props.second}s后重新获取`}</label>
            </div>
        </BlankLi>
        <BlankLi item="验证码">
          
            <InputBox val={this.props.smsCode} onChangeVal={this.props.onChangeSmsCode} maxLength="6" />
          
        </BlankLi>
        
        </div>
            <div className={style.attention}>
                <div className={style.attlist}>
                    <input type="checkbox" defaultChecked="checked" onChange={this.props.onchangeA} />我已阅读并同意
                    <a  target="_blank" href="http://static.e-hqins.com/2017-08-29/a2ccfaad-c657-42f3-aa2a-c443bac3d37f">保费代收协议</a> 
                </div>
            
            </div>
        </div>
      
    )
  };
}