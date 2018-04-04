import React from 'react'
import TitleBarInstructionContainer from '../../containers/TitleBarInstructionContainer'
import Tab from './Tab'
import Footer from './Footer'
import Plan from './Plan'
import { Link } from 'react-router'
import style from '../asset/css/Instruction.less'


const Instruction = ({onShare,onGoToStep,staffId,type}) => (
  <div className={style.pbottom}>
    <TitleBarInstructionContainer />
    <img className={style.top_img} src={require('../asset/img/banner/banner_anxinli.jpg')}/>
    <div className={style.words}><p>多重保障，欢乐无忧</p><span>一次购买，省心省银两</span></div>
    <Plan/>
     
    <Footer />
    <ul className={type?style.bottom_b:style.bottom_btns } >
      <li>价格：￥100</li>
      {type? <li className={staffId?style.share:style.default} onClick={e=>onShare(staffId?1:0)}>发给客户</li>:''}
      <li onClick={e=>onGoToStep(staffId?1:0)} className={staffId?style.normal:style.default}> {staffId?"立即投保":"备案中"}  </li>
    </ul>
  </div>
)

export default Instruction