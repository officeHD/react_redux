import zAJAX from './z-ajax'
import data from '../reducers/data.json'
import { Toast } from 'antd-mobile';

//获取省市县数据
export const getAddressData = (cb) => {
    zAJAX(`${ctx}/static/asset/addressDatas`,'', cb)
}
// 获取职业数据
export const getJobList = (cb) => {
    zAJAX(`${ctx}/static/asset/jobListOther`,'', cb)
}

//获取用户信息
export const getPersonInfo = (staffId,key, cb) => {
    zAJAX(`${ctx}/appZhongan/personal/get_customer`, { workNum:staffId,key:key}, cb)
}
//如果是编辑页面，初始化编辑数据
export const getEditDate = (state, id, cb) => {
    zAJAX(`${ctx}/appZhongan/personal/detail`, { id: id }, cb)
}



//获取钱包账户余额
export const getBalance = (state, cb) => {
    zAJAX(`${ctx}/appZhongan/personal/get_staff`, { staffId: state.staffId }, cb)
}
//向后端获取数据
export const sendData = (state, type, cb) => {
    //被保人是投保人本人
    let self = state.insuredRelaToHolder === 0
    //安康守护卡的id字符串
    let cardsNum = data.ApplyNum[state.applyNum] - state.personPremium / 100
    let insuranceId = '';
    if (cardsNum) {
        let ids = []
        for (let i = 0; i < cardsNum; i++) {
            ids.push(state.cards[i].insuranceId)
        }
        insuranceId = ids.join(',')
    }
    let datas = {
        id: state.orderId, // 订单主键
        holderId: state.holderId, // 投保人id
        insuerId: state.insuerId, // 被保对象id
        channelOrderNo: state.insuredId, // 订单号
        effectiveDate: state.effectiveDate, // 保单起期
        staffId: state.staffId, //员工ID
        insureDate: "",
        requireInvoice: "Y",
        occupationCategory: state.occupation.occupationCategory, //被保人职业类别
        contactMail: state.holderEmail,
        insuranceId: insuranceId,
        personPremium: state.personPremium, //个人付款金额
        isEdit: state.isEdit,
        policyHolderType: "1",
        policyHolderUserName: state.holderName,
        policyHolderCertiType: data.HolderCertiTypeValue[state.holderCertiType], // 投保人证件类型 个人： I身份证
        policyHolderCertiNo: state.holderCertiNo, // 投保人证件号码
        policyHolderGender: data.HolderGenderValue[state.holderGender], // 投保人性别 M男 F女
        policyHolderBirthDate: state.holderBirthday, // 投保人出生日期
        policyHolderPhone: state.holderPhone, // 投保人名称
        insuredRelaToHolder: data.InsuredRelaToHolderValue[state.insuredRelaToHolder], //被保人与投保人的关系
        premium: 100 * data.ApplyNum[state.applyNum], //保费总价
        insurantUnit: data.ApplyNum[state.applyNum], //购买份数
        insuredList: [{
            insuredUserName: self ? state.holderName : state.insurantName, // 被保人名称
            insuredCertiType: data.HolderCertiTypeValue[(self ? state.holderCertiType : state.insurantCertiType)], // 被保人证件类型 个人： I身份证 
            insuredCertiNo: self ? state.holderCertiNo : state.insurantCertiNo, // 被保人证件号码
            insuredBirthday: self ? state.holderBirthday : state.insurantBirthday, // 被保人出生日期
            insuredPhone: self ? state.holderPhone : state.insurantPhone, // 被保人电话
            insuredGender: data.HolderGenderValue[(self ? state.holderGender : state.insurantGender)], // 被保人性别 M男 F女
            premium: 100 * data.ApplyNum[state.applyNum], //保费总价
        }]
    }
    //众安收银台
    if(type==="desk"){
        zAJAX(`${ctx}/appZhongan/personal/insert_card_order_free`, { data: JSON.stringify(datas) }, cb)
    }else{
        zAJAX(`${ctx}/appZhongan/personal/insert_card_order`, { data: JSON.stringify(datas),type:type }, cb)
    }
    
}



//验证安康守护卡的账号密码
export const submitCards = (state, cb) => {
    let cardsNum = data.ApplyNum[state.applyNum] - state.personPremium / 100
    let ids = [],
        pwd = [];
    for (let i = 0; i < cardsNum; i++) {
        ids.push(state.cards[i].insuranceId)
        pwd.push(state.cards[i].password)
    }
    let datas = {
        sumPremium: data.ApplyNum[state.applyNum] * 100, //众安核心保费
        personPremium: state.personPremium, //个人付款金额
        insuranceId: ids.join(','), //安康守护卡卡号
        password: pwd.join(','), //密码
        
    }
    zAJAX(`${ctx}/appZhongan/personal/ankang_login`, datas, cb)
}




