import React ,{Component}from 'react'
import style from '../asset/css/Instruction.less'
import { Icon } from 'antd-mobile';
import { Link } from 'react-router';
 
export default class Instruction extends Component {
  constructor(props){
      super(props);  
  }
    
  render() {
    return (
      <div className={style.footer}>
        <ul>
          <li>
            <Link to="/SubFrame"  onClick={this.props.onClick}>
               <Icon type={require(`../asset/svg/xuzhi.svg`)}/><br/>
               投保须知
             </Link>
          </li>
          <li>
            <Link to="/SubFrame" onClick={this.props.onClick}>
              <Icon type={require(`../asset/svg/smile.svg`)}/><br/>
              理赔服务
            </Link>
            
          </li>
          <li>
            <Link to="/SubFrame" onClick={this.props.onClick}>
              <Icon type={require(`../asset/svg/tiaokuan.svg`)}/><br/>
              保险条款
            </Link>
          </li>
        </ul>
      </div>     
    )}
 }   
  
 

 