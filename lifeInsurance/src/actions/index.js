import * as api from '../api'
import { uploadCardImg } from '../api/uploadImg'
import data from '../reducers/data.json'
import { Toast } from 'antd-mobile';

export const SET_TITLE_NAME = 'SET_TITLE_NAME'
export const SET_PAY_MENT = 'SET_PAY_MENT'
export const SET_INIT_AMNT = 'SET_INIT_AMNT'

export const SET_VARIETY_CODE = 'SET_VARIETY_CODE'
export const CHANGE_TYPE = 'CHANGE_TYPE'
export const CHANGE_HOLDER_NAME = 'CHANGE_HOLDER_NAME'
export const CHANGE_HOLDER_CERTI_TYPE = 'CHANGE_HOLDER_CERTI_TYPE'
export const CHANGE_HOLDER_NO = 'CHANGE_HOLDER_NO'
export const CHANGE_HOLDER_GENDER = 'CHANGE_HOLDER_GENDER'
export const CHANGE_HOLDER_BIRTHDAY = 'CHANGE_HOLDER_BIRTHDAY'
export const CHANGE_HOLDER_PHONE = 'CHANGE_HOLDER_PHONE'
export const CHANGE_HOLDER_EMAIL = 'CHANGE_HOLDER_EMAIL'
export const CHANGE_HOLDERLOCATION = 'CHANGE_HOLDERLOCATION'
export const CHANGE_HOLDER_ZIPCODE = 'CHANGE_HOLDER_ZIPCODE'
export const CHANGE_HOLDER_AGE = 'CHANGE_HOLDER_AGE'


export const CHANGE_INSURANT_NAME = 'CHANGE_INSURANT_NAME'
export const CHANGE_INSURANT_CERTI_TYPE = 'CHANGE_INSURANT_CERTI_TYPE'
export const CHANGE_INSURANT_NO = 'CHANGE_INSURANT_NO'
export const CHANGE_INSURANT_GENDER = 'CHANGE_INSURANT_GENDER'
export const CHANGE_INSURANT_BIRTHDAY = 'CHANGE_INSURANT_BIRTHDAY'
export const CHANGE_INSURANT_AGE = 'CHANGE_INSURANT_AGE'
export const CHANGE_INSURANT_PHONE = 'CHANGE_INSURANT_PHONE'
export const CHANGE_INSURANT_EMAIL = 'CHANGE_INSURANT_EMAIL'
export const CHANGE_INSURANT_LOCATION = 'CHANGE_INSURANT_LOCATION'
export const CHANGE_INSURANT_ZIPCODE = 'CHANGE_INSURANT_ZIPCODE'


export const CHANGE_FOR_INSURED = 'CHANGE_FOR_INSURED'
export const CHANGE_APPLY_NUM = 'CHANGE_APPLY_NUM'
export const SHOW_SELECTOR = 'SHOW_SELECTOR'
export const CLOSE_SELECTOR = 'CLOSE_SELECTOR'
export const CHANGE_CONTACT_CERTI_TYPE = 'CHANGE_CONTACT_CERTI_TYPE'
export const CHANGE_CAR_TYPE = 'CHANGE_CAR_TYPE'
export const CHANGE_USING_TYPE = 'CHANGE_USING_TYPE'
export const CHANGE_APPROVED_SEATS = 'CHANGE_APPROVED_SEATS'
export const CHANGE_EFFECTIVE_DATE = 'CHANGE_EFFECTIVE_DATE'
export const CHANGE_IDS = 'CHANGE_IDS'
export const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING'
export const CHANGE_STAFF_ID = 'CHANGE_STAFF_ID'
export const CHANGE_WORK_NUM = 'CHANGE_WORK_NUM'
export const INIT_PROVINCE_DATA = 'INIT_PROVINCE_DATA'
export const INIT_CITY_DATA = 'INIT_CITY_DATA'
export const INIT_COUNTY_DATA = 'INIT_COUNTY_DATA'
export const SHOW_LI_SELECTOR = 'SHOW_LI_SELECTOR'
export const CLOSE_LI_SELECTOR = 'CLOSE_LI_SELECTOR'
export const CHANGE_PROVINCE = 'CHANGE_PROVINCE'
export const CHANGE_CITY = 'CHANGE_CITY'
export const CHANGE_COUNTY = 'CHANGE_COUNTY'
export const INIT_EDIT_DATA = 'INIT_EDIT_DATA'
export const CHANGE_BALANCE = 'CHANGE_BALANCE'
export const CHANGE_IS_ZA_CASHIER = 'CHANGE_IS_ZA_CASHIER'
export const CHANGE_IS_OTHER_WAY = 'CHANGE_IS_OTHER_WAY'
export const CHANGE_PERSON_PREMIUM = 'CHANGE_PERSON_PREMIUM'
export const CHANGE_CARDS = 'CHANGE_CARDS'

