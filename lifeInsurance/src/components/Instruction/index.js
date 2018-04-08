import React,{Component} from 'react'
import TitleBarContainer from '../../containers/TitleBarContainer'
import Tab from './Tab'
import Footer from './Footer'
import Plan from './Plan'
import { Link } from 'react-router'
import style from '../asset/css/Instruction.less'
const  triggerfn=function() {
  var hashLocation = location.hash;
  var hashSplit = hashLocation.split("#/");
  var hashName = hashSplit[1];
  console.log(hashName);
  if (!hashName) {
      alert('後退按鈕點擊');
    return false;
  }
}
export default class Out extends Component {
 
  componentDidMount () {
     
  }
  
  render(){ 
    return (
      <div className={style.pbottom}>
        <TitleBarContainer />
        <img className={style.top_img} src={require('../asset/img/banner/banner_anxinli.jpg')}/>
        <div className={style.words}><p>多重保障，欢乐无忧</p><span>一次购买，省心省银两</span></div>
        <Plan/>
     
        <Footer />
        <ul className={this.props.type?style.bottom_b:style.bottom_btns } >
          <li>价格：￥100</li>
          {this.props.type? <li className={this.props.staffId?style.share:style.default} onClick={e=>this.props.onShare(this.props.staffId?1:0)}>发给客户</li>:''}
          <li onClick={e=>this.props.onGoToStep(this.props.staffId?1:0)} className={this.props.staffId?style.normal:style.default}>立即投保 </li>
        </ul>
      </div>
    )
  }
}
 