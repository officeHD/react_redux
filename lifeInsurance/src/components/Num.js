import React from 'react'
import BlankLi from './public/BlankLi'
import ClickDiv from './public/ClickDiv'
import data from '../reducers/data.json'

const OutPut = ({ applyNum, onShowSelector}) => {
  
  return (
    <ul className="coat_ul">
      <BlankLi item="份数">
        <ClickDiv val={data.ApplyNum[applyNum]} onClickHandler={e => onShowSelector(data.ApplyNum, applyNum, 'ApplyNum')}/>
      </BlankLi>
      <BlankLi item="保费">
        {(100 * data.ApplyNum[applyNum]).toFixed(2)}元
      </BlankLi>
  
    </ul>
  )

}

export default OutPut