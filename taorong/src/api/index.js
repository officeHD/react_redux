import zAJAX from './z-ajax'
import datas from '../reducers/data.json'
import { Toast } from 'antd-mobile';


// 获取价值保费
export const getRate = (state, cb) => {
    let insurantAge = state.insurantAge;
    let insurantGender = state.insurantGender;
    let insurantAddressValue = state.insurantAddressValue;
    // if (state.forInsuredPerson[0].toString() === "00") {
    //     insurantAddressValue = state.holderAddressValue
    // }
    let baseMoney, insuYear;

    if (state.varietyCode == "14040") {
        baseMoney = 1000;
        insuYear = state.varietyData.drawAge[0];

    } else {

        if (state.varietyCode == "12030") {
            insuYear = state.varietyData.insuYear[0];
            baseMoney = ""
        } else if (state.varietyCode == "34010") {
            baseMoney = "1";
            insuYear = '';
        } else {
            baseMoney = "";
            insuYear = '';
        }


    }
   
    let data = {
        sex: insurantGender,
        age: insurantAge,
        payendyear: state.payMent[0],
        tbage: state.holderAge,
        varietyCode: state.varietyCode,
        amnt: state.amnt || 0,
        insuYear: insuYear,
        baseMoney: baseMoney,
        province: insurantAddressValue[0],
        city: insurantAddressValue[1]
    }
    zAJAX(`${ctx}/app/hengqin/get_rate`, data, cb)
}
//获取用户信息
export const getStaff = (workNum, cb) => {
    zAJAX(`${ctx}/lifeInsuranceApi/get_staff`, { workNum: workNum }, cb)
}

