import React from 'react'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import HolderContainer from '../containers/HolderContainer'
import RelationTypeContainer from '../containers/RelationTypeContainer'
import InsurantContainer from '../containers/InsurantContainer'
import SelectorContainer from '../containers/SelectorContainer'
import OccupationContainer from '../containers/OccupationContainer'
import LoadingContainer from '../containers/LoadingContainer'
 
import SubTitle from './SubTitle'
import { Link } from 'react-router'
import style from './asset/css/index.less'
import Footer from './public/Footer'

const Step1 = ({step,fee, onGoToStep}) => (
  <div className={style.pbottom}>
    <TitleBarStepContainer />
    <SubTitle title="投保人信息" />
    <HolderContainer justRead={false}/>
    <SubTitle title="被保人信息" />
    <RelationTypeContainer />
    <InsurantContainer/>
    <Footer/>
    <ul className={style.bottom_btns } >
      <li> {fee}元</li>
      <li onClick={onGoToStep} className={ style.normal }> 下一步 </li>
    </ul>
    <SelectorContainer />
    <OccupationContainer />
    <LoadingContainer />
  </div>
)

export default Step1