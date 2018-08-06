import React, { Component } from 'react'
import style from './asset/css/orderInfo.less'
import Column from '../components/public/Column'

export default class PayType extends Component {
    render() {
        return (
            <div className={style.orderInfo}>
                <div className={style.company}>付款方式</div>
                <div className={style.order_items}>
                    <div className={style.order_item}>
                        <Column title="账户余额" content={<div className={style.flexal}>余额：500元  <img src={require("./asset/img/no.png")} /></div>} />
                    </div>
                    <div className={style.order_item}>
                        <Column title="支付宝/微信" content={<div className={style.flexal}>  <img src={require("./asset/img/no.png")} /></div>} />
                    </div>
                </div>
            </div>
        )
    }
}
