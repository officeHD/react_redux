import React, { Component } from 'react'
import style from '../asset/css/public/column.less'

export default class Tabs extends Component {
    render() {
        const { title, content, OnHandelChange } = this.props;
        return (
            <div className={style.column} onClick={OnHandelChange}>
                <div className={style.title}>{title}</div>
                <div className={style.content}>{content}</div>
            </div>
        )
    }
}
