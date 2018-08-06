/*
 * @Author: haungDong 
 * @Date: 2018-07-18 12:00:35 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:49:28
 */
import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import AppAContainer from '../containers/AppAContainer'
import AppBContainer from '../containers/AppBContainer'
import AppCContainer from '../containers/AppCContainer'

export default class OutPut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }
  onChangeTab(val) {
    this.setState({
      selectedTab: val
    })
  }
  render() {
    return (
      <div>
        <TabBar unselectedTintColor="#999999" tintColor="#DA251E" barTintColor="white" prerenderingSiblingsNumber={0}  >
          <TabBar.Item
            icon={<div className={`iconfont icon-chanpin largSize`} style={{ color: "#999" }} />}
            selectedIcon={<div className="iconfont icon-chanpin largSize" style={{ color: "#DA251E" }} />}
            title="找产品" key="Life"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => { this.onChangeTab('redTab') }}
          >
            <AppAContainer />
          </TabBar.Item>
          <TabBar.Item
            icon={<div className={`iconfont icon-dengpao largSize`} style={{ color: "#999" }} />}
            selectedIcon={<div className="iconfont icon-dengpao largSize" style={{ color: "#DA251E" }} />}
            title="淘融界" key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => { this.onChangeTab('greenTab') }}
          >
            <AppBContainer />
          </TabBar.Item>
          <TabBar.Item
            icon={<div className={`iconfont icon-user_center  largSize`} style={{ color: "#999" }} />}
            selectedIcon={<div className="iconfont icon-user_center largSize" style={{ color: "#DA251E" }} />}
            title="个人中心" key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => { this.onChangeTab('yellowTab') }}
          >
            <AppCContainer />
          </TabBar.Item>
        </TabBar>
      </div>
    )
  };
}