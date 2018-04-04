import React from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import RelationTypeContainer from '../containers/RelationTypeContainer'
import InsurantContainer from '../containers/InsurantContainer'
import NumContainer from '../containers/NumContainer'
import SelectorContainer from '../containers/SelectorContainer'
import OccupationContainer from '../containers/OccupationContainer'
import LoadingContainer from '../containers/LoadingContainer'
import Navigation from './Navigation'
import SubTitle from './SubTitle'
import InsureItemCard from './InsureItemCard'
import { Link } from 'react-router'
import style from './asset/css/index.less'


const OutPut = ({step, onGoToStep}) => (
  <div>
    <TitleBarStepContainer />
    <Navigation step={2}/>

    <SubTitle title="被保人信息" />

    
    <RelationTypeContainer />
    <InsurantContainer justRead={false}/>

    <SubTitle title="保险信息" />

    <NumContainer />

    <button className={style.next_btn} onClick={onGoToStep}>下一步</button>

    <SelectorContainer />

    <OccupationContainer />

    <LoadingContainer />

  </div>
)

export default OutPut