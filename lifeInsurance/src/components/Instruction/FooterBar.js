import React ,{Component}from 'react'
import style from '../asset/css/Instruction.less'
import { Icon } from 'antd-mobile';
 
 export default class Instruction extends Component {
 
   render() {
    return (
      <div className={style.footer}>
        <ul>
          <li>
            <a target="_blank"  href={`${ctx}/static/pdf/anbang/anxl/product.pdf`}>
               <Icon type={require(`../asset/svg/xuzhi.svg`)}/><br/>
               信息披露
            </a>
          </li>
          <li>
            <a target="_blank"  href={`${ctx}/static/pdf/anbang/anxl/product.pdf`} >
              <Icon type={require(`../asset/svg/smile.svg`)}/><br/>
              理赔须知
            </a>
          </li>
          <li>
            <a target="_blank"  href={`${ctx}/static/pdf/anbang/anxl/product.pdf`} >
              <Icon type={require(`../asset/svg/tiaokuan.svg`)}/><br/>
              保险条款
            </a>
          </li>
        </ul>
      </div>     
    )}
 }   
  
 

 