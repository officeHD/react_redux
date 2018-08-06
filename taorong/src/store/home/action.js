 
/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:37 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 12:00:23
 */
//  切换tab显示
export const CHANGE_TABINDEX = 'CHANGE_TABINDEX';
// 保存图片
export const SAVEIMG = 'SAVEIMG';
// 清空数据
export const CLEARDATA = 'CLEARDATA';

// 保存表单数据
export const changeTabIndex = (value) => {
  return {
    type: CHANGE_TABINDEX,
    value
  }
}

// 保存图片地址
export const saveImg = path => {
  return {
    type: home.SAVEIMG,
    path,
  }
}

// 保存图片地址
export const clearData = () => {
  return {
    type: home.CLEARDATA,
  }
}