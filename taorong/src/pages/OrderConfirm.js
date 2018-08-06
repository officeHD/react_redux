/*
 * @Author: haungDong 
 * @Date: 2018-07-18 12:00:31 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:47:44
 */
import React, { Component } from 'react'
import Address from '../components/Address'
import OrderInfo from '../components/OrderInfo'
import PayType from '../components/PayType'
import OrderSubmit from '../components/OrderSubmit'

export default class OrderConfirm extends Component {
    state = {}
    render() {
        return (
            <div style={{ paddingBottom: "120px" }}>
                <Address />
                <OrderInfo />
                <PayType />
                <OrderSubmit />
            </div>
        )
    }
}