//获取用户信息
export const getPersonInfo = (workNum, key, cb) => {
    zAJAX(`${ctx}/mobile/lifeInsurance/anbang/get_customer`, { workNum: workNum, key: key }, cb)
}
//获取地址
export const getAddressData = (cb) => {
    zAJAX(`${ctx}/static/asset/addressDatas`, '', cb)
}
//获取工作json
export const getJobList = (cb) => {
    zAJAX(`${ctx}/static/asset/jobListOther`, '', cb)
}
//上传照片
export const uploadImage = (data,cb) => {
    zAJAX(`${ctx}/app/hengqin/upload`, data, cb)
}
//投保
export const sendData = (state, cb) => {
    //被保人是投保人本人
    let payMent = state.payMent[0];
    let payIntv, payPeriod, payPeriodFlag, drawAge, amnt, jobCategory;
    if (payMent === "趸交") {
        payIntv = "0";
        payPeriod = '1000';
        payPeriodFlag = "Y"
    } else {
        payIntv = "12";
        payPeriod = payMent;
        payPeriodFlag = "Y"
    }
    if (state.jobCategory[0] === '') {
        jobCategory = state.occupation.category4_code
    } else {
        jobCategory = state.jobCategory[0]
    }

    let insuYear, insuYearFlag, imparts, timparts;
    drawAge = '';
    amnt = state.amnt
    if (state.varietyCode == "12030") {
        insuYear = state.varietyData.insuYear[0];
        insuYearFlag = state.varietyData.insuYearFlag;
        if (amnt > 100000) {
            imparts = [
                { "informContext": "", "informId": "1", "informReply": "0", "sort": 1 },
                { "informContext": "", "informId": "2", "informReply": "0", "sort": 2 },
                { "informContext": "", "informId": "3", "informReply": "0", "sort": 3 },
                { "informContext": "", "informId": "4", "informReply": "0", "sort": 4 },
                { "informContext": "", "informId": "5", "informReply": "0", "sort": 5 },
                { "informContext": "", "informId": "6", "informReply": "0", "sort": 6 },
                { "informContext": "", "informId": "7", "informReply": "0", "sort": 7 },
                { "informContext": "", "informId": "8", "informReply": "0", "sort": 8 }
            ]
            timparts = imparts;

        } else {
            imparts = [
                { "informContext": "", "informId": "1", "informReply": "0", "sort": 1 },
                { "informContext": "", "informId": "2", "informReply": "0", "sort": 2 },
                { "informContext": "", "informId": "3", "informReply": "0", "sort": 3 },
                { "informContext": "", "informId": "4", "informReply": "0", "sort": 4 },
                { "informContext": "", "informId": "5", "informReply": "0", "sort": 5 },
                { "informContext": "", "informId": "6", "informReply": "0", "sort": 6 }
            ];
            timparts = imparts;
        }

    } else {
        insuYear = '1000';
        insuYearFlag = 'Y';
        imparts = [
            { "informContext": "", "informId": "1", "informReply": "0", "sort": 1 },
            { "informContext": "", "informId": "2", "informReply": "0", "sort": 2 },
            { "informContext": "", "informId": "3", "informReply": "0", "sort": 3 }
        ];
        timparts = imparts;
        if (state.varietyCode == "14040") {
            drawAge = state.varietyData.drawAge[0];
            amnt = state.amount
        } else if (state.varietyCode == "11010") {
            if (amnt >= 800000) {
                timparts = [
                    { "informContext": "", "informId": "1", "informReply": "0", "sort": 1 },
                    { "informContext": "", "informId": "2", "informReply": "0", "sort": 2 },
                    { "informContext": "", "informId": "3", "informReply": "0", "sort": 3 },
                    { "informContext": "", "informId": "4", "informReply": "0", "sort": 4 }]
            } else {
                timparts = [
                    { "informContext": "", "informId": "2", "informReply": "0", "sort": 1 },
                    { "informContext": "", "informId": "4", "informReply": "0", "sort": 2 }]
            }
            if (amnt > 800000 && state.insurantGender) {
                imparts = [
                    { "informContext": "", "informId": "1", "informReply": "0", "sort": 1 },
                    { "informContext": "", "informId": "2", "informReply": "0", "sort": 2 },
                    { "informContext": "", "informId": "3", "informReply": "0", "sort": 3 },
                    { "informContext": "", "informId": "4", "informReply": "0", "sort": 4 },
                    { "informContext": "", "informId": "5", "informReply": "0", "sort": 5 },
                    { "informContext": "", "informId": "6", "informReply": "0", "sort": 6 }
                ];

            } else if (state.insurantAge <= 2) {
                imparts = [
                    { "informContext": "", "informId": "1", "informReply": "0", "sort": 1 },
                    { "informContext": "", "informId": "2", "informReply": "0", "sort": 2 },
                    { "informContext": "", "informId": "3", "informReply": "0", "sort": 3 },
                    { "informContext": "", "informId": "4", "informReply": "0", "sort": 4 },
                    { "informContext": "", "informId": "5", "informReply": "0", "sort": 5 },
                    { "informContext": "", "informId": "7", "informReply": "0", "sort": 6 }
                ];
            } else {
                imparts = [
                    { "informContext": "", "informId": "1", "informReply": "0", "sort": 1 },
                    { "informContext": "", "informId": "2", "informReply": "0", "sort": 2 },
                    { "informContext": "", "informId": "3", "informReply": "0", "sort": 3 },
                    { "informContext": "", "informId": "4", "informReply": "0", "sort": 4 },
                    { "informContext": "", "informId": "5", "informReply": "0", "sort": 5 }
                ];

            }

        } else if (state.varietyCode == "16050") {
            imparts = [
                { "informContext": "", "informId": "1", "informReply": "0", "sort": 1 },
                { "informContext": "", "informId": "2", "informReply": "0", "sort": 2 },
                { "informContext": "", "informId": "3", "informReply": "0", "sort": 3 },
                { "informContext": "", "informId": "4", "informReply": "0", "sort": 4 },
                { "informContext": "", "informId": "5", "informReply": "0", "sort": 5 },
                { "informContext": "", "informId": "6", "informReply": "0", "sort": 6 },
                { "informContext": "", "informId": "7", "informReply": "0", "sort": 7 },
                { "informContext": "", "informId": "8", "informReply": "0", "sort": 8 },
                { "informContext": "", "informId": "9", "informReply": "0", "sort": 9 }
            ];
            timparts = imparts;
        }

    }
    let fontImg = state.fontimg;
    let backImg = state.backimg;
    let esViewList = [{
        "image": fontImg,
        "imageType": "01"
    },
    {
        "image": backImg,
        "imageType": "02"
    }]
    if (fontImg.indexOf("upload") < 0 || backImg.indexOf("upload") < 0) {
        esViewList = [];

    }
    let data = {
        "orderId": state.orderId || '',
        "bizContent": {
            "agentCode": "",
            "appnt": {
                "address": state.holderLocation,
                "birthday": state.holderBirthday,
                "cellphone": state.holderPhone,
                "certInvalidDate": state.certiNoEffictive,
                "certiCode": state.holderCertiNo,
                "certiType": state.holderCertiTypeVal,
                "city": state.holderAddressValue[1],
                "customerName": state.holderName,
                "esViewList": esViewList,
                "gender": state.holderGender,
                "imparts": timparts,
                "mail": state.holderEmail,
                "nation": "CHN",
                "province": state.holderAddressValue[0],
                "urbanArea": state.holderAddressValue[2],
                "zipCode": state.holderZipCode
            },
            "count":state.buyNum,
            "extendBody": "",
            "insureds": [{
                "address": state.insurantLocation,
                "birthday": state.insurantBirthday,
                "bnfs": [
                    //     {
                    //     "birthday": "",
                    //     "certInvalidDate": "",
                    //     "certiCode": "",
                    //     "certiType": "",
                    //     "customerName": "",
                    //     "gender": "",
                    //     "grade": 1,
                    //     "nation": "CHN",
                    //     "rate": 100,
                    //     "relation": "",
                    //     "type": ""
                    // }
                ],
                "cellphone": state.insurantPhone,
                "certInvalidDate": state.certInvalidDate,
                "certiCode": state.insurantCertiNo,
                "certiType": state.insurantCertiTypeVal,
                "city": state.insurantAddressValue[1],
                "customerName": state.insurantName,
                "gender": state.insurantGender,
                "imparts": imparts,
                "insuCity": state.insurantAddressValue[1],
                "insuProvince": state.insurantAddressValue[0],
                "insuUrbanArea": state.insurantAddressValue[2],
                "socialInsuFlag": "0",//医疗保险
                "isSatutoryBeneficiary": "1",//是否是法定受益人
                "jobCategory": jobCategory,
                "mail": state.insurantEmail,
                "nation": "CHN",
                "province": state.insurantAddressValue[0],
                "relaToInsured": state.forInsuredPerson[0],
                "risks": [{
                    "amnt": amnt,
                    "insuYear": insuYear,
                    "compensationRatio": "",
                    "annualPayLimit": "",
                    "lifePayLimit": " ",
                    "drawAge": drawAge,
                    "insuYearFlag": insuYearFlag,
                    "mult": 1,
                    "prem": state.fee,
                    "riskCode": state.varietyCode
                }],
                "urbanArea": state.insurantAddressValue[2],
                "zipCode": state.insurantZipCode
            }],
            "orderNo": "",
            "payIntv": payIntv,
            "payPeriod": payPeriod,
            "payPeriodFlag": payPeriodFlag,
            "proposeDate": "",
            "saleItemId": "",
            "salesChannel": "",
            "sumFirstPrem": state.fee,
            "valDate": ""
        }
    }
    zAJAX(`${ctx}/app/hengqin/insert_order`, { data: JSON.stringify(data), workNum: state.workNum }, cb)
}
//获取验证码
export const getMesCode = (state, cb) => {
    let data = {
        "orderId": state.orderId,
        "bizContent": {
            "bankAccType": "01",
            "bankCode": state.bankCode[0],
            "bankNo": state.bankNum,
            "certNo": "",
            "certType": "",
            "mobile": state.payPhone,
            "orderNo": "",
            "proposalNo": "",
            "salesChannel": "",
            "userName": state.holderName
        }
    }
    zAJAX(`${ctx}/app/hengqin/signPay`, { data: JSON.stringify(data), workNum: state.workNum }, cb)
}

