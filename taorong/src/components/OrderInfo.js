import React, { Component } from 'react'
import style from './asset/css/orderInfo.less'
import Column from '../components/public/Column'

export default class OrderInfo extends Component {
    state = {}
    render() {
        return (
            <div className={style.orderInfo}>
                <div className={style.company}>playboy时代万货专卖店</div>
                <div className={style.orderContent}>
                    <div className={style.img_cell} style={{ backgroundImage: "url('http://gw.alicdn.com/bao/uploaded/TB19C5QuXOWBuNjy0FiL6RFxVXa_270x270q90.jpg')" }}></div>
                    <div className={style.content_cell}>
                        <div className={style.title}>花花公子夏季休闲裤男韩版潮流长裤子修身薄款青年系带舒适小脚裤 </div>
                        <div className={style.sku_info}>颜色:VP6682BK灰色+VP568深灰 尺码:30</div>
                        <span className={style.item_icon_tip}>七天退换</span>
                    </div>
                    <div className={style.ext_cell}>
                        <div className={style.price}>￥129.00</div>
                        <div className={style.quantity}>X 1 </div>
                    </div>
                </div>
                <div className={style.order_items}>
                    <div className={style.order_item}>
                        <Column title="购买数量"
                            content={<div className={style.number}>
                                <button className={style.decrease}>-</button>
                                <input type="number" value={1} />
                                <button className={style.increase}>+</button>
                            </div>} />
                    </div>
                    <div className={style.order_item}>
                        <Column title="配送方式" content={<div className={style.flexal}>快递 免邮 <span className="iconfont icon-arrow_right midSize" ></span></div>} />
                    </div>
                    <div className={style.order_item}>
                        <Column title="运费险" content={<div className={style.flexal}>卖家送,确认收货前退货可赔 <span className="iconfont icon-arrow_right midSize" ></span></div>} />
                    </div>
                    <div className={style.order_item}>
                        给卖家留言：
                    </div>

                </div>
               
            </div>
        )
    }
}

