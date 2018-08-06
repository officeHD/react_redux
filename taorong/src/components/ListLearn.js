import React, { Component } from 'react'
import Column from './public/Column'
import { Toast } from 'antd-mobile'
import style from './asset/css/public/column.less'

export default class ListLearn extends Component {
    state = { }
    OnHandelChange() {
        Toast.info('未开放', 1);
    }
    render() {
        const { list } = this.props;
        
        let learingList = list.map((item, index) => {
            return (
                <div key={index} className={`${style.learingList} bb`}>
                    <Column OnHandelChange={this.OnHandelChange}
                        title={<div className={style.listflex}><p>{item.title}</p><p>{item.shareNum}分享·{item.commentNum}评论</p></div>}
                        content={<div className={style.listImg}><img src={require("./asset/img/title.png")} /></div>}
                    />
                </div>
            )
        })
        return (
            <div>
                {learingList}
            </div>
        )
    }
}

