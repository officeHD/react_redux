import React from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'   
import OrderContainer from '../containers/OrderContainer'
import LoadingContainer from '../containers/LoadingContainer'
import PayOrderContainer from '../containers/PayOrderContainer'
import style from './asset/css/index.less'

const OutPut = ({step,holderName, onGoToStep}) => (
  <div className={style.pbottom}>
    <TitleBarStepContainer />
    <OrderContainer/>
    <PayOrderContainer/>
    <div className={style.next_box}>
      <button className={style.next_btn} onClick={onGoToStep}>确定</button>
    </div>
    
    <LoadingContainer />

  </div>
)

export default OutPut