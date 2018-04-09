import React from 'react'
import TitleBarInstructionContainer from '../../containers/TitleBarInstructionContainer'
import PlanAContainer from '../../containers/PlanAContainer'
import FooterBar from './FooterBar'
import Footer from '../public/Footer'

import { Link } from 'react-router'
import style from '../asset/css/index.less'


const Instruction = ({onShare,type,fee,insurantGender,onGoToStep,staffId,onChangeInsurantGender}) => (
  <div className={style.pbottom}>
    <TitleBarInstructionContainer />
   
    <PlanAContainer/>
    <FooterBar/>
    <Footer />
    <ul className={type?style.bottom_b:style.bottom_btns } >
      <li>价格：￥{fee}</li>
      {type? <li className={staffId?style.share:style.default} onClick={onShare}>发给客户</li>:''}
     
      <li onClick={onGoToStep} className={staffId?style.normal:style.default}> {staffId?"立即投保":"备案中"}  </li>
    </ul>
  </div>
)

export default Instruction