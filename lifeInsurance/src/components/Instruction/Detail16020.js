import React ,{Component}from 'react'
import Plans from './Plans'
import style from '../asset/css/plan.less' 
import { Icon } from 'antd-mobile';
 
 export default class Instruction extends Component {
   render() {
    return (
      <div >
        <div className={style.titlePlan}>
            <img  src={require('../asset/img/plan/title_icon.png')}/>
            保障权益/保额
        </div>
        <Plans  title="特别生存金"  more="自本合同生效后的第5个保单周年日，若被保险人仍生存，我们按本合同已交保险费的 20%给付特别生存金。">  20%</Plans>
        <Plans  title="年金"   more="自本合同生效后的第 6 个保单周年日起，我们将于被保险人生存的每个保单周年日按基本保险金额的 50%给付年金，直至被保险人身故。" >50%</Plans>
        <Plans  title="祝寿金"   more="祝寿金领取日分别为年满 60 周岁或 65 周岁后的首个保单周年日，由您在投保时与我们约定其中一个，并在保险单上载明。祝寿金领取日一旦确定，不得变更。" >  60周岁/65周岁</Plans>
        <Plans  title="身故保险金"   more=" 被保险人于本合同约定的祝寿金领取日零时之前身故，我们按被保险人身故时本合同已交保险费与现金价值的较大者给付身故保险金，本合同终止；被保险人于本合同约定的祝寿金领取日零时及零时之后身故，我们按被保险人身故时的现金价值给付身故保险金，本合同终止。" > </Plans>
        <div className={style.titlePlan}>
            <img  src={require('../asset/img/plan/title_icon.png')}/>产品特色
        </div>
        <div className={style.plan_content}>
            <img  src={require('../asset/img/plan/banner.png')}/>
            <div className={style.plan_box}>
                <div className={style.left_box}>
                <span className={style.angle}></span>
                <img  src={require('../asset/img/plan/1.png')}/>
                </div>
                <div className={style.plan_txt}>
                <h2>保费快速返还</h2>
                <p>第五年一次性领取已交保费的20%，相当于免除一年保费</p>
                </div>
            </div>
            <div className={style.plan_box}>
                <div className={style.left_box}>
                <span className={style.angle}></span>
                <img  src={require('../asset/img/plan/2.png')}/>
                </div>
                <div className={style.plan_txt}>
                <h2>高比例年金给付</h2>
                <p>基本保险金额的50%给付年金，直至被保险人身故</p>
                </div>
            </div>
            <div className={style.plan_box}>
                <div className={style.left_box}>
                <span className={style.angle}></span>
                <img  src={require('../asset/img/plan/3.png')}/>
                </div>
                <div className={style.plan_txt}>
                <h2>高额祝寿金，安享晚年</h2>
                <p>祝寿日一次性返还100%，已交保费。养老好帮手，晚年不用愁 </p>
                </div>
            </div>
            <div className={style.plan_box}>
                <div className={style.left_box}>
                <span className={style.angle}></span>
                <img  src={require('../asset/img/plan/4.png')}/>
                </div>
                <div className={style.plan_txt}>
                <h2>身故给付，财富传承</h2>
                <p>一份投入，富延两代</p>
                </div>
            </div>
            <div className={style.claim_center}>
            <h1>理赔说明</h1>
            <img className={style.claim} src={require('../asset/img/notice.png')}/>
            </div>
        </div>
      </div>     
    )}
 }   
  
 

 