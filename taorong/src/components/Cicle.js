import React, { Component } from 'react'
import style from './asset/css/main.less'
import Tabs from './public/Tabs'
import ListLearn from './ListLearn'
import ListAnimation from './ListAnimation'

export default class Cicle extends Component {
  state = {
    catalogIndex: '1'
  }
  changeActive(val) {
    this.setState({
      catalogIndex: val
    })
  }
  OnHandelChange() {
    Toast.info('未开放', 1);
  }
  render() {
    const { learingData } = this.props;
    return (
      <div className={style.mainpage}>
        <Tabs list={learingData.catalog} activeIndex={this.state.catalogIndex} changeActive={this.changeActive.bind(this)} />
        {this.state.catalogIndex == "1" ? <ListLearn list={learingData.learingList} /> : <ListAnimation list={learingData.animationList} />}
      </div>
    )
  }
}