//支付
export const payOrder = (state, cb) => {
    let bankName = ''
    datas.payBank.map((item, index) => {
        if (state.bankCode[0] === item.value) {
            bankName = item.label;
        }
    })
    let data = {
        "orderId": state.orderId,
        "bizContent": {
            "bankCode": state.bankCode[0],
            "bankName": bankName,
            "bankNo": state.bankNum,
            "callBackUrl": "",
            "certNo": "",
            "certType": "",
            "currency": "",
            "mobile": state.payPhone,
            "payOrderNo": "",
            "proposalNo": "",
            "salesChannel": "",
            "tranAmt": "",
            "transId": "",
            "userName": state.cardName,
            "smsCode": state.smsCode
        }

    }
    zAJAX(`${ctx}/app/hengqin/pay`, { data: JSON.stringify(data), workNum: state.workNum }, cb)

}

export const checkholder = (state) => {

    var pass = true;
    if (!state.holderCertiType && !checkData('投保人身份证', state.holderCertiNo)) {
        pass = false;
        return;
    }
    if (!checkData('投保人姓名', state.holderName) ||
        !checkData('投保人电话', state.holderPhone) ||
        !checkData('投保人证件号', state.holderCertiNo) ||
        !checkData('投保人出生日期', state.holderBirthday) ||
        !checkData('投保人证件有效期', state.certiNoEffictive) ||
        !checkData('投保人邮箱', state.holderEmail) ||
        !checkData('投保地区', state.holderAddressValue[2]) ||
        !checkData('投保人详细地址', state.holderLocation) ||
        !checkData('投保人邮政编码', state.holderZipCode)) {
        pass = false;
        return;
    }
    if(state.varietyCode==="16050"||state.varietyCode==="34010"||state.varietyCode==="14040"){
        if(state.holderAddressValue[0].toString()!=='440000'){
            Toast.info('该险种限定广东地区销售')
            pass = false;
            return;
        }
    }
    
    return pass;

}

