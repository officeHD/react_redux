import React from 'react'
import TitleBarContainer from '../containers/TitleBarContainer'
import InsurantContainer from '../containers/InsurantContainer'
import HolderContainer from '../containers/HolderContainer'
import RelationTypeContainer from '../containers/RelationTypeContainer'
import ProductContainer from '../containers/ProductContainer'
import LoadingContainer from '../containers/LoadingContainer'
import Navigation from './public/Navigation'
import SubTitle from './public/SubTitle'
import style from './asset/css/index.less'

const OutPut = ({step, onGoToStep}) => (
  <div>
    <TitleBarContainer />
    <Navigation step={3}/>

    <SubTitle title="投保产品信息" />
    <ProductContainer />

    <SubTitle title="投保人信息" />
    <HolderContainer justRead={true}/>
    
    <SubTitle title="被保对象信息" />
    
    <RelationTypeContainer justRead={true}/>

    <InsurantContainer justRead={true}/>
    
    <button className={style.next_btn} onClick={onGoToStep}>下一步</button>

    <LoadingContainer />

  </div>
)

export default OutPut