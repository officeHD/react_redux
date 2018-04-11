import React from 'react'
import style from './asset/css/index.less'
import ShowController from './Instruction/ShowController'

const SubTitle = ({title,show,toggleShow}) => (
    
  <div className={style.subtitle}>
    {title}
    <ShowController  show={show} onToggleShow={toggleShow}/>
  </div>
)

export default SubTitle