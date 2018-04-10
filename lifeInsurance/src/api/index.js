import zAJAX from './z-ajax'
import data from '../reducers/data.json'
import { Toast } from 'antd-mobile';


// 获取价值保费
export const getRate = (state, cb) => {
    let data = {
        sex: state.insurantGender,
        age: state.insurantAge,
        payendyear: state.payMent[0] || 20,
        tbage: state.holderAge || 20,
        varietyCode: state.varietyCode || 16050,
        amnt: state.amnt
    }
    zAJAX(`${ctx}/app/hengqin/get_rate`, data, cb)
}


//获取用户信息
export const getPersonInfo = (workNum, key, cb) => {
    zAJAX(`${ctx}/appZhongan/personal/get_customer`, { workNum: workNum, key: key }, cb)
}
//获取地址
export const getAddressData = (cb) => {
    zAJAX(`${ctx}/static/asset/addressDatas`, '', cb)
}
//获取工作json
export const getJobList = (cb) => {
    zAJAX(`${ctx}/static/asset/jobListOther`, '', cb)
}

//投保
export const sendData = (state, cb) => {
    //被保人是投保人本人
    let self = state.forInsuredPerson[0] === "00"
    let fontImg = state.fontimg;
    let backImg = state.backimg;
    if (fontImg.indexOf("base64") < 0 || backImg.indexOf("base64") < 0) {
        fontImg = "";
        backImg = "";
    }
    let datas = {
        "orderId": state.orderId || '',
        "bizContent": {
            "agentCode": "WX00000002",
            "orderNo": "30052112281000010420",
            "payIntv": "12",
            "payPeriod": "20",
            "payPeriodFlag": "Y",
            "proposeDate": "2017-08-25",
            "saleItemId": "300516050",
            "salesChannel": "3005",
            "sumFirstPrem": 9240,
            "valDate": "2017-09-20",
            "count": 1,
            "extendBody": "",
            "appnt": {
                "address": state.holderAddressLabel.join("") + state.holderLocation,
                "birthday": state.holderBirthday,
                "cellphone": state.holderPhone,
                "certInvalidDate": state.certiNoEffictive,
                "certiCode": state.holderCertiNo,
                "certiType": state.holderCertiTypeVal,
                "province": state.holderAddressValue[0],
                "city": state.holderAddressValue[1],
                "urbanArea": state.holderAddressValue[2],
                "customerName": state.holderName,
                "mail": state.holderEmail,
                "nation": "CHN",
                "zipCode": state.holderZipCode,
                "esViewList": [{
                    "image": fontImg,
                    "imageType": "01"
                },
                {
                    "image": backImg,
                    "imageType": "02"
                }
                ],
                "gender": state.holderGender,
                "imparts": [{
                    "informContext": "",
                    "informId": "19",
                    "informReply": "0",
                    "sort": 1
                },
                {
                    "informContext": "",
                    "informId": "20",
                    "informReply": "0",
                    "sort": 2
                },
                {
                    "informContext": "",
                    "informId": "21",
                    "informReply": "0",
                    "sort": 3
                },
                {
                    "informContext": "",
                    "informId": "22",
                    "informReply": "0",
                    "sort": 4
                },
                {
                    "informContext": "",
                    "informId": "23",
                    "informReply": "0",
                    "sort": 5
                },
                {
                    "informContext": "",
                    "informId": "24",
                    "informReply": "0",
                    "sort": 6
                },
                {
                    "informContext": "",
                    "informId": "25",
                    "informReply": "0",
                    "sort": 7
                },
                {
                    "informContext": "",
                    "informId": "26",
                    "informReply": "0",
                    "sort": 8
                }
                ]

            },

            "insureds": [{
                "customerName": state.insurantName,
                "address": state.insurantAddressLabel.join("") + state.holderLocation,
                "birthday": state.insurantBirthday,
                "cellphone": state.insurantPhone,
                "certInvalidDate": "2021-07-19",
                "certiCode": state.insurantCertiNo,
                "certiType": state.insurantCertiTypeVal,
                "province": state.insurantAddressValue[0],
                "city": state.insurantAddressValue[1],
                "urbanArea": state.insurantAddressValue[2],
                "insuProvince": state.insurantAddressValue[0],
                "insuCity": state.insurantAddressValue[1],
                "insuUrbanArea": state.insurantAddressValue[2],
                "gender": state.insurantGender,
                "jobCategory": state.jobCategory[0],
                "relaToInsured": state.forInsuredPerson[0],
                "socialInsuFlag": "0",
                "isSatutoryBeneficiary": "0",
                "mail": "xiadandan@zhongan.io",
                "nation": "CHN",
                "zipCode": "111111",
                "bnfs": [{
                    "birthday": "1980-01-01",
                    "certInvalidDate": "9999-10-10",
                    "certiCode": "11010119800101007x",
                    "certiType": "0",
                    "customerName": "肖红",
                    "gender": "1",
                    "grade": 1,
                    "nation": "CHN",
                    "rate": 100,
                    "relation": "02",
                    "type": "2"
                }],
                "risks": [{
                    "amnt": 300000,
                    "insuYear": "1000",
                    "compensationRatio": "100",
                    "annualPayLimit": "100",
                    "lifePayLimit": "300 ",
                    "drawAge": "65 ",
                    "insuYearFlag": "Y",
                    "mult": 1,
                    "prem": state.fee,
                    "riskCode": "16050"
                }],
                "imparts": [{
                    "informContext": "",
                    "informId": "19",
                    "informReply": "0",
                    "sort": 1
                },
                {
                    "informContext": "",
                    "informId": "20",
                    "informReply": "0",
                    "sort": 2
                },
                {
                    "informContext": "",
                    "informId": "21",
                    "informReply": "0",
                    "sort": 3
                },
                {
                    "informContext": "",
                    "informId": "22",
                    "informReply": "0",
                    "sort": 4
                },
                {
                    "informContext": "",
                    "informId": "23",
                    "informReply": "0",
                    "sort": 5
                },
                {
                    "informContext": "",
                    "informId": "24",
                    "informReply": "0",
                    "sort": 6
                },
                {
                    "informContext": "",
                    "informId": "25",
                    "informReply": "0",
                    "sort": 7
                },
                {
                    "informContext": "",
                    "informId": "26",
                    "informReply": "0",
                    "sort": 8
                }
                ]



            }]

        }
    }
    zAJAX(`${ctx}/app/hengqin/insert_order`, { data: JSON.stringify(datas), workNum: state.workNum }, cb)
}

//支付
export const payOrder = (state, cb) => {
    let data = {
        "orderId": state.orderId,
        "bizContent": {
            "bankCode": "",
            "bankName": "",
            "bankNo": "",
            "callBackUrl": "",
            "certNo": "",
            "certType": "",
            "currency": "",
            "mobile": "",
            "payOrderNo": "",
            "proposalNo": "",
            "salesChannel": "",
            "tranAmt": "",
            "transId": "",
            "userName": "",
            "smsCode": state.smsCode
        }

    }
    zAJAX(`${ctx}/app/hengqin/pay`, data, cb)

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
    
    if (text === ''||!text) {
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
    zAJAX(`${ctx}/appZhongan/personal/detail`, { id: id }, cb)
}