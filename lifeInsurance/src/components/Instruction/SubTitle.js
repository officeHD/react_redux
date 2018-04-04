import React from 'react'
import style from '../asset/css/index.less'


const SubTitle = ({title}) => (
    
  <div className={style.sub_title}>
  	<span></span>
  	<p>{title}</p>
    <span className={style.right}></span>
  </div>
)

export default SubTitle