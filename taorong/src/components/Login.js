/*
 * @Author: haungDong 
 * @Date: 2018-07-18 12:00:25 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:51:35
 */
import React, { Component } from 'react'
import style from '../components/asset/css/main.less'
import SureButton from '../components/public/SureButton'
import { Toast } from 'antd-mobile';

export default class Product extends Component {
    state = {
        dlgTipTxt: '获取验证码',
        seconds: 60
    }
    OnHandelChange() {
        if (!this.props.userInfo.phone) {
            Toast.info(`请输入手机号`, 1);
            return false;
        }
        this.props.SetUserInfo()
    }
    HandelClick() {
        if (!this.props.userInfo.phone) {
            Toast.info(`请输入手机号`, 1);
            return false;
        }
        if (this.state.seconds < 60) {
            Toast.info(`${this.state.seconds}s后重新获取`, 1);
            return false;
        }
        let siv = setInterval(() => {
            this.setState((preState) => ({
                seconds: preState.seconds - 1,
                dlgTipTxt: `已发送(${preState.seconds - 1}s重新发送)`,
            }), () => {
                if (this.state.seconds == 0) {
                    this.setState({
                        seconds: 60,
                        dlgTipTxt: '重新获取'
                    })
                    clearInterval(siv);
                }
            });
        }, 1000)
    }
    render() {
        const { userInfo } = this.props;
        return (
            <div className={`mtb20`} >
                <div className={`${style.inputBox}  ${style.bb}`}>
                    <input value={userInfo.phone} placeholder="请输入手机号" />
                </div>
                <div className={style.inputBox} style={{ marginBottom: "120px" }}>
                    <input placeholder="请输入验证码" maxLength={6} />
                    <span className={style.getCode} onClick={this.HandelClick.bind(this)}>{this.state.dlgTipTxt}</span>
                </div>
                <SureButton title="确定" OnHandelChange={this.OnHandelChange.bind(this)} />
            </div>
        )
    }
}

