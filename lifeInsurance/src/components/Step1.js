import React from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import HolderContainer from '../containers/HolderContainer'
import RelationTypeContainer from '../containers/RelationTypeContainer'
import InsurantContainer from '../containers/InsurantContainer'
import SelectorContainer from '../containers/SelectorContainer'
 
import SubTitle from './SubTitle'
import { Link } from 'react-router'
import style from './asset/css/index.less'


const Step1 = ({step, onGoToStep}) => (
  <div>
    <TitleBarStepContainer />
    <SubTitle title="投保人信息" />
    <HolderContainer justRead={false}/>
    <SubTitle title="被保人信息" />
    <RelationTypeContainer />
    <InsurantContainer/>
    <button className={style.next_btn} onClick={onGoToStep}>下一步</button>
    <SelectorContainer />
  </div>
)

export default Step1