import React, { Component } from 'react'
import style from './asset/css/address.less'
export default class AddressList extends Component {
    state = {}
    addAddress() {
        window.location.href = "#addAddress";
    }
    back() {
        window.history.back();
    }
    render() {
        return (
            <div style={{ paddingBottom: "120px" }}>
                <div className={`${style.address} ${style.addresslist}`}>
                    <div className={style.add_con} onClick={this.back}>
                        <div className={style.info}>
                            <div> 收货人：  黄栋 </div>
                            <div>  18156925390 </div>
                        </div>
                        <div className={style.detail}>  收货地址：安徽 合肥 瑶海 长淮 利港银河新城38栋306   </div>
                    </div>
                    <div className={style.add_icon}>
                        <div className={style.default_icon}> <span className={`iconfont icon-status_success ${style.defaultIcon} ${style.checked}`}>默认地址</span></div>
                        <div className={style.default_icon}>
                            <span className={`iconfont icon-bianji ${style.editicon}`}>编辑 </span>
                            <span className={`iconfont icon-shanchu ${style.editicon}`}>删除</span>
                        </div>
                    </div>
                </div>
                <div className={style.actionBtn} onClick={this.addAddress}>
                    新增收货地址
                </div>
            </div>
        )
    }
}

