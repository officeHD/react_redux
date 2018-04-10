import React from 'react'
import style from './asset/css/index.less'
const OutPut = ({ insuredId, fee,payMent,amnt, applyNum}) => {

  return (
    <div className={style.orderdetail}>
      <label>订单概况</label>
      <ul>
          <li> <span className={style.title}>保险期限：</span>{payMent==="趸交"?payMent:payMent+"年"} </li>        
          <li><span className={style.title}>保险额度：</span>{amnt}元 </li>        
          <li><span className={style.title}>保费：</span><span className={style.red}>{fee} 元</span> </li>        
      </ul>
    </div>
  )
}

export default OutPut