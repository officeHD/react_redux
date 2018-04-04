import * as api from '../api'
import data from '../reducers/data.json'
import { Toast } from 'antd-mobile';

export const GO_TO_STEP = 'GO_TO_STEP'
export const CHANGE_TYPE = 'CHANGE_TYPE'
export const CHANGE_HOLDER_NAME = 'CHANGE_HOLDER_NAME'
export const CHANGE_HOLDER_CERTI_TYPE = 'CHANGE_HOLDER_CERTI_TYPE'
export const CHANGE_HOLDER_NO = 'CHANGE_HOLDER_NO'
export const CHANGE_HOLDER_GENDER = 'CHANGE_HOLDER_GENDER'
export const CHANGE_HOLDER_BIRTHDAY = 'CHANGE_HOLDER_BIRTHDAY'
export const CHANGE_HOLDER_PHONE = 'CHANGE_HOLDER_PHONE'
export const CHANGE_HOLDER_EMAIL = 'CHANGE_HOLDER_EMAIL'
export const CHANGE_INSURANT_NAME = 'CHANGE_INSURANT_NAME'
export const CHANGE_INSURANT_CERTI_TYPE = 'CHANGE_INSURANT_CERTI_TYPE'
export const CHANGE_INSURANT_NO = 'CHANGE_INSURANT_NO'
export const CHANGE_INSURANT_GENDER = 'CHANGE_INSURANT_GENDER'
export const CHANGE_INSURANT_BIRTHDAY = 'CHANGE_INSURANT_BIRTHDAY'
export const CHANGE_INSURANT_PHONE = 'CHANGE_INSURANT_PHONE'
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
export const CHANGE_IS_EDIT = 'CHANGE_IS_EDIT'
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









// 清除ID
export const clearId = () => ({
    type: CLEAR_ID
})

