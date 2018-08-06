/*
 * @Author: haungDong 
 * @Date: 2018-07-18 12:00:31 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:48:06
 */
import React, { Component } from 'react'
import AddressList from '../components/AddressList'

export default class OrderConfirm extends Component {
    state = {}
    render() {
        return (
            <div style={{ paddingBottom: "120px" }}>
                <AddressList />
            </div>
        )
    }
}

