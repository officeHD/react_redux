/*
 * @Author: haungDong 
 * @Date: 2018-07-18 12:00:31 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-08-06 19:05:45
 */
import React, { Component } from 'react'
import Carousel from './public/Carousel'
import Tabs from './public/Tabs'
import Column from './public/Column'
import GoodsImg from './GoodsImg'
import GoodsSpecification from './GoodsSpecification'
import style from './asset/css/mall.less'

export default class Goods extends Component {
    state = {
        tablist: [{ name: "图文详情", value: '1' }, { name: "产品参数", value: '2' }],
        tabactive: "1",
        isShowSpe: false
    }
    changeActive(val) {
        this.setState({
            tabactive: val
        })
    }
    changeShow() {
        this.setState({
            isShowSpe: !this.state.isShowSpe
        })
    }
    render() {
        let { goodsData, selectSpec, increase, decrease } = this.props;
        let ProductParame = goodsData.parame.map((item, index) => {
            return <div key={index} style={{ backgroundColor: "#fff", padding: "25px 10px", borderBottom: "1PX solid #ccc" }}>
                <Column title={item.title} content={item.content} />
            </div>
        })
        return (
            <div className={style.mainGood} >
                <Carousel Carousellist={[{ target: '222' }, { target: '222' }, { target: '222' }]} type="img" dots={true} autoplay={false} imgHeight="380px" />
                <div className={style.goodDetail} >
                    <h3  >{goodsData.goodsName}</h3>
                    <p>
                        <span style={{ color: "#DA251E" }}>￥<b style={{ fontSize: "34px" }}>{goodsData.price}</b>
                        </span> &nbsp;  <s style={{ color: "#999" }}>￥{goodsData.oprice}</s>
                    </p>
                    <div className={style.goddTitle} >
                        <span>运费：{goodsData.postage}</span>
                        <span> 销量：{goodsData.sales}瓶</span>
                        <span>发货地：{goodsData.delivery}</span>
                    </div>
                    <div className={style.listItem}  >
                        <Column title="售后保障：" content="7天退货、闪电发货" />
                    </div>
                    <div className={style.listItem} >
                        <Column title="配送方式：" content="民盛配送" />
                    </div>
                </div>
                <div className={style.goodspec} onClick={this.changeShow.bind(this)}>
                    <Column title="规格" content={<span className="iconfont icon-arrow_right" ></span>} />
                </div>
                <div style={{ display: "flex", position: "fixed", bottom: "0", left: "0", height: "100px", width: "100%", lineHeight: "100px", fontSize: "30px" }} >
                    <div style={{ flex: "1", paddingLeft: "10px", background: "#fff", color: "#DA251E" }}>￥288</div>
                    <div style={{ flex: "1", textAlign: "center", background: "#FFA800", color: "#fff" }}>加入购物车</div>
                    <div style={{ flex: "1", textAlign: "center", background: "#DA251E", color: "#fff" }} onClick={this.changeShow.bind(this)}>立即购买</div>
                </div>
                <Tabs list={this.state.tablist} activeIndex={this.state.tabactive} changeActive={this.changeActive.bind(this)} />
                {this.state.tabactive === "1" ? <GoodsImg list={goodsData.imglist} /> : ProductParame}
                <GoodsSpecification
                    selectSpec={selectSpec}
                    goodsData={goodsData}
                    isShow={this.state.isShowSpe}
                    changeShow={this.changeShow.bind(this)}
                    decrease={decrease}
                    increase={increase}
                />
            </div>
        )
    }
}

