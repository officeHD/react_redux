import React, { Component } from 'react'
import style from '../asset/css/public/Salelist.less'
import Column from './Column'
export default class Tabs extends Component {

    render() {
        const { list, activeIndex } = this.props;
        let currentList = list.filter((item, index) => item.type == activeIndex);

        let tabList = (<div>暂无该产品</div>);
        if (currentList.length > 0) {
            tabList = list.map((item, index) => {
                if(item.type !== activeIndex){
                    return false;
                }
                return (
                    <div key={index}>
                        <a className={style.items} href={item.url}>
                            <div className={style.item_icon}>
                            <img src={require("../asset/img/product/icon.png")} />
                            </div>
                            <div className={style.item_content}>
                                <h2>{item.title}</h2>
                                <div className={style.feature}>
                                    <label><span className={`iconfont icon-queding ${style.featureIcon}`}></span>投保年龄：{item.ageAtIssue}</label>
                                    <label><span className={`iconfont icon-queding ${style.featureIcon}`}></span>保障期限：{item.insurancePeriod}</label>
                                </div>
                                {item.point.map((item, index) => {
                                    return <div key={index} className="mb15"> <Column title={item.title} content={item.val} /></div>
                                })}
                                <div className="mtb20">
                                    <Column title={(<span className="red">￥<span className="largSize">{item.minPrice}</span>元起 &nbsp; 推广费{item.profit}</span>)}
                                        content={(<span className="gray">销量：{item.saleNum}</span>)} />
                                </div>
                            </div>
                        </a>
                    </div>
                )
            })
        }


        return (
            <div className={style.salelist}>

                {tabList}

            </div>
        )
    }
}