export const CHANGE_OCCUPATION_SHOW = 'CHANGE_OCCUPATION_SHOW'
export const GO_BACK_STEP = 'GO_BACK_STEP'
export const CHOICE_IND = 'CHOICE_IND'
export const CLICK_JOB = 'CLICK_JOB'
export const CLOSE_OCCUPATION_SHOW = 'CLOSE_OCCUPATION_SHOW'
export const INIT_USER_DATA = 'INIT_USER_DATA'
export const CLEAR_ID = 'CLEAR_ID'
export const CHANGE_HOLDERADDRESSVALUE = 'CHANGE_HOLDERADDRESSVALUE'
export const CHANGE_HOLDERADDRESSLABEL = 'CHANGE_HOLDERADDRESSLABEL'
export const CHANGE_INSURANTADDRESSVALUE = 'CHANGE_INSURANTADDRESSVALUE'
export const CHANGE_INSURANTADDRESSLABEL = 'CHANGE_INSURANTADDRESSLABEL'
export const CHANGE_JOB_CATEGORY = 'CHANGE_JOB_CATEGORY'
export const CHANGE_JOB_CATEGORY_LABEL = 'CHANGE_JOB_CATEGORY_LABEL'
export const CLICK_JOBS = 'CLICK_JOBS'
export const CHANGE_EFFICTIVE = 'CHANGE_EFFICTIVE'
export const CHANGE_INVALI_DATE = 'CHANGE_INVALI_DATE'

export const CHANGE_CARD_IMG = 'CHANGE_CARD_IMG'
export const CHANGE_ATTENA = 'CHANGE_ATTENA'
export const CHANGE_ATTENB = 'CHANGE_ATTENB'
export const CHANFE_FEE = 'CHANFE_FEE'
export const CHANGE_BUYNUM = 'CHANGE_BUYNUM'
export const CHANGE_PAYMENT = 'CHANGE_PAYMENT'
export const CHANGE_SECOND = 'CHANGE_SECOND'
export const CHANGE_SMSCODE = 'CHANGE_SMSCODE'
export const CHANGE_PAYPHONE = 'CHANGE_PAYPHONE'
export const CHANGE_BANKNUM = 'CHANGE_BANKNUM'
export const CHANGE_BANK_CODE = 'CHANGE_BANK_CODE'
export const CHANGE_TAB = 'CHANGE_TAB'
export const INIT_ORDERID = 'INIT_ORDERID'
export const CHECK_HEALTHY = 'CHECK_HEALTHY'
 




//改变保费
export const setVarietyCode = (val) => ({
    type: SET_VARIETY_CODE,
    val,
})


//改变保费
export const changeFee = (val) => ({
    type: CHANFE_FEE,
    val,
})

//改变份数
export const changeBuyNum = (val) => ({
    type: CHANGE_BUYNUM,
    val,
})

//改变年期
export const changePayMent = (val) => ({
    type: CHANGE_PAYMENT,
    val,
})
//改变倒计时
export const changeSecond = (val) => ({
    type: CHANGE_SECOND,
    val,
})

// 清除ID
export const clearId = () => ({
    type: CLEAR_ID
})

//运行环境
export const changeType = () => ({
    type: CHANGE_TYPE,
})
 
//更改员工id
export const changeStaffId = (id) => ({
    type: CHANGE_STAFF_ID,
    id,
})
//更改员工workNum
export const changeworkNum = (val) => ({
    type: CHANGE_WORK_NUM,
    val,
})
//修改起保日期
export const changeEffectiveDate = (val) => ({
    type: CHANGE_EFFECTIVE_DATE,
    val,
})

//改变投保人姓名
export const changeHolderName = (val) => ({
    type: CHANGE_HOLDER_NAME,
    val,
})

