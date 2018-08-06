import React, { Component } from 'react'
import style from './asset/css/mall.less'

export default class GoodsSpecList extends Component {

    render() {

        let specList = this.props.speList.map((item) => {
            return (
                <li key={item.pid}>
                    <h2>{item.name}</h2>
                    <div className={style.items}>
                        {item.values.map((items) => {
                            return (
                                <span onClick={e=>this.props.select(item.pid,items.vid)} className={`${items.vid == item.cid ? style.checked : ""}`} key={items.vid}>{items.name}</span>
                            )
                        })}
                    </div>
                </li>
            )
        })

        return (
            <ul className={style.sku_list_wrap}>
                {specList}
            </ul>
        )
    }
}
