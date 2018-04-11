import React from 'react'
import Plans from './Plans'
import moment from 'moment';
import { DatePicker, Picker } from 'antd-mobile';
import style from '../asset/css/plan.less' 
import RadioSelector from '../RadioSelector'
import Detail16020 from './Detail16020'
import Detail16050 from './Detail16050'

import data from '../../reducers/data.json' 
import InputBox from '../InputBox'

const Out = ({title,varietyCode,fee,amnt,insurantGender,insurantBirthday,buyNum,payMent,insuYear,insuYearArry,buyNumArr,payMentArry,onChangeBuyNum,onChangePayMent,onChangeInsurantGender,onChangeAmnt,onChangeInsurantBirthday}) =>{
  return(
    <div>
      <img className={style.top_img} src={require(`../asset/img/banner/${varietyCode}.jpg`)}/>
      <div className={style.words}><p>{title.imgp}</p><span>{title.imgs}</span></div>
      <div >
          <div className={style.plan_list}>
            <div className={style.plan_title}>
              <div>{title.title}</div>
            </div>
          </div>
          <Plans title="投保年龄">
            28天-55周岁
          </Plans>
          <DatePicker
            mode="date"
            value={insurantBirthday?moment(insurantBirthday):moment().subtract(1, "months") }
            extra={"请选择"}
            minDate={moment().subtract(65, "years")}
            maxDate={moment().subtract(28, "days")}
            onOk={date => onChangeInsurantBirthday(moment(date).format('YYYY-MM-DD'))}
          >  
            <Plans title="出生日期"> </Plans>
          </DatePicker>
          <Plans title="性别" > 
              <RadioSelector a={data.HolderGender[0]} b={data.HolderGender[1]} selected={insurantGender} onSelect={onChangeInsurantGender}/>
          </Plans>
          <Plans title="保额" > 
            <InputBox val={amnt/10000} onChangeVal={onChangeAmnt} tip="请输入保额" maxLength="2" />万元
          </Plans>
          {varietyCode==="16020"?<div>
            <Plans  title="单份金额" >1000元每份</Plans>
            <Picker
                title="选择"
                extra="请选择"
                cols="1"
                data={buyNumArr}
                value={buyNum}
                onOk={v => onChangeBuyNum(v)}
              >
                <Plans title="购买份数"></Plans>
            </Picker>
            </div>:null}
            {varietyCode==="12030"? <Picker
                  extra="请选择"
                  cols="1"
                  data={insuYearArry}
                  value={insuYear}
                  onOk={v => onChangePayMent(v)}
                  disabled={true}
                >
                  <Plans  title="保险期间" ></Plans>
              </Picker>:<Plans  title="保险期间" >终身</Plans>
              
            }
            
          <Picker
              extra="请选择"
              cols="1"
              data={payMentArry}
              value={payMent}
              onOk={v => onChangePayMent(v)}
            >
              <Plans  title="交费期间" ></Plans>
          </Picker>
          <div className={style.totalMoney}>
            {fee}元
          </div>
      </div>
      
      {varietyCode==="16050"?<Detail16050/>:null}
      {varietyCode==="16020"?<Detail16020/>:null}
      
    </div>
  )
} 

export default Out
 

 