import React, { Component } from 'react'
import style from '../asset/css/public/column.less'

export default class Tabs extends Component {
    render() {
        const { className, content } = this.props;
        return (
            <div className={style.icontitle}> 
                <span className={`${className} ${style.icon}`} >
                </span>
                <div className={style.content}>{content}</div>
            </div>
        )
    }
}
