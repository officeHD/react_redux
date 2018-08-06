 
/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:37 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 12:00:00
 */
import * as home from './action';


let myInfo = {
    avator: "http://192.168.1.234:8080/mstps/static/trscript/img/userdefault.png",
    gender: 0,
    phone: '',
    province: "安徽省",
    city: "合肥市",
    isRealName: false,
    bindCard: false,
    isLogin: false

}
// 我的信息
export const userInfo = (state = myInfo, action = {}) => {
    switch (action.type) {

        case home.SET_USER_INFO:
            return { ...state,isLogin:true, phone:16145121416,remain:302.23,integral:10032 };
        default:
            return state;
    }
}
let myShare = [
    {
        id: 1,
        name: "安邦随E乐两全保险",
        time: "2017-10-16",
        laud: 120,
        watch: 220,
        comment: 30,
        img: "http://192.168.1.234:8080/mstps/static/trscript/img/userdefault.png",
        url: "",

    }, {
        id: 2,
        name: "安邦安鑫利两全保险",
        time: "2017-10-16",
        laud: 1102,
        watch: 2000,
        comment: 56,
        img: "http://192.168.1.234:8080/mstps/static/trscript/img/userdefault.png",
        url: "",

    }, {
        id: 3,
        name: "安邦随E乐两全保险",
        time: "2017-10-16",
        laud: 120,
        watch: 220,
        comment: 30,
        img: "http://192.168.1.234:8080/mstps/static/trscript/img/userdefault.png",
        url: "",

    }, {
        id: 4,
        name: "安邦随E乐两全保险",
        time: "2017-10-16",
        laud: 120,
        watch: 220,
        comment: 30,
        img: "http://192.168.1.234:8080/mstps/static/trscript/img/userdefault.png",
        url: "",

    }, {
        id: 5,
        name: "安邦随E乐两全保险",
        time: "2017-10-16",
        laud: 120,
        watch: 220,
        comment: 30,
        img: "http://192.168.1.234:8080/mstps/static/trscript/img/userdefault.png",
        url: "",

    }
]

// 分享列表
export const userShare = (state = myShare, action = {}) => {
    switch (action.type) {

        case home.CHANGE_TABINDEX:
            return { ...state, catalogIndex: action.value };
        default:
            return state;
    }
}



