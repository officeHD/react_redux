import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './pages/App';

const login = (location, cb) => { require.ensure([], require => { cb(null, require('./pages/Login').default); }, 'login') }
const Goods = (location, cb) => { require.ensure([], require => { cb(null, require('./pages/Goods').default); }, 'Goods') }
const MyInfo = (location, cb) => { require.ensure([], require => { cb(null, require('./pages/MyInfo').default); }, 'MyInfo') }
const MyShare = (location, cb) => { require.ensure([], require => { cb(null, require('./pages/MyShare').default); }, 'MyShare') }
const MallList = (location, cb) => { require.ensure([], require => { cb(null, require('./pages/MallList').default); }, 'MallList') }
const AddAddress = (location, cb) => { require.ensure([], require => { cb(null, require('./pages/AddAddress').default); }, 'AddAddress') }
const AddressList = (location, cb) => { require.ensure([], require => { cb(null, require('./pages/AddressList').default); }, 'AddressList') }
const OrderConfirm = (location, cb) => { require.ensure([], require => { cb(null, require('./pages/OrderConfirm').default); }, 'OrderConfirm') }
const ProductManage = (location, cb) => { require.ensure([], require => { cb(null, require('./pages/ProductManage').default); }, 'ProductManage') }
const SearchInsurPolicy = (location, cb) => { require.ensure([], require => { cb(null, require('./pages/SearchInsurPolicy').default); }, 'SearchInsurPolicy') }

class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
                <Route path="/" component={App} />
                <Route path="/login" getComponent={login} />
                <Route path="/goods/*" getComponent={Goods} />
                <Route path="/myInfo" getComponent={MyInfo} />
                <Route path="/myShare" getComponent={MyShare} />
                <Route path="/mallList" getComponent={MallList} />
                <Route path="/addAddress" getComponent={AddAddress} />
                <Route path="/addressList" getComponent={AddressList} />
                <Route path="/orderConfirm" getComponent={OrderConfirm} />
                <Route path="/ProductManage" getComponent={ProductManage} />
                <Route path="/insureSearch" getComponent={SearchInsurPolicy} />
            </Router>
        )
    }
}
export default Routers