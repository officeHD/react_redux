/*
 * @Author: haungDong 
 * @Date: 2018-07-18 12:00:08 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:52:12
 */
import React, { Component } from 'react'
import style from '../components/asset/css/main.less'
import { Toast } from 'antd-mobile';

export default class Product extends Component {
    state = {}
    OnHandelChange() {
        Toast.info('未开放', 1);
    }
    render() {
        const { userShare } = this.props;
        // console.log(userShare)
        let shareList = userShare.map((item, index) => {
            return (
                <div className={style.sharelist} key={index}>
                    <div className={style.listImg}>
                        <img src={require("../components/asset/img/product/icon.png")} />
                    </div>
                    <div className={style.listContent}>
                        <div className={style.Listtitle}><h2>{item.name}</h2> <span className={style.time}>{item.time}</span> </div>
                        <p>
                            <span className="iconfont icon-dianzan normalSize gray mr15"> ({item.laud}) </span>
                            <span className="iconfont icon-xiaoxi normalSize gray mr15"> ({item.comment}) </span>
                            <span className="iconfont icon-pass_show normalSize gray"> ({item.watch})</span>
                        </p>
                    </div>
                </div>
            )
        })
        return (
            <div className="mtb20">
                {shareList}
            </div>
        )
    }
}

