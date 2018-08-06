/*
 * @Author: haungDong 
 * @Date: 2018-07-18 11:59:55 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:53:24
 */
 
import React, { Component } from 'react'
import style from '../components/asset/css/main.less'
import { Toast } from 'antd-mobile';

export default class Product extends Component {
    state = { }
    OnHandelChange() {
        Toast.info('未开放', 1);
    }
    render() {
        // const { userShare } = this.props;
        return (
            <div>
                <div className={`${style.inputsearch} bb`}>
                    <span className={`iconfont icon-mulu largSize ${style.searchIcon}`}></span>
                    <input placeholder="请输入商品" />
                </div>
                <div className={`${style.grid} ${style.line} bb`}>
                    <div className={style.gridlist}>
                        <span className="">出售(26)</span>
                    </div>
                    <div className={style.gridlist}>
                        <span className="">仓库(13)</span>
                    </div>
                    <div className={style.gridlist}>
                        <span className="">售完(0)</span>
                    </div>
                </div>
                <div className={`${style.grid}  bb`}>
                    <div className={style.gridlist}>
                        <span className="">销量</span>
                    </div>
                    <div className={style.gridlist}>
                        <span className="">上架时间</span>
                    </div>
                    <div className={style.gridlist}>
                        <span className="">库存</span>
                    </div>
                </div>
            </div>
        )
    }
}

