import React from 'react'
import SubTitle from './SubTitle'
import Charge from './Charge'
import Plans from './Plans'
import Feature from './Feature'
import FooterBar from './FooterBar'

import style from '../asset/css/index.less' 


const Instruction = ({onGoToStep}) => (

    <div>
        <div className={style.detail}>
          <div className={style.plan_list}>
            <div className={style.plan_title}>
              <div>安邦安鑫利两全保险（万能型）A款</div>
            </div>
          </div>
          <Plans title="投保年龄" tip="28天-70周岁"/>
          <Plans title="缴费方式" tip="趸交"/>
          <Plans title="保险期限" tip="10年"/>
        </div>
        <SubTitle  title="相关费用"/>
        <Charge />
        <SubTitle  title="保障范围"/>
        <Plans 
            title="身故保险金" 
            tip="账户价值对比" 
            more="被保险人保单年度初年龄，指保单年度第一日被保险人当时的年龄。被保险人保单年度初年龄未满 18 周岁，按账户价值比例100%赔付，已满 18 周岁但未满 41 周岁按160%，已满 41 周岁但未满 61 周岁按140%，已满 61 周岁按120%。"
          />
        <Plans 
            title="满期保险金" 
            tip="账户价值" 
            more="保险期间届满时，被保险人仍然生存的，本公司按本保险合同保单账户价值给付“满期保险金”，本保险合同终止。" 
        />
        <Plans  
          title="持续奖金" 
          tip="账户价值的1%" 
          more="在本保险合同有效期内，被保险人在第 5 个保单年度末仍然生存的，本公司将在该保单年度末按当时保单账户价值的 1%作为持续奖金计入保单账户。" 
        />
        <SubTitle  title="产品特色"/>
        <Feature/>
        <FooterBar/>
        
    </div>
)

export default Instruction