import React, { Component } from 'react'
import style from './asset/css/main.less'
import Tabs from './public/Tabs'
import Salelist from './public/Salelist'

export default class MallType extends Component {
    render() {
        const { mallData, changeType, changeActive } = this.props;
        return (
            <div>
                <div className={style.malltype}>
                    <div onClick={e => changeType('insure')} className={`${style.mallCard}   ${style.mallCard1} ${mallData.mallType === 'insure' ? style.current : ""}`}>
                        <div className={style.cardHeader}><h3><span className={`iconfont icon-jinrong ${style.cardIcon}`}></span> 金融管家</h3><span>155626</span> </div>
                        <p>保险产品（意外、重疾、年金、医疗）</p>
                        <p>信贷（讯车、迅医、讯娃）</p>
                    </div>
                    <div onClick={e => changeType('gift')} className={`${style.mallCard}  ${mallData.mallType === 'gift' ? style.current : ""}`}>
                        <div className={style.cardHeader}><h3><span className={`iconfont icon-shenghuo1 ${style.cardIcon}`}></span> 生活帮手</h3><span>155626</span> </div>
                        <p>礼品（讯车、迅医、讯娃）</p>
                    </div>

                </div>
                <Tabs list={mallData.catalog} activeIndex={mallData.catalogIndex} changeActive={changeActive} />
                <div className={style.salelist}>
                    <Salelist list={mallData.saleList} activeIndex={mallData.catalogIndex} />
                </div>

            </div>
        )
    }
}