export const checkInsurant = (state) => {

    var pass = true;
    if (!state.insurantCertiType && !checkData('被保人身份证', state.insurantCertiNo)) {
        pass = false;
        return;
    }
    if (!checkData('被保人姓名', state.insurantName) ||
        !checkData('被保人电话', state.insurantPhone) ||
        !checkData('被保人证件号', state.insurantCertiNo) ||
        !checkData('被保人出生日期', state.insurantBirthday) ||
        !checkData('被保人证件有效期', state.certInvalidDate) ||
        !checkData('被保人邮箱', state.insurantEmail) ||
        !checkData('被保地区', state.insurantAddressValue[2]) ||
        !checkData('被保人详细地址', state.insurantLocation) ||
        !checkData('被保人邮政编码', state.insurantZipCode)) {
        pass = false;
        return;
    }
    if(state.varietyCode==="16050"||state.varietyCode==="34010"||state.varietyCode==="14040"){
        if(state.insurantAddressValue[0].toString()!=='440000'){
            Toast.info('该险种限定广东地区销售')
            pass = false;
            return;
        }
    }
    return pass;

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

    if (text === '' || !text) {
        //非空验证
        Toast.info(`${str} 不得为空！`, 2);
        return false
    } else {
        //格式验证
        let reg;
        switch (true) {
            case str.indexOf('姓名') >= 0:
            case str.indexOf('持卡人') >= 0:
                reg = /^[\u4e00-\u9fa5]{2,10}$/;
                break;
            case str.indexOf('证件号码') >= 0:
            case str.indexOf('身份证') >= 0:
                reg = /(^[1-9]\d{5}[1-2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;
                break;
            case str.indexOf('证件有效期') >= 0:
            case str.indexOf('日期') >= 0:
                reg = /^[1-9]\d{3}-[0-1]\d-[0-3]\d$/;
                break;
            case str.indexOf('电话') >= 0:
            case str.indexOf('手机') >= 0:
                reg = /^1([3-9][0-9])[0-9]{8}$/;
                break;
            case str.indexOf('邮箱') >= 0:
                reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                break;
            case str.indexOf('邮政编码') >= 0:
                reg = /^[0-9]{6}$/;
                break;
            case str.indexOf('验证码') >= 0:
                reg = /^[0-9]{4,6}$/;
                break;

            default:
                reg = /[\s\S]*/;
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
    if (!pass) Toast.info(tip, 2);
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

//获取年龄
export const getAge = (val) => {

    let ageVal;
    let birthDate = new Date(val);
    let nowDateTime = new Date();
    ageVal = nowDateTime.getFullYear() - birthDate.getFullYear();
    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
        ageVal--;
    }
    if (ageVal === 0) {
        let diff = nowDateTime.valueOf() - birthDate.valueOf();
        let diff_day = parseInt(diff / (1000 * 60 * 60 * 24));
        if (diff_day < 28) {
            ageVal = 0.5;
        }
    }
    return ageVal;
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



//如果是编辑页面，初始化编辑数据
export const getEditDate = (state, id, cb) => {
    zAJAX(`${ctx}/app/hengqin/detail`, { id: id }, cb)
}