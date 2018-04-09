import React from 'react'
import style from './asset/css/index.less'
const OutPut = ({ insuredId, fee, applyNum}) => {

  return (
    <div className={style.orderdetail}>
      <label>订单概况</label>
      <ul>
          <li>保险期限：{insuredId} </li>        
          <li>保险额度：{insuredId} </li>        
          <li>保费：<span>{fee}</span> </li>        
      </ul>
    </div>
  )
}

export default OutPut