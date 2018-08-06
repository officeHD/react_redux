import React, { Component } from 'react'
import Column from './public/Column'
import Icontitle from './public/Icontitle'
import style from './asset/css/main.less'
import { Toast } from 'antd-mobile';

export default class User extends Component {
  OnHandelChange(url) {
    // console.log(url);
    if (url) {
      window.location.href = `#/${url}`
    } else {
      Toast.info('未开放', 1);
    }
  }
  login() {
    window.location.href = `#/login`
  }
  render() {
    const { userData } = this.props;
    return (
      <div className={style.mainpage}>
        <div className={style.userCenter}>
          <div className={style.userBand}>
            {userData.isLogin ? <div className={style.userCard}>
              <div>
                <h3>徐成燕</h3>
                <span className={style.realName}>未实名</span><span className={style.level}>普通会员</span>
              </div>
              <div>
                <span className={style.agent}>不是代理人&gt;</span> <span className={style.apply}>申请代理，轻松拿佣金</span>
              </div>
            </div> : <div className={style.userCard} style={{ textAlign: "center", fontSize: "40px" }} onClick={this.login}>登录 / 注册</div>}
            <img onClick={e => this.OnHandelChange("myInfo")} className={style.avator} src={require("./asset/img/userdefault.png")} />
          </div>
          <div className={`mb15`}>
            <div className={`${style.grid} ${style.line}`} onClick={e => this.OnHandelChange()}>
              <div className={style.gridlist}>
                <span className="red largSize mb10">0.00</span>
                <span className="">余额</span>
              </div>
              <div className={style.gridlist} onClick={e => this.OnHandelChange()}>
                <span className="red largSize mb10">0</span>
                <span className="">积分</span>
              </div>
            </div>
          </div>
          <div className={`mb15`}>
            <div className={`${style.column} bb `}>
              <Column
                title={<span className="color333">我的保单</span>}
                content={<div className={style.titleName}>全部订单<span className="iconfont icon-arrow_right largSize gray"></span></div>}
                OnHandelChange={e => this.OnHandelChange()}
              />
            </div>
            <div className={`${style.grid} ${style.line}`}>
              <div className={style.gridlist}>
                <span className={`iconfont icon-safe largSize mb5 ${style.safeIcon}`}></span>
                <span className="">保障中</span>
              </div>
              <div className={style.gridlist}>
                <span className={`iconfont icon-pay_wait largSize mb5 ${style.waitIcon} `}></span>
                <span className="">待支付</span>
              </div>
              <div className={style.gridlist}>
                <span className={`iconfont icon-xufei largSize mb5 ${style.xufeiIcon}`}></span>
                <span className="">待续保</span>
              </div>

            </div>
          </div>
          <div className={`mb15`}>
            <div className={`${style.column} bb `}>
              <Column
                title={<span className="color333">我的订单</span>}
                content={<div className={style.titleName}>全部订单<span className="iconfont icon-arrow_right largSize gray"></span></div>}
                OnHandelChange={e => this.OnHandelChange()}
              />
            </div>
            <div className={`${style.grid}`}>
              <div className={style.gridlist}>
                <span className="iconfont icon-mall largSize mb5 gray"></span>
                <span className="">待付款</span>
              </div>
              <div className={style.gridlist}>
                <span className="iconfont icon-daifahuo largSize mb5 gray"></span>
                <span className="">待发货</span>
              </div>
              <div className={style.gridlist}>
                <span className="iconfont icon-daishouhuo largSize mb5 gray"></span>
                <span className="">待收货</span>
              </div>
              <div className={style.gridlist}>
                <span className="iconfont icon-services largSize mb5 gray"></span>
                <span className="">退货/售后</span>
              </div>
            </div>
          </div>
          <div className={`mb15`}>
            <div className={`${style.column} bb`}>
              <Column
                title={<Icontitle className={"iconfont icon-dianpu red"} content="我的微店" />}
                content={<span className="iconfont icon-arrow_right largSize gray"></span>}
                OnHandelChange={e => this.OnHandelChange("ProductManage")}
              />
            </div>
            <div className={`${style.column} bb`}>
              <Column
                title={<Icontitle className={"iconfont icon-yaoqing red"} content="邀请伙伴" />}
                content={<span className="iconfont icon-arrow_right largSize gray"></span>}
                OnHandelChange={e => this.OnHandelChange()}
              />
            </div>
            <div className={`${style.column} bb`}>
              <Column
                title={<Icontitle className={"iconfont icon-share red"} content="我的分享" />}
                content={<span className="iconfont icon-arrow_right largSize gray"></span>}
                OnHandelChange={e => this.OnHandelChange("myShare")}
              />
            </div>
          </div>
          <div className={style.userCenter}>
            <div className={`${style.column} bb`}>
              <Column
                title={<Icontitle className={"iconfont icon-search red"} content="保单查询" />}
                content={<span className="iconfont icon-arrow_right largSize gray"></span>}
                OnHandelChange={e => this.OnHandelChange("insureSearch")}
              />
            </div>
            <div className={`${style.column} bb`}>
              <Column
                title={<Icontitle className={"iconfont icon-claims red"} content="理赔申请" />}
                content={<span className="iconfont icon-arrow_right largSize gray"></span>}
                OnHandelChange={e => this.OnHandelChange()}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

