import React, { Component } from 'react'
import style from './asset/css/address.less'
export default class Address extends Component {
    state = {}
    goList() {
        window.location.href = "#/addressList"
    }
    render() {
        return (
            <div className={style.address} onClick={this.goList}>
                {/* <div>
                    <span className={`iconfont icon-location ${style.addressIcon}`} style={{ marginRight: "15px" }}></span>
                </div> */}
                <div>
                    <div className={style.info}>
                        <div>收货人：  黄栋</div>
                        <div>18156925390</div>
                    </div>
                    <div className={style.detail}>  收货地址：安徽 合肥 瑶海 长淮 利港银河新城38栋306   </div>
                    {/* <div className={style.ext}>  (收货不便时,可选择免费代收货服务) </div> */}
                </div>
                <div>
                    <span className={`iconfont icon-arrow_right ${style.addressIcon}`}></span>
                </div>
            </div>
        )
    }
}

