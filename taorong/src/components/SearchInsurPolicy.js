/*
 * @Author: haungDong 
 * @Date: 2018-07-18 12:00:31 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 14:47:13
 */
import React, { Component } from 'react'
import style from './asset/css/main.less'
import SureButton from './public/SureButton'
import { Toast } from 'antd-mobile';

export default class SearchInsurPolicy extends Component {
    state = {}
    OnHandelChange() {
        Toast.info('未开放', 1);
    }
    render() {
        // const { learingData } = this.props;
        return (
            <div className={`mtb20`} >
                <div className={`${style.inputBox}  ${style.bb}`}>
                    <input placeholder="投保人电话" />
                </div>
                <div className={style.inputBox} style={{ marginBottom: "80px" }}>
                    <input placeholder="投保人证件号码" />
                </div>
                <SureButton title="查询" OnHandelChange={this.OnHandelChange} />
            </div>
        )
    }
}