//改变健康状况
export const checkHealthy = (val) => ({
    type: CHECK_HEALTHY,
    val,
})

//修改投保人证件类型
export const changeHolderCertiType = (index) => ({
    type: CHANGE_HOLDER_CERTI_TYPE,
    index,
})

//修改投保人证件号
export const onchangeHolderNo = (val) => ({
    type: CHANGE_HOLDER_NO,
    val,
})

export const setTitleName = (val) => ({
    type: SET_TITLE_NAME,
    val,
})
export const setPayMent = (val) => ({
    type: SET_PAY_MENT,
    val,
})
export const setInitAmnt = (val) => ({
    type: SET_INIT_AMNT,
    val,
})
export const changeAmnt = (val) => (dispatch, getState) => {
    dispatch(setInitAmnt(val*10000));
    dispatch(getRate());
   
}
 


export const setVarietyOption = (val) => (dispatch, getState) => {
    dispatch(setVarietyCode(val));
    data.productList.map((item,index)=>{
        if(item.varietyCode===val){
            dispatch(setTitleName(item.name))
            dispatch(setInitAmnt(item.minAmnt))
            dispatch(setPayMent(item.payMentArry))
        }
    })

}
//输入投保人证件号
export const changeHolderNo = (val) => (dispatch, getState) => {
    dispatch(onchangeHolderNo(val))
    let state = getState();

    if (val.length === 18 && state.holderCertiTypeVal.toString() ==="0") {
        if (api.IdentityCodeValid(val)) {
            let year = val.substr(6, 4)
            let month = val.substr(10, 2)
            let day = val.substr(12, 2)
            let sex = val.substr(16, 1) - 0;
            let birthday = year + '-' + month + '-' + day;
            let age = api.getAge(birthday);
            dispatch(changeHolderAge(age))
           
            dispatch(changeHolderBirthday(year + '-' + month + '-' + day))
            dispatch(changeHolderGender((sex + 1) % 2))
           
        }
    }
}
//修改投保人出生日期
export const changeHolderAge = (val) => ({
    type: CHANGE_HOLDER_AGE,
    val,
})
//修改投保人出生日期
export const changeHolderBirthday = (val) => ({
    type: CHANGE_HOLDER_BIRTHDAY,
    val,
})
//修改证件有效期
export const changeEffictive = (val) => ({
    type: CHANGE_EFFICTIVE,
    val
})

//修改证件有效期
export const changeInvalidDate = (val) => ({
    type: CHANGE_INVALI_DATE,
    val
})


//修改投保人性别
export const changeHolderGender = (index) => ({
    type: CHANGE_HOLDER_GENDER,
    index,
})

//修改投保人电话
export const changeHolderPhone = (val) => ({
    type: CHANGE_HOLDER_PHONE,
    val,
})

//修改投保人邮箱
export const changeHolderEmail = (val) => ({
    type: CHANGE_HOLDER_EMAIL,
    val,
})

//修改投保人地址
export const changeHolderAddress = (val) => (dispatch, getState) => {
    let name = dispatch(getAddressLabel(val))
    console.log(name);
    dispatch(changeHolderAddressValue(val));
    dispatch(changeHolderAddressLabel(name));
}

export const changeHolderAddressValue = (val) => ({
    type: CHANGE_HOLDERADDRESSVALUE,
    val
})
export const changeHolderLocation = (val) => ({
    type: CHANGE_HOLDERLOCATION,
    val
})
export const changeHolderAddressLabel = (val) => ({
    type: CHANGE_HOLDERADDRESSLABEL,
    val
})
export const changeHolderZipCode = (val) => ({
    type: CHANGE_HOLDER_ZIPCODE,
    val
})
export const changeInsurantZipCode = (val) => ({
    type: CHANGE_INSURANT_ZIPCODE,
    val
})
export const changeInsurantEmail = (val) => ({
    type: CHANGE_INSURANT_EMAIL,
    val
})


//显示职业类别选择器
export const changeJobCategory = (val) => (dispatch, getState) => {
    dispatch(changeJobCategoryVal(val));
    if (val[0] === '') {
        if (!sessionStorage.jobList) {
            let cb = msg => {
                sessionStorage.jobList = JSON.stringify(msg);
            }
            api.getJobList(cb);
        }
    }
}
//  上传身份证图片
export const upLoadImg = (event, type) => (dispatch, getState) => {
    dispatch(changeIsLoading())
    let cb = (imgdata) => {
        dispatch(changeIsLoading())
        dispatch(changeCardImg(imgdata, type))
    }
    uploadCardImg(event, cb);
}


