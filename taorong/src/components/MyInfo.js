/*
 * @Author: haungDong 
 * @Date: 2018-07-18 12:00:15 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:51:53
 */
import React, { Component } from 'react'
import style from './asset/css/main.less'
import Column from './public/Column'
import { Toast } from 'antd-mobile';

export default class Product extends Component {
    state = {}
    OnHandelChange() {
        Toast.info('未开放', 1);
    }
    render() {
        const { userInfo } = this.props;
        return (
            <div className="mtb20">
                <div className="bgcf mb15" style={{ padding: "0 15px" }}>
                    <Column
                        title={<span className="color333">头像</span>}
                        content={<div className={style.titleNameh}>
                            <img src={require("../components/asset/img/userdefault.png")} />
                            <span className="iconfont icon-arrow_right midSize gray"></span></div>}
                        OnHandelChange={this.OnHandelChange}
                    />
                </div>
                <div className="bgcf mb15" style={{ padding: "0 15px" }}>
                    <div className="bb">
                        <Column
                            className="bb"
                            title={<span className="color333">性别</span>}
                            content={<div className={style.titleName}>
                                {userInfo.gender ? "女" : "男"}
                                <span className="iconfont icon-arrow_right midSize gray"></span></div>}
                            OnHandelChange={this.OnHandelChange}
                        />
                    </div>
                    <div className="bb">
                        <Column
                            className="bb"
                            title={<span className="color333">手机号</span>}
                            content={<div className={style.titleName}>
                                {userInfo.phone ? userInfo.phone : "请设置"}
                                <span className="iconfont icon-arrow_right midSize gray"></span></div>}
                            OnHandelChange={this.OnHandelChange}
                        />
                    </div>
                    <Column
                        className="bb"
                        title={<span className="color333">所在地区</span>}
                        content={<div className={style.titleName}>
                            {userInfo.city ? userInfo.city : "请选择"}
                            <span className="iconfont icon-arrow_right midSize gray"></span></div>}
                        OnHandelChange={this.OnHandelChange}
                    />
                </div>
                <div className="bgcf mb15" style={{ padding: "0 15px" }}>
                    <div className="bb">
                        <Column
                            className="bb"
                            title={<span className="color333">实名认证</span>}
                            content={<div className={style.titleName}>
                                {userInfo.isRealName ? '已认证' : "未认证"}
                                <span className="iconfont icon-arrow_right midSize gray"></span></div>}
                            OnHandelChange={this.OnHandelChange}
                        />
                    </div>

                    <Column
                        className="bb"
                        title={<span className="color333">银行卡</span>}
                        content={<div className={style.titleName}>
                            {userInfo.bindCard ? '已绑定' : "未绑定"}
                            <span className="iconfont icon-arrow_right midSize gray"></span></div>}
                        OnHandelChange={this.OnHandelChange}
                    />
                </div>
            </div>
        )
    }
}

