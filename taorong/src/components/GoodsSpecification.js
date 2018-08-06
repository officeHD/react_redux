import React, { Component } from 'react'
import style from './asset/css/mall.less'
import GoodsSpecList from './GoodsSpecList'
export default class Specification extends Component {
    payOrder() {
        window.location.href = "#/orderConfirm";
    }
    render() {
        if (!this.props.isShow) {
            document.getElementsByTagName('body')[0].classList.remove("pfixed");
            return null;
        }
        document.getElementsByTagName('body')[0].classList.add("pfixed");

        return (
            <div className={style.widgets_cover}>
                <div className={style.cover_bg}></div>
                <div className={style.cover_content}  >
                    <div className={style.sku_wrap}>
                        <div className={style.header}>
                            <div className={style.img_wrap}>
                                <img src="https://gw.alicdn.com/bao/uploaded/TB1bHneuf5TBuNjSspmL6SDRVXa_200x200Q50s50.jpg" />
                            </div>
                            <div className={style.main}>
                                <div className={style.price_wrap}><span className={style.price}>  ¥129 </span>  </div>
                                {/* <div className={style.stock}>库存 36件</div> */}
                                <div className={style.sku_info}>
                                    已选择:
                                        <span>VP568黑色 </span>
                                    <span>30</span>
                                </div>
                            </div>
                            <span className={`iconfont icon-guanbi ${style.sku_close}`} onClick={this.props.changeShow} ></span>
                        </div>
                        <div className={style.body}>
                            <div className={style.body_item}>
                                <div className={style.pre_mods_wrap}>
                                </div>
                                <div className={style.address_wrap}>
                                </div>
                                <GoodsSpecList speList={this.props.goodsData.spec} select={this.props.selectSpec} />
                                <ul className="bundle-sku-wrap"></ul>
                                <div className="mods-wrap"></div>
                                <div className="pickup-wrap">
                                    <section id="s-pickup">
                                    </section>
                                </div>
                                <div className="bundle-wrap">
                                </div>
                                <div className="services-wrap"></div>
                                <div className={style.number_wrap}>
                                    <div className={style.number_line}>
                                        <span className={style.num_name}>购买数量</span>
                                        <span className={style.limit_txt}></span>
                                        <div className={style.number}>
                                            <button onClick={e => this.props.decrease(this.props.goodsData.quantity)} className={style.decrease}>-</button>
                                            <input type="number" value={this.props.goodsData.quantity} />
                                            <button onClick={e => this.props.increase(this.props.goodsData.quantity)} className={style.increase}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="installment-wrap"></div>
                            </div>
                        </div>
                        <div className={style.footer}>
                            <a className={style.cart} role="button">加入购物车</a>
                            <a className={style.info} role="button"></a>
                            <a className={style.buy} role="button" onClick={this.payOrder}>立即购买</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
