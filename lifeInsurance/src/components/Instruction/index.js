import React from 'react'
import TitleBarInstructionContainer from '../../containers/TitleBarInstructionContainer'
import PlanAContainer from '../../containers/PlanAContainer'
import FooterBar from './FooterBar'
import Footer from '../public/Footer'
import { Link } from 'react-router'
import style from '../asset/css/index.less'


const Instruction = ({staffId,type,varietyCode,fee,onGoToStep,onShare}) => (
  <div className={style.pbottom}>
    <TitleBarInstructionContainer />
    <img className={style.top_img} src={require(`../asset/img/banner/${varietyCode}.jpg`)}/>
    <div className={style.words}><p>连续领取，月领越多</p><span>高额祝寿金，安享晚年</span></div>
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