export const changeCardImg = (val, typeWay) => ({
    type: CHANGE_CARD_IMG,
    val,
    typeWay
})
export const changeJobCategoryVal = (val) => ({
    type: CHANGE_JOB_CATEGORY,
    val
})


//显示职业类别选择器
export const changeJobCategoryLabel = (val) => ({
    type: CHANGE_JOB_CATEGORY_LABEL,
    val
})

//显示职业类别选择器
export const changeOccupationShow = () => ({
    type: CHANGE_OCCUPATION_SHOW,
})

//显示职业类别选择器
export const closeOccupationShow = () => ({
    type: CLOSE_OCCUPATION_SHOW,
})

//返回选择行业
export const goBackStep = (val) => ({
    type: GO_BACK_STEP,
    val
})

//选择了一个职业
export const ChangeCategory = (category, cname, code) => ({
    type: CLICK_JOB,
    category,
    cname,
    code,
})
//选择了一个职业
export const clickJobs = (category, cname, code) => ({
    type: CLICK_JOBS,
    category,
    cname,
    code,
})


//改变被保人姓名
export const changeInsurantName = (val) => ({
    type: CHANGE_INSURANT_NAME,
    val,
})

//改变被保人姓名
export const setInsurantName = (val) => ({
    type: CHANGE_INSURANT_NAME,
    val,
})

//修改被保人证件类型
export const changeInsurantCertiType = (index) => ({
    type: CHANGE_INSURANT_CERTI_TYPE,
    index,
})

//修改被保人证件号
export const onchangeInsurantNo = (val) => ({
    type: CHANGE_INSURANT_NO,
    val,
})
//输入被保人证件号
export const changeInsurantNo = (val) => (dispatch, getState) => {
    let state = getState();

    dispatch(onchangeInsurantNo(val))
    if (val.length === 18 && state.insurantCertiTypeVal === 0) {
        if (api.IdentityCodeValid(val)) {
            let year = val.substr(6, 4)
            let month = val.substr(10, 2)
            let day = val.substr(12, 2)
            let sex = val.substr(16, 1) - 0;
            dispatch(onchangeInsurantBirthday(year + '-' + month + '-' + day))
            dispatch(changeInsurantGender((sex + 1) % 2))
        }
    }
}

//修改被保人出生日期/年龄
export const changeInsurantBirthday = (val) => (dispatch, getState) => {
    let age = api.getAge(val);
    dispatch(changeInsurantAge(age))
    dispatch(onchangeInsurantBirthday(val))
    dispatch(getRate());
}
//修改被保人出生日期
export const onchangeInsurantBirthday = (val) => ({
    type: CHANGE_INSURANT_BIRTHDAY,
    val,
})
//修改被保人年龄
export const changeInsurantAge = (val) => ({
    type: CHANGE_INSURANT_AGE,
    val,
})


//修改被保人性别
export const changeInsurantGender = (index) => ({
    type: CHANGE_INSURANT_GENDER,
    index,
})

//修改被保人电话
export const changeInsurantPhone = (val) => ({
    type: CHANGE_INSURANT_PHONE,
    val,
})
//修改被保人住址
export const changeInsurantLocation = (val) => ({
    type: CHANGE_INSURANT_LOCATION,
    val,
})

//修改被保人地址
export const changeInsurantAddress = (val) => (dispatch, getState) => {
    let name = dispatch(getAddressLabel(val))
    dispatch(changeInsurantAddressValue(val));
    dispatch(changeInsurantAddressLabel(name));
}
//修改被保人地址
export const changeInsurantAddressValue = (val) => ({
    type: CHANGE_INSURANTADDRESSVALUE,
    val
})
//修改被保人地址
export const changeInsurantAddressLabel = (val) => ({
    type: CHANGE_INSURANTADDRESSLABEL,
    val
})

//修改被保人与投保人关系
export const changeForInsuredPerson = (val) => ({
    type: CHANGE_FOR_INSURED,
    val,
})

export const changeAttentionA = () => ({
    type: CHANGE_ATTENA,

})

