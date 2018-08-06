import React, { Component } from 'react'
import style from './asset/css/orderInfo.less'
export default class OrderSubmit extends Component {
    render() {
        return (
            <div className={style.orderSubmit}>
                <div className={style.info_cell}>
                    <div className={style.info_conten}>  共1件，总金额￥129.00 </div>
                </div>
                <div className={style.action_cell}>
                    提交订单
                </div>
            </div>
        )
    }
}
