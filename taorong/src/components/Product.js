import React, { Component } from 'react'
import Carousel from './public/Carousel'
import Tabs from './public/Tabs'
import Salelist from './public/Salelist'
import style from './asset/css/main.less'

export default class Product extends Component {
    render() {
        const { mainData, changeActive,goMall} = this.props;
        return (
            <div className={style.mainpage}>
                <div className={style.mainBanner}>
                    <Carousel Carousellist={mainData.Carousellist} type="img" dots={true} autoplay={false} imgHeight="350px" />
                </div>
                <div className={style.search_Area}>
                    <div className={style.search_input}>  <span className={`iconfont icon-soushuo ${style.searicon}`}> </span></div>
                    <span className={`iconfont icon-lingdang ${style.icon}`}>
                        <span className={style.badge}>3</span>
                    </span>
                </div>
                <div className={style.newsBanner}  >
                    <span className={`iconfont icon-laba ${style.icon}`}  ></span>
                    <div className={style.news}>
                        <Carousel Carousellist={mainData.NewsList} vertical={true} />
                    </div>
                </div>
                <div className={style.mainApp}>
                    <div className={style.mainTheme}>
                        <div className={style.themeContent}>
                            <h2>让爱回家</h2>
                            <p>健康、关爱先回家</p>
                        </div>
                        <div className={style.mainImg}>
                            <img src={require("./asset/img/main/01.png")} />
                        </div>
                    </div>
                    <div className={style.fixApp}>
                        <div className={style.fixApp1} onClick={e=>goMall("insure")}>
                            <div className={style.themeContent}>
                                <h2>金融管家</h2>
                                <p>保险、信贷</p>
                            </div>
                            <div className={style.mainImg}>
                                <img src={require("./asset/img/main/04.png")} />
                            </div>
                        </div>
                        <div className={style.fixApp2}  onClick={e=>goMall("gift")}>
                            <div className={style.themeContent}>
                                <h2>生活帮手</h2>
                                <p>礼品、迅车、迅医、讯娃</p>
                            </div>
                            <div className={style.mainImg}>
                                <img src={require("./asset/img/main/03.png")} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className={style.hotCenter}>
                    <div className={style.hotTitle}>
                        <img src={require("./asset/img/main/title.png")} />
                    </div>
                    <Tabs list={mainData.catalog} activeIndex={mainData.catalogIndex} changeActive={changeActive} />
                    <div className={style.mainSale}>
                        <img src={require("./asset/img/main/banner.png")} />
                    </div>
                    <div className={style.salelist}>
                        <Salelist list={mainData.hotSale} activeIndex={mainData.catalogIndex} />
                    </div>
                </div>
            </div>
        )
    }
}
