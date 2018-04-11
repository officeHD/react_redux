import React, {Component} from 'react'
import BlankLi from './BlankLi'
import InputBox from './InputBox'
import ClickDiv from './ClickDiv'
import RadioSelector from './RadioSelector'
import { Picker,DatePicker } from 'antd-mobile';
import data from '../reducers/data.json'
import Beneficiary from './Beneficiary'
import Attention from './Attention'
import moment from 'moment';
import SubTitle from './SubTitle'
import RelationTypeContainer from '../containers/RelationTypeContainer'
import style from './asset/css/index.less'
export default class Insurant extends Component {
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
            <SubTitle title="被保人信息" show={this.state.show} toggleShow={this.toggleShow}/>
            <RelationTypeContainer />
            <div className={this.state.show?"coat_ul":"hide"}>
              {this.props.forInsuredPerson[0] === '00'?null:
              <div>
                <BlankLi item="被保人姓名">
                  <InputBox val={this.props.insurantName} onChangeVal={this.props.onChangeInsurantName}/>
                </BlankLi>
                <BlankLi item="被保人电话">
                  <InputBox val={this.props.insurantPhone} onChangeVal={this.props.onChangeInsurantPhone} maxLength="11"/>          
                </BlankLi>
                <BlankLi item="证件类型">
                  <ClickDiv val={data.HolderCertiType[this.props.insurantCertiType]} onClickHandler={e => this.props.showInsurantCertiTypeBox(this.props.insurantCertiType)}/>
                </BlankLi>
                <BlankLi item="证件号码">
                  <InputBox val={this.props.insurantCertiNo} onChangeVal={this.props.onChangeInsurantNo} maxLength="18"/>
                </BlankLi>
                <DatePicker
                  mode="date"
                  value={this.props.insurantBirthday?moment(this.props.insurantBirthday):null}
                  extra={"请选择"}
                  minDate={moment().subtract(55, "years")}
                  maxDate={moment().subtract(28, "days")}
                  onOk={date => this.props.onChangeInsurantBirthday(moment(date).format('YYYY-MM-DD'))}
                  disabled={this.props.insurantCertiType?false:true}
                >  
                  <BlankLi item="出生日期">     
                  </BlankLi>
                </DatePicker>
                <DatePicker
                  mode="date"
                  value={this.props.certInvalidDate?moment(this.props.certInvalidDate):null }
                  extra={"请选择"}
                  minDate={moment()}
                  maxDate={moment().add(20, "years")}
                  onOk={date => this.props.onChangeInvalidDate(moment(date).format('YYYY-MM-DD'))}
                >  
                  <BlankLi item="证件有效期">
                  </BlankLi>
                </DatePicker>
                <BlankLi item="长期有效">
                  <label className={style.radio_style} onClick={e=>this.props.onChangeInvalidDate()}>
                    <img src={this.props.longEffective ? ctx + '/static/img/carInf/radio_on.png' : ctx + '/static/img/carInf/radio_off.png'} />
                  </label>
                </BlankLi>
                <BlankLi item="被保人性别">
                  <RadioSelector a={data.HolderGender[0]} b={data.HolderGender[1]} selected={this.props.insurantGender} onSelect={this.props.onChangeInsurantGender}/>
                </BlankLi>
                <BlankLi item="邮箱">
                  <InputBox val={this.props.insurantEmail} onChangeVal={this.props.onChangeInsurantEmail} tip="用于接收电子保单"/>
                </BlankLi>
                <Picker
                  title="选择地区"
                  extra="请选择"
                  data={addressData}
                  value={this.props.insurantAddressValue}
                  onOk={v => this.props.onChangeInsurantAddress(v)}
                >
                  <BlankLi item="投保地区"></BlankLi>
                </Picker>
                <BlankLi item="详细地址">
                  <InputBox val={this.props.insurantLocation} onChangeVal={this.props.onChangeInsurantLocation} tip="请输入详细地址"/>
                </BlankLi>
                <BlankLi item="邮政编码">
                  <InputBox val={this.props.insurantZipCode} onChangeVal={this.props.onChangeInsurantZipCode} tip="请输入邮政编码" maxLength="6"/>
                </BlankLi>
              </div>}
              <Picker
                title="选择职业类别"
                extra="请选择"
                cols="1"
                data={this.props.jobCategoryList}
                value={this.props.jobCategory}
                onOk={v => this.props.changeJobCategory(v)}
              >
                  <BlankLi item="职业类别"></BlankLi>
              </Picker>
              {this.props.jobCategory[0]===""?
                <div>
                  <BlankLi item="职业大类">
                    <ClickDiv val={this.props.category1_cname} onClickHandler={this.props.onChangeOccupationShow}/>
                  </BlankLi>
                  <BlankLi item="职业中类">{this.props.category2_cname}</BlankLi>
                  <BlankLi item="职业小类">{this.props.category3_cname}</BlankLi>
                  <BlankLi item="详细职业">{this.props.category4_cname}</BlankLi>
                </div>:null
              }
            </div>
            <Beneficiary/>
            <Attention onchangeA={this.props.onchangeA} onchangeB={this.props.onchangeB}/>
        </div>
      
    )
  };
}