export const changeAttentionB = () => ({
    type: CHANGE_ATTENB,

})



//修改购买份数
export const changeApplyNum = (index) => ({
    type: CHANGE_APPLY_NUM,
    index,
})





//打开选择器
export const showSelector = (options, index, target) => ({
    type: SHOW_SELECTOR,
    options,
    index,
    target,
})
//显示<Li>选择器
export const showLiSelector = (target) => ({
    type: SHOW_LI_SELECTOR,
    target,
})

//关闭<Li>选择器
export const closeLiSelector = () => ({
    type: CLOSE_LI_SELECTOR,
})

//关闭选择器
export const closeSelector = () => ({
    type: CLOSE_SELECTOR,
})
//更改遮罩层的显示
export const changeIsLoading = () => ({
    type: CHANGE_IS_LOADING,
})


//初始化编辑数据
export const changeTab = (val) => ({
    type: CHANGE_TAB,
    val
})
//初始化编辑数据
export const initEditData = (entity) => ({
    type: INIT_EDIT_DATA,
    entity
})

// 预留手机号
export const changePayPhone = (val) => ({
    type: CHANGE_PAYPHONE,
    val
})
// 卡号
export const changeBankNum = (val) => ({
    type: CHANGE_BANKNUM,
    val
})
//付款行
export const changeBankCode = (val) => ({
    type: CHANGE_BANK_CODE,
    val
})

//验证码

export const changeSmsCode = (val) => ({
    type: CHANGE_SMSCODE,
    val
})

export const initOrderId = (val) => ({
    type: INIT_ORDERID,
    val
})


//从后端获取的用户信息
export const initUserData = (certiNo, email, phone, birthday, gender, occupationCategory) => ({
    type: INIT_USER_DATA,
    certiNo,
    email,
    phone,
    birthday,
    gender,
    occupationCategory
})
//从后端获取的订单id、投保人id、被保对象id、订单号
export const changeIds = (orderId, holderId, insuerId, insuredId, url, policyNo, applyNum) => ({
    type: CHANGE_IDS,
    orderId,
    holderId,
    insuerId,
    insuredId,
    url,
    policyNo,
    applyNum,
})

//获取地址名称
const getAddressLabel = (val) => (dispatch, getState) => {
    let addressLabel = [];
    let addressData = JSON.parse(sessionStorage.addressData);
    addressData.map((item, index) => {
        if (item.value === val[0]) {
            addressLabel[0] = item.label
            item.children.map((item2, index) => {
                if (item2.value === val[1]) {
                    addressLabel[1] = item2.label
                    item2.children.map((item3, index) => {
                        if (item3.value === val[2]) {
                            addressLabel[2] = item3.label
                        }
                    })
                }
            })
        }
    })
    return addressLabel
}



// 获取保费
export const getRate = () => (dispatch, getState) => {
    api.getRate(getState(), msg => {
        if(msg.result.toString()==="1"){
            dispatch(changeFee(msg.prem))
        }
        
    })
}

//获取用户信息
export const getPersonInfo = (str) => (dispatch, getState) => {
    let state = getState();
    api.getPersonInfo(state.workNum, state.holderName, msg => {
        if (msg.result.toString() === "1") {
            let customer = msg.customer;
            if (str === 'holder') {
                dispatch(initUserData(customer.holderCertiNo, customer.holderEmail, customer.holderPhone, customer.holderBirthday, customer.holderGender, customer.occupationCategory))
            }
        }
    })
}