//前往最后的页面
export const goToPayNormal = (state) => {
    window.location.href = './pay_card?insuredId=' + state.insuredId + '&sumPremium=' + 100 * state.applyNum + '&policyNo=' + state.policyNo + '&applyNum=' + state.applyNum + '&staffId=' + state.staffId

}

export const checkAge = (str, val) => {
    var tip = "";
    var pass = true;
    var userAge = calculatedAge(val);
    if (str === "投保人") {
        if (userAge < 18) {
            tip = "被保人年龄大于18周岁";
            pass = false;
        }
    } else {
        if (userAge < 18 || userAge > 65) {
            tip = "投保人年龄在18-65周岁";
            pass = false;
        }
    }
    if (!pass) alert(tip);
    return pass;

}

export const checkAgeReg = (type, holder, insurant) => {
    var tip = "";
    var pass = true;
    var holderage = calculatedAge(holder);
    var insurantage = calculatedAge(insurant);
    if (type === 2) {
        if (holderage <= insurantage) {
            tip = "被保人年龄应小于投保人";
            pass = false;
        }
    } else if (type === 3) {
        if (holderage >= insurantage) {
            tip = "被保人年龄应大于投保人";
            pass = false;
        }
    }
    if (!pass) alert(tip);
    return pass;

}
// 计算年龄
const calculatedAge = (val) => {
    let bbrAge;
    if (val != null && val != "") {
        if (val.length === 18) {
            let bbrBirthday = val.substr(6, 4) + "-" + val.substr(10, 2) + "-" + val.substr(12, 2);
            let strBirthday = val.substr(6, 4) + "/" + val.substr(10, 2) + "/" + val.substr(12, 2);

            let birthDate = new Date(strBirthday);
            let nowDateTime = new Date();
            bbrAge = nowDateTime.getFullYear() - birthDate.getFullYear();
            if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
                bbrAge--;
            }
        }
    }
    return bbrAge;
}


//校验数据有效性
export const checkData = (str, text) => {
    if (text === '') {
        //非空验证
        Toast.info(`${str} 不得为空！`, 2);
        return false
    } else {
        //格式验证
        let reg;
        switch (true) {
            case str.indexOf('姓名') >= 0:
                reg = /^[\u4e00-\u9fa5]{2,10}$/;
                break;
            case str.indexOf('证件号码') >= 0:
            case str.indexOf('身份证') >= 0:
                reg = /(^[1-9]\d{5}[1-2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;
                break;
            case str.indexOf('日期') >= 0:
                reg = /^[1-2]\d{3}-[0-1]\d-[0-3]\d$/;
                break;
            case str.indexOf('电话') >= 0:
            case str.indexOf('手机') >= 0:
                reg = /^(13[0-9]|14[57]|15[012356789]|17[678]|18[0-9])[0-9]{8}$/;
                break;
            case str.indexOf('邮箱') >= 0:
                reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                break;
            case str.indexOf('卡单卡号') >= 0:
                reg = /^[a-zA-Z0-9]{12}$/;
                break;
            case str.indexOf('卡单密码') >= 0:
                reg = /^[a-zA-Z0-9]{6}$/;
                break;
            case str.indexOf('邮政编码') >= 0:
                reg = /^[0-9]{6}$/;
                break;
            default:
                reg = /^\w+$/;
                break
        }
        if (!reg.test(text)) {
            Toast.info(`${str} 格式不正确！`, 2);
            return false;
        }
        return true;
    }
}

export const IdentityCodeValid = (code) => {
    var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
    var tip = "";
    var pass = true;
    var code15 = /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/;
    var code18 = /(^[1-9]\d{5}[1-2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;

    if (!code || !code18.test(code)) {
        tip = "身份证号格式错误";
        pass = false;
    } else if (!city[code.substr(0, 2)]) {
        tip = "身份证地址编码错误";
        pass = false;
    } else {
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位
            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if (parity[sum % 11] != code[17]) {
                tip = "身份证校验位错误";
                pass = false;
            }
        }
    }
    if (!pass) Toast.info(tip,2);
    return pass;
}


//数字前补零
const tran_val = (val) => {
    if ((val - 0) < 10) {
        val = "0" + val;
    }
    return val;
}

//日期转字符串
export const dateToString = (time) => {
    const datenew = new Date(time);
    const year = datenew.getFullYear();
    const month = tran_val(datenew.getMonth() + 1);
    const date = tran_val(datenew.getDate());
    return year + '-' + month + '-' + date;
}

//从地址栏里获取数据
export const getDataFromUrl = (name) => {
    //构造一个含有目标参数的正则表达式对象  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数  
    var r = window.location.search.substr(1).match(reg);
    //返回参数值  
    if (r !== null) return unescape(r[2]);
    return null;
}

