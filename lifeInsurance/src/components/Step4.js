import React from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import OrderContainer from '../containers/OrderContainer'
import CardsContainer from '../containers/CardsContainer'
import Navigation from './Navigation'
import ZACashier from './ZACashier'
import BlankLi from './BlankLi'
import ClickDiv from './ClickDiv'
import LoadingContainer from '../containers/LoadingContainer'
import { Link } from 'react-router'
import style from './asset/css/index.less'

const OutPut = ({step, applyNum, insuredId, sumPremium, url, isZACashier, isOtherWay, balance, onGoToZACashier, onChangeIsOtherWay, onGoToStep}) => (

  <div>
    <TitleBarStepContainer />
    <Navigation step={4}/>
    <div className={style.total}>
      应付金额：<span>{sumPremium}</span>元({applyNum}份)
    </div>
    <ul className={style.coat_ul}>
      <BlankLi item="众安收银台">
        <ClickDiv val={'(可用)'} isOpen={isZACashier} onClickHandler={e => (onGoToZACashier())}/>
      </BlankLi>
      {isZACashier ? <ZACashier insuredId={insuredId} url={url} applyNum={applyNum}/> : null}
      <BlankLi item="其他支付方式">
        <ClickDiv val={'(卡单)'} isOpen={isOtherWay} onClickHandler={e => (onChangeIsOtherWay())}/>
      </BlankLi>
      {isOtherWay ? <CardsContainer /> : null}
    </ul>
    
    <LoadingContainer />
  </div>

)

export default OutPut