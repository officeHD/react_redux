/*
 * @Author: haungDong 
 * @Date: 2018-08-06 18:23:59 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-08-06 18:39:38
 */
//选择类型
export const SELECT_SPEC = 'SELECT_SPEC';
//数量增加
export const INCREASE = 'INCREASE';
//数量减少
export const DECREASE = 'DECREASE';

//选择类型
export const selectSpec = (index, value) => {
    return {
        type: SELECT_SPEC,
        index,
        value
    }
}
//数量增加
export const increase = () => {
    return {
        type: INCREASE    
    }
}
//数量减少
export const decrease = () => {
    return {
        type: DECREASE    
    }
}