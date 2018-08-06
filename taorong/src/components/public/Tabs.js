import React, { Component } from 'react'
import style from '../asset/css/public/tabs.less'

export default class Tabs extends Component {

    render() {
        const { list, activeIndex, changeActive } = this.props;

        let tabList = list.map((item, index) => {
            return (
                <div key={index} onClick={e => changeActive(item.value)} className={`${style.items} ${item.value === activeIndex ? style.active : null}`} >{item.name}</div>
            )
        })
        return (
            <div className={style.tabs}>
                <div className={style.content}>
                    {tabList}
                </div>

            </div>
        )
    }
}
