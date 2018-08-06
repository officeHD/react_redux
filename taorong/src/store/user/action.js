 
/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:37 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 12:00:00
 */
// 获取验证码
export const GET_CODE = 'GET_CODE';
// 保存用户信息
export const SET_USER_INFO = 'SET_USER_INFO';
// 清空数据
export const CLEARDATA = 'CLEARDATA';

// 保存表单数据
export const getCode = (value) => {
  return {
    type: GET_CODE,
    value
    
  }
}

// 保存图片地址
export const setUserInfo = obj => {
  return {
    type: SET_USER_INFO,
    obj,
  }
}

// 保存图片地址
export const clearData = () => {
  return {
    type: home.CLEARDATA,
  }
}