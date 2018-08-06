 
/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:37 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 12:00:00
 */
//  切换tab显示
export const CHANGE_TAB_INDEX = 'CHANGE_TAB_INDEX';
export const CHANGE_MALL_TYPE = 'CHANGE_MALL_TYPE';
export const CHANGE_MALL_ACTIVE = 'CHANGE_MALL_ACTIVE';


//  切换tab显示
export const changeTab = (value) => {
    return {
        type: CHANGE_TAB_INDEX,
        value
    }
}
//   
export const changeMallType = (value) => {
    return {
        type: CHANGE_MALL_TYPE,
        value
    }
}
export const changeActive = (value) => {
    return {
        type: CHANGE_MALL_ACTIVE,
        value
    }
}


