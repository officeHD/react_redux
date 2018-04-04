import React from 'react'
import BlankLi from './BlankLi'
import ClickDiv from './ClickDiv'
import data from '../reducers/data.json'
import { Picker } from 'antd-mobile';

const OutPut = ({relation,forInsuredPerson,  changeRelation}) => (
  <ul className="coat_ul" style={{marginBottom:0,borderBottom:0}}>
    <Picker
          title="选择与投保人的关系"
          extra="请选择"
          cols="1"
          data={relation}
          value={forInsuredPerson}
          onOk={v => changeRelation(v)}
        >
        <BlankLi item="是投保的"></BlankLi>
    </Picker>
    </ul> 
  
)

export default OutPut