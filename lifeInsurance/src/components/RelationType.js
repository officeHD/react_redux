import React from 'react'
import BlankLi from './BlankLi'
import ClickDiv from './ClickDiv'
import data from '../reducers/data.json'
import { Picker } from 'antd-mobile';

const OutPut = ({relation,forInsuredPerson,varietyCode,changeRelation}) => (
  <div className="coat_ul" style={{marginBottom:0,borderBottom:0}}>
    <Picker
          title="选择与投保人的关系"
          extra="请选择"
          cols="1"
          data={relation}
          value={forInsuredPerson}
          onOk={v => changeRelation(v)}
          disabled={varietyCode==="12030"?true:false}
        >
        <BlankLi item="是投保人的"></BlankLi>
    </Picker>
    </div> 
  
)

export default OutPut