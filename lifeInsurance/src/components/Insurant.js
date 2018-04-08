import React, {Component} from 'react'
import BlankLi from './public/BlankLi'
import InputBox from './public/InputBox'
import ClickDiv from './public/ClickDiv'
import RadioSelector from './public/RadioSelector'
import { Picker } from 'antd-mobile';
import data from '../reducers/data.json'


export default class Insurant extends Component {

  render() {
   
    return (
      <ul className="coat_ul">
      {this.props.forInsuredPerson[0] === '00'?null:<div>
      <BlankLi item="被保人姓名">
          {this.props.justRead ? this.props.insurantName :
          <InputBox val={this.props.insurantName} onChangeVal={this.props.onChangeInsurantName}/>
          }
        </BlankLi>
        <BlankLi item="证件类型">
          {this.props.justRead ? data.HolderCertiType[this.props.insurantCertiType] :
          <ClickDiv val={data.HolderCertiType[this.props.insurantCertiType]} onClickHandler={e => this.props.showInsurantCertiTypeBox(this.props.insurantCertiType)}/>
          }
        </BlankLi>
        <BlankLi item="证件号码">
          {this.props.justRead ? this.props.insurantCertiNo :
          <InputBox val={this.props.insurantCertiNo} onChangeVal={this.props.onChangeInsurantNo} maxLength="18"/>
          }
        </BlankLi>
        <BlankLi item="出生日期">
          { this.props.insurantBirthday||"请选择"}
        </BlankLi>
        <BlankLi item="被保人性别">
          {this.props.justRead ? data.HolderGender[this.props.insurantGender] :
          <RadioSelector a={data.HolderGender[0]} b={data.HolderGender[1]} selected={this.props.insurantGender} onSelect={this.props.onChangeInsurantGender}/>
          }
        </BlankLi>
        <BlankLi item="被保人电话">
          {this.props.justRead ? this.props.insurantPhone :
          <InputBox val={this.props.insurantPhone} onChangeVal={this.props.onChangeInsurantPhone}/>          
          }
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

      </ul>
    )
  };
}