//运行环境
export const changeType = () => ({
    type: CHANGE_TYPE,
})
//步骤间跳转
export const goToStep = (step) => ({
    type: GO_TO_STEP,
    step,
})
//更改员工id
export const changeStaffId = (id) => ({
    type: CHANGE_STAFF_ID,
    id,
})
//更改员工workNum
export const changeworkNum = (id) => ({
    type: CHANGE_WORK_NUM,
    id,
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
//输入被保人证件号
export const changeHolderNo = (val) => (dispatch, getState) => {
    dispatch(onchangeHolderNo(val))
    if (val.length === 18) {
        if (api.IdentityCodeValid(val)) {
            let year = val.substr(6, 4)
            let month = val.substr(10, 2)
            let day = val.substr(12, 2)
            let sex = val.substr(16, 1) - 0;
            dispatch(changeHolderBirthday(year + '-' + month + '-' + day))
            dispatch(changeHolderGender((sex + 1) % 2))
        }
    }
}

//修改投保人出生日期
export const changeHolderBirthday = (val) => ({
    type: CHANGE_HOLDER_BIRTHDAY,
    val,
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
export const changeHolderAddressLabel = (val) => ({
    type: CHANGE_HOLDERADDRESSLABEL,
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
    dispatch(onchangeInsurantNo(val))
    if (val.length === 18) {
        if (api.IdentityCodeValid(val)) {
            let year = val.substr(6, 4)
            let month = val.substr(10, 2)
            let day = val.substr(12, 2)
            let sex = val.substr(16, 1) - 0;
            dispatch(changeInsurantBirthday(year + '-' + month + '-' + day))
            dispatch(changeInsurantGender((sex + 1) % 2))
        }
    }
}


//修改被保人出生日期
export const changeInsurantBirthday = (val) => ({
    type: CHANGE_INSURANT_BIRTHDAY,
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
//修改投保人地址
export const changeInsurantAddress = (val) => (dispatch, getState) => {
    let name = dispatch(getAddressLabel(val))

    dispatch(changeInsurantAddressValue(val));
    dispatch(changeInsurantAddressLabel(name));
}
export const changeInsurantAddressValue = (val) => ({
    type: CHANGE_INSURANTADDRESSVALUE,
    val
})
export const changeInsurantAddressLabel = (val) => ({
    type: CHANGE_INSURANTADDRESSLABEL,
    val
})

//修改被保人与投保人关系
export const changeForInsuredPerson = (val) => ({
    type: CHANGE_FOR_INSURED,
    val,
})

//修改购买份数
export const changeApplyNum = (index) => ({
    type: CHANGE_APPLY_NUM,
    index,
})

//改变钱包账户余额
export const changeBalance = (ba) => ({
    type: CHANGE_BALANCE,
    ba,
})

//改变是否显示众安收银台
export const changeIsZACashier = () => ({
    type: CHANGE_IS_ZA_CASHIER,
})

//改变是否显示其他支付方式
export const changeIsOtherWay = () => ({
    type: CHANGE_IS_OTHER_WAY,
})

//改变个人钱包支付金额
export const changePersonPremium = (val) => ({
    type: CHANGE_PERSON_PREMIUM,
    val,
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



//修改是否是编辑页面
export const changeIsEdit = () => ({
    type: CHANGE_IS_EDIT,
})

//初始化编辑数据
export const initEditData = (entity, step) => ({
    type: INIT_EDIT_DATA,
    entity,
    step,
})


//输入安康守护卡的卡号和密码
export const changeCards = (index, item, val) => ({
    type: CHANGE_CARDS,
    index,
    item,
    val,
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

//获取用户信息
export const getPersonInfo = (str) => (dispatch, getState) => {
    let state = getState();
    api.getPersonInfo(state.worknum, state.holderName, msg => {
        if (msg.result.toString() === "1") {
            let customer = msg.customer;
            if (str === 'holder') {
                dispatch(initUserData(customer.holderCertiNo, customer.holderEmail, customer.holderPhone, customer.holderBirthday, customer.holderGender, customer.occupationCategory))
            }
        }
    })
}

//检查投被保人数据有效性
export const checkHolder = () => (dispatch, getState) => {
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
        } else if (state.forInsuredPerson[0] === '00') {
            dispatch(goToStep(3));
            window.location.href = '#/step3';
        } else if (api.checkData('被保人姓名', state.insurantName) &&
            api.checkAge('', state.insurantCertiNo) &&
            api.checkAgeReg(state.insuredRelaToHolder, state.holderCertiNo, state.insurantCertiNo) &&
            api.IdentityCodeValid(state.insurantCertiNo) &&
            api.checkData('被保人出生日期', state.insurantBirthday) &&
            api.checkData('被保人电话', state.insurantPhone)) {
            dispatch(goToStep(3));
            window.location.href = '#/step3';
        }


    }
}

//检查被保人数据有效性
export const checkInsurant = () => (dispatch, getState) => {
    let state = getState();
    if (state.occupation.occupationCategoryName === '') {
        Toast.info('投保人职业类别 不得为空！')
    } else if (state.insuredRelaToHolder === 0) {
        dispatch(goToStep(3));
        window.location.href = '#/step3';
    } else if (api.checkData('被保人姓名', state.insurantName) &&
        api.checkAge('', state.insurantCertiNo) &&
        api.checkAgeReg(state.insuredRelaToHolder, state.holderCertiNo, state.insurantCertiNo) &&
        api.IdentityCodeValid(state.insurantCertiNo) &&
        api.checkData('被保人出生日期', state.insurantBirthday) &&
        api.checkData('被保人电话', state.insurantPhone)) {
        dispatch(goToStep(3));
        window.location.href = '#/step3';
    }
}

//确认投保进入付款页面
export const getBalance = () => (dispatch, getState) => {
    dispatch(changeIsLoading())
    api.sendData(getState(), 'customer', msg => {
        dispatch(changeIsLoading())
        if (msg.result.toString() === '1') {
            dispatch(goToStep(4))
            window.location.href = '#/step4'
        } else {
            Toast.info(msg.message)
        }
    })
}

//检查安康守护卡 卡号和密码的数据有效性
export const checkAnKang = () => (dispatch, getState) => {
    let state = getState();
    let cardsNum = data.ApplyNum[state.applyNum] - state.personPremium / 100
    var flag = true;
    for (let i = 0; i < cardsNum; i++) {
        if (!api.checkData(`第${i + 1}张卡单卡号`, state.cards[i].insuranceId) || !api.checkData(`第${i + 1}张卡单密码`, state.cards[i].password)) {
            flag = false;
        }
    }
    if (flag) {
        dispatch(submitCards());
    }
}

//使用卡单支付
export const submitCards = () => (dispatch, getState) => {
    dispatch(changeIsLoading())
    api.submitCards(getState(), msg => {
        dispatch(changeIsLoading())
        if (msg.result === 1) {
            dispatch(sendData2())
        } else {
            Toast.info(msg.message)
        }
    })
}


// 发送数据到后端，众安收银台要传type = desk
export const sendData = () => (dispatch, getState) => {
    dispatch(changeIsZACashier())
    if (getState().isZACashier) {
        dispatch(changeIsLoading())
        api.sendData(getState(), 'desk', msg => {
            dispatch(changeIsLoading())
            if (msg.result.toString() === '1') {
                if (msg.orderId !== null && msg.orderId) {
                    sessionStorage.personalCardOrderId = msg.orderId;
                }

                window.location.href = msg.payUrl
            } else {
                Toast.info(msg.message)
            }
        })
    }
}

//发送数据到后端，钱包+卡单  type=''
export const sendData2 = () => (dispatch, getState) => {
    dispatch(changeIsLoading())
    api.sendData(getState(), '', msg => {
        dispatch(changeIsLoading())
        if (msg.result.toString() === '1') {
            dispatch(changeIds(msg.orderId, msg.holderId, msg.insuerId, msg.insuredId, msg.url, msg.policyNo, msg.applyNum))
            if (msg.message && msg.message != '') {
                Toast.info(msg.message);
            }
            // 清除数据
            sessionStorage.clear();
            api.goToPayNormal(getState())
        } else {
            Toast.info(msg.message)
            //如果是订单超过24小时失效，则页面要回到订单列表页面
            if ((msg.message).indexOf('该订单已超过24小时未支付,订单已失效！') >= 0) {
                window.location.href = `../app_order_list?staffId=${msg.staffId}`
            }
        }
    })
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
        sessionStorage.workNum = workNum;
        dispatch(changeworkNum(workNum))
    } else if (sessionStorage.workNum) {
        dispatch(changeworkNum(sessionStorage.workNum))
    }
    let id = api.getDataFromUrl('id') || sessionStorage.personalCardOrderId;
    let again = api.getDataFromUrl('again') || false;
    //有订单ID说明是编辑页面,并标记为编辑状态，最后step1返回时返回到订单列表页
    if (id) {
        dispatch(changeIsEdit())
        api.getEditDate(getState(), id, msg => {
            if (msg.result === 1) {
                dispatch(initEditData(msg.entity, step))
                // 如果不是订单列表
                window.location = "#/step3"
                if (again) {
                    dispatch(clearId())
                }
            } else {
                Toast.info(msg.message)
            }
        })

    }
}