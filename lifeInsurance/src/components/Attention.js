import React, { Component } from 'react'
import style from './asset/css/index.less'
 
export default class Attention extends Component {
  render() {
    return (
      <div className={style.attention}>
        <div className={style.attlist}>
            <input type="checkbox" defaultChecked="checked" onChange={this.props.onchangeA} />我已阅读并同意此保险的<br/>
            <a  target="_blank" href="http://static.e-hqins.com/2017-08-29/a2ccfaad-c657-42f3-aa2a-c443bac3d37f">保险条款</a><span className={style.whitespace}></span>
            <a   target="_blank" href="http://static.e-hqins.com/2017-08-29/a2ccfaad-c657-42f3-aa2a-c443bac3d37f">投保须知</a><span className={style.whitespace}></span>
            <a   target="_blank" href="http://static.e-hqins.com/2017-08-29/a2ccfaad-c657-42f3-aa2a-c443bac3d37f">人身保险投保提示书</a><span className={style.whitespace}></span>
            <a  target="_blank" href="http://static.e-hqins.com/2017-08-29/a2ccfaad-c657-42f3-aa2a-c443bac3d37f">告知声明</a>
        </div>
        <div className={style.attlist}>
            <input type="checkbox" defaultChecked="checked" onChange={this.props.onchangeB}/>本人声明本投保人仅为 
            <a  target="_blank" href="http://static.e-hqins.com/2017-08-29/a2ccfaad-c657-42f3-aa2a-c443bac3d37f">中国税收居民</a>
        </div>
      </div>
    )
  };
}