import React ,{Component}from 'react'
 
import style from '../asset/css/plan.less' 
import { Icon } from 'antd-mobile';
 
 export default class Instruction extends Component {
   render() {
    return (
      <div className={style.bgc}>
        
            <img  src={require('../asset/img/plan/01_06.png')}/>
            <img  src={require('../asset/img/plan/02_08.png')}/>
            <img  src={require('../asset/img/plan/03_09.png')}/>
            
            <img  src={require('../asset/img/plan/05_10.png')}/>
            <img  src={require('../asset/img/plan/06_11.png')}/>
            <div className={style.detailp}>
            <p>身故保险金:</p>
                <p>18周岁前(含18周岁生日当天)身故,给付已交保险费。18周岁后身故,给付基本保险金额。
                </p>
                <p> 80种重大疾病保险金:</p>
                <p>(一)首次重大疾病保险金</p>
                <p className={style.indentp}>给付基本保险金额</p>
                <p>(二)第二次重大疾病保险金</p>
                <p className={style.indentp}>给付基本保险金额</p>
                <p>(三)第三次重大疾病保险金</p>
                <p className={style.indentp}>  给付基本保险金额</p>
                <p>28种轻症疾病保险金: </p>
                <p>(一)首次轻症疾病保险金</p>
    
                <p className={style.indentp}>给付基本保险金额的20%</p>
                <p>(二)第二次轻症疾病保险金</p>
                <p className={style.indentp}>给付基本保险金额的20%</p>
                <p>(三)第三次轻症疾病保险金</p>
                <p className={style.indentp}>给付基本保险金额的20%</p>
                <p>重大疾病或轻症疾病豁免保险费</p>
                <p> 被保险人初次发生并被医院的专科医生确诊患有本合同约定的任何一项重大疾病或任何一项轻症疾病,我们将豁免疾病确诊日后本合同保险期间内的各期保险费。
                </p>
            </div>
      </div>     
    )}
 }   
  
 

 