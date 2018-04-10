import React from 'react'
import style from '../asset/css/index.less'
import { Icon } from 'antd-mobile';

const Out = ({extra}) => (
    
  <div className={style.selectbox}>
    {extra}
    <Icon type={require(`../asset/svg/down.svg`)}/>
  </div>

)

export default Out