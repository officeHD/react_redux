import React, { Component } from 'react'
import style from './asset/css/address.less'
import Column from './public/Column'
export default class Address extends Component {
    state = {}
    saveAdd() {
        history.go(-2)
    }
    render() {
        return (
            <div className={style.add_address}>
                <div className={style.addressList}>
                    <Column title="收货人" content={<input placeholder="请输入收货人姓名" />} />
                </div>
                <div className={style.addressList}>
                    <Column title="联系电话" content={<input placeholder="请输入收货人电话" />} />
                </div>
                <div className={style.addressList}>
                    <Column title="所在地区" content={<div className={style.flexal}>请选择<span className="iconfont icon-arrow_right midSize" ></span></div>} />
                </div>
                <div className={style.addressList}>
                    <Column title="街道" content={<div className={style.flexal}>请选择 <span className="iconfont icon-arrow_right midSize" ></span></div>} />
                </div>
                <div className={style.addressList}>
                    <input placeholder="请输入详细地址" />
                </div>
                <div className={style.addressList}>
                    <Column title="设为默认" content={<div className={style.flexal}>  <img src={require("./asset/img/yes.png")} /></div>} />
                </div>
                <div className={style.actionBtn} onClick={this.saveAdd}>保存</div>
            </div>
        )
    }
}

