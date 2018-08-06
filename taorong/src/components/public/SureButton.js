import React, { Component } from 'react'
import style from '../asset/css/public/button.less'

export default class Tabs extends Component {

    render() {
        const { title,  OnHandelChange } = this.props;


        return (
            <div className={style.button} onClick={OnHandelChange}>
                 {title}
            </div>
        )
    }
}
