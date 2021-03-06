import React from 'react'
import TitleBarInstructionContainer from '../../containers/TitleBarInstructionContainer'
import PlanContainer from '../../containers/PlanContainer'
import FooterBar from './FooterBar'
import Footer from '../public/Footer'
import { Link } from 'react-router'
import style from '../asset/css/index.less'
import ServiceContainer from '../../containers/ServiceContainer'


const Instruction = ({staffId,type,varietyCode,fee,onGoToStep,onShare}) => (
  <div className={style.pbottom}>
    <TitleBarInstructionContainer />
    <PlanContainer/>
    <FooterBar/>
    <Footer />
    <ul className={type?style.bottom_b:style.bottom_btns } >
      <li>价格：￥{fee}</li>
      {type? <li className={staffId?style.share:style.default} onClick={onShare}>发给客户</li>:''}
      <li onClick={onGoToStep} className={staffId?style.normal:style.default}> {staffId?"立即投保":"备案中"}  </li>
    </ul>
    <ServiceContainer/>
  </div>
)

export default Instruction