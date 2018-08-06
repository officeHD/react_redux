 
/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:37 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 14:28:35
 */
import * as act from './action';
let defaultState = {
  selectedTab: "redTab",
}

// 首页数据
export const tabBar = (state = defaultState, action = {}) => {
  switch (action.type) {

    case act.CHANGE_TAB_INDEX:
      return { ...state, selectedTab: action.value };
    default:
      return state;
  }
}
 