//检查数据有效性
export const checkOrder = () => (dispatch, getState) => {
    let state = getState();
    if (api.checkData('投保人姓名', state.holderName) &&
        api.checkAge('投保人', state.holderCertiNo) &&
        api.IdentityCodeValid(state.holderCertiNo) &&
        api.checkData('投保人出生日期', state.holderBirthday) &&
        api.checkData('投保人电话', state.holderPhone) &&
        api.checkData('投保人邮箱', state.holderEmail)) {
        if (!state.jobCategory[0] && state.jobCategory[0] != '') {
            Toast.info('请选择被保人职业类别！')
        } else if (state.jobCategory[0] === "" && !state.occupation.category4_cname) {
            Toast.info(' 请选到择详细职业！')
        } else if (state.fee >= 200000 && state.fontimg.indexOf("base64") > 0 && state.backimg.indexOf("base64") > 0) {
            Toast.info(' 请上传身份证正反面！')
        } else if (state.forInsuredPerson[0] === '00') {
            dispatch(changeInsurantName(state.holderName));
            dispatch(changeInsurantCertiType(state.holderCertiType));
            dispatch(changeInsurantGender(state.holderGender));
            dispatch(changeInsurantBirthday(state.holderBirthday));
            dispatch(changeInsurantNo(state.holderCertiNo));
            dispatch(changeInsurantPhone(state.holderPhone));
            dispatch(changeInvalidDate(state.certiNoEffictive));
            dispatch(changeInsurantAddress(state.holderAddressValue));
            dispatch(changeInsurantLocation(state.holderLocation));
            dispatch(changeInsurantEmail(state.holderEmail));
            dispatch(changeInsurantZipCode(state.holderZipCode));
            dispatch(getRate())
            window.location.href = '#/step2';
        } else if (api.checkData('被保人姓名', state.insurantName) &&
            api.checkAge('', state.insurantCertiNo) &&
            api.checkAgeReg(state.insuredRelaToHolder, state.holderCertiNo, state.insurantCertiNo) &&
            api.IdentityCodeValid(state.insurantCertiNo) &&
            api.checkData('被保人出生日期', state.insurantBirthday) &&
            api.checkData('被保人电话', state.insurantPhone)) {
            // dispatch(goToStep(2));
            window.location.href = '#/step2';
        }


    }
}



//投保
export const apply = () => (dispatch, getState) => {
    dispatch(changeIsLoading())
    api.sendData(getState(), msg => {
        dispatch(changeIsLoading())
        if(msg.orderId){
            dispatch(initOrderId(msg.orderId))
        }
        if (msg.result.toString() === '1') {
            // dispatch(goToStep(3))
            window.location.href = '#/step3'
        } else {
            Toast.info(msg.message)
        }
    })
}

// 获取短信验证码
export const getMesCode = (val) => (dispatch, getState) => {
    let state = getState();
    if (api.checkData("付款银行", state.bankCode[0])&&api.checkData("银行卡号", state.bankNum)&&api.checkData("手机号", state.payPhone)) {
        let second = 60
        dispatch(changeSecond(second))
        let interval = setInterval(function () {
            second -= 1;
            dispatch(changeSecond(second))
            if (second === 0) {
                clearInterval(interval);
            }
            //do whatever here..
        }, 1000);
        api.getMesCode(state, (msg) => {
            console.log(msg);
            if(msg.result.toString()!=="1"){
                Toast.info(msg.message,2)
            }
        })
    }
}

// 支付订单
export const payOrder = (val) => (dispatch, getState) => {
    let state = getState();
    if (api.checkData("验证码", state.payPhone) && api.checkData("订单号", state.orderId)) {
        api.payOrder(state, msg => {
            console.log(msg);
        })
    }
}

//初始化数据
export const initData = () => (dispatch, getState) => {
    api.getAddressData(msg => {
        sessionStorage.addressData = JSON.stringify(msg);
    })
    let step = window.location.hash.split('step')[1] - 0;
    let type = api.getDataFromUrl('type')
    if (type) {
        dispatch(changeType())
    }
    let staffId = api.getDataFromUrl('staffId')
    if (staffId) {
        sessionStorage.staffId = staffId;
        dispatch(changeStaffId(staffId))
    } else if (sessionStorage.staffId) {
        dispatch(changeStaffId(sessionStorage.staffId))
    };
    let workNum = api.getDataFromUrl('workNum');
    if (workNum) {
        dispatch(changeworkNum(workNum))
    }
    let varietyCode = sessionStorage.varietyCode;
    dispatch(setVarietyOption(varietyCode));
    let id = api.getDataFromUrl('id') || sessionStorage.personalCardOrderId;
    let again = api.getDataFromUrl('again') || false;
    //有订单ID说明是编辑页面,并标记为编辑状态，最后step1返回时返回到订单列表页
    dispatch(getRate());
    if (id) {
        api.getEditDate(getState(), id, msg => {
            if (msg.result === 1) {
                dispatch(initEditData(msg.entity))
                // 如果不是订单列表
                window.location = "#/step1"
                if (again) {
                    dispatch(clearId())
                }
            } else {
                Toast.info(msg.message)
            }
        })

    }
}