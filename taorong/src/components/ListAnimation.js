import React, { Component } from 'react'
import style from './asset/css/public/column.less'
import { Toast } from 'antd-mobile';
export default class ListAnimation extends Component {
    state = {
        catalogIndex: '1'
    }
    changeActive(val) {
        this.setState({
            catalogIndex: val
        })
    }
    onHandelChange() {
        Toast.info('未开放', 1);
    }
    render() {
        const { list } = this.props;
        let animateList = list.map((item, index) => {
            return (
                <div key={index} className={`${style.animateList}`} onClick={this.onHandelChange}>
                    <div className={style.img}><img src={require("./asset/img/animate.png")} /></div>
                    <p>{item.title}</p>
                </div>
            )
        })
        return (
            <div className={style.animate}>
                {animateList}
            </div>
        )
    }
}

