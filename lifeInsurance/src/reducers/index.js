import { combineReducers } from 'redux'
import * as act from '../actions'
import { dateToString } from '../api'
import data from './data.json'

//步骤
const step = (state = 0, action) => {
    switch (action.type) {
        case act.GO_TO_STEP:
            return Math.max(action.step, 0)
        case act.INIT_EDIT_DATA:
            return action.step
        default:
            return state
    }
}

//运行环境
const type = (state = true, action) => {
    switch (action.type) {
        case act.CHANGE_TYPE:
            return !state
        default:
            return state
    }
}
//员工ID
const staffId = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_STAFF_ID:
            return action.id
        case act.INIT_EDIT_DATA:
            return action.entity.staffId
        default:
            return state
    }
}
const worknum = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_WORK_NUM:
            return action.id
        default:
            return state
    }
}

//是否是编辑页面
const isEdit = (state = false, action) => {
    switch (action.type) {
        case act.CHANGE_IS_EDIT:
            return !state
        default:
            return state
    }
}

//起保日期
let dd = new Date();
dd.setDate(dd.getDate() + 1); //获取AddDayCount天后的日期 
let tomorrow = dateToString(dd);
const effectiveDate = (state = tomorrow, action) => {
    switch (action.type) {
        case act.CHANGE_EFFECTIVE_DATE:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.effectiveDate
        default:
            return state
    }
}

//投保人姓名
const holderName = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_HOLDER_NAME:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.policyHolder.holderName

        default:
            return state
    }
}

//投保人证件类型
const holderCertiType = (state = 0, action) => {
    switch (action.type) {
        case act.CHANGE_HOLDER_CERTI_TYPE:
            return action.index
        case act.INIT_EDIT_DATA:
            let index = 0;
            data.HolderCertiTypeValue.map((el, index2) => {
                if (el === action.entity.policyHolder.holderCertiType) {
                    index = index2;
                }
            });
            return index

        default:
            return state
    }
}

//投保人证件号
const holderCertiNo = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_HOLDER_NO:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.policyHolder.holderCertiNo
        case act.INIT_USER_DATA:

            return action.certiNo
        default:
            return state
    }
}

//投保人性别
const holderGender = (state = 0, action) => {
    switch (action.type) {
        case act.CHANGE_HOLDER_GENDER:
            return action.index
        case act.INIT_EDIT_DATA:
            let index = 0;
            data.HolderGenderValue.map((el, index2) => {
                if (el === action.entity.policyHolder.holderGender) {
                    index = index2;
                }
            });
            return index
        case act.INIT_USER_DATA:
            let indexl = 0;
            data.HolderGenderValue.map((el, indexr) => {
                if (el === action.gender) {
                    indexl = indexr;
                }
            });
            return indexl
        default:
            return state
    }
}

//投保人出生日期
const holderBirthday = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_HOLDER_BIRTHDAY:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.policyHolder.holderBirthday
        case act.INIT_USER_DATA:
            return action.birthday
        default:
            return state
    }
}

//投保人联系电话
const holderPhone = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_HOLDER_PHONE:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.policyHolder.holderPhone
        case act.INIT_USER_DATA:
            return action.phone
        default:
            return state
    }
}

//投保人邮箱
const holderEmail = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_HOLDER_EMAIL:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.policyHolder.holderEmail
        case act.INIT_USER_DATA:
            return action.email
        default:
            return state
    }
}
//投保人地址
const holderAddressValue = (state = [], action) => {
    switch (action.type) {
        case act.CHANGE_HOLDERADDRESSVALUE:
            return action.val
        default:
            return state
    }
}
//投保人地址
const holderAddressLabel = (state = [], action) => {
    switch (action.type) {
        case act.CHANGE_HOLDERADDRESSLABEL:
            return action.val
        default:
            return state
    }
}

//被保人姓名
const insurantName = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_INSURANT_NAME:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.insurantList[0].insurantName
        case act.CHANGE_INSURED_RELA_TO_HOLDER:

            return ''
        default:
            return state
    }
}

//被保人证件类型
const insurantCertiType = (state = 0, action) => {
    switch (action.type) {
        case act.CHANGE_INSURANT_CERTI_TYPE:
            return action.index
        case act.INIT_EDIT_DATA:
            let index = 0;
            data.HolderCertiTypeValue.map((el, index2) => {
                if (el === action.entity.insurantList[0].insurantCertiType) {
                    index = index2;
                }
            });
            return index
        case act.CHANGE_INSURED_RELA_TO_HOLDER:

            return 0
        default:
            return state
    }
}

//被保人证件号
const insurantCertiNo = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_INSURANT_NO:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.insurantList[0].insurantCertiNo
        case act.CHANGE_INSURED_RELA_TO_HOLDER:

            return ''
        default:
            return state
    }
}

//被保人性别
const insurantGender = (state = 0, action) => {
    switch (action.type) {
        case act.CHANGE_INSURANT_GENDER:
            return action.index
        case act.INIT_EDIT_DATA:
            let index = 0;
            data.HolderGenderValue.map((el, index2) => {
                if (el === action.entity.insurantList[0].insurantGender) {
                    index = index2;
                }
            });
            return index
        case act.CHANGE_INSURED_RELA_TO_HOLDER:

            return 0
        default:
            return state
    }
}

//被保人出生日期
const insurantBirthday = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_INSURANT_BIRTHDAY:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.insurantList[0].insurantBirthday
        case act.CHANGE_INSURED_RELA_TO_HOLDER:

            return ''
        default:
            return state
    }
}

//被保人联系电话
const insurantPhone = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_INSURANT_PHONE:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.insurantList[0].insurantPhone
        case act.CHANGE_INSURED_RELA_TO_HOLDER:
            return ''
        default:
            return state
    }
}
//投保人地址
const insurantAddressValue = (state = [], action) => {
    switch (action.type) {
        case act.CHANGE_INSURANTADDRESSVALUE:
            return action.val
        default:
            return state
    }
}
//投保人地址名称
const insurantAddressLabel = (state = [], action) => {
    switch (action.type) {
        case act.CHANGE_INSURANTADDRESSLABEL:
            return action.val
        default:
            return state
    }
}


//被保人与投保人关系: 0=(1本人), 1=(2配偶) ,2=(3子女), 3=(4父母), 4=(5其他)
const forInsuredPerson = (state = ['00'], action) => {
    switch (action.type) {
        case act.CHANGE_FOR_INSURED:
            return action.val

        default:
            return state
    }
}


const jobCategory = (state = [], action) => {
    switch (action.type) {
        case act.CHANGE_JOB_CATEGORY:
            return action.val
        default:
            return state
    }
}
const jobCategoryLabel = (state = "", action) => {
    switch (action.type) {
        case act.CHANGE_JOB_CATEGORY_LABEL:
            return action.val
        default:
            return state
    }
}



//初始化的职业选择框
let i_occupation = {
    isShow: false, //默认不显示
    category: 0, //选择行业，step=0，选择职业，step=1
    code: '',
    indIndex: 0, //行业的索引值
    category1_code: '',
    category2_code: '',
    category3_code: '',
    category4_code: '',
    category1_cname: '',
    category2_cname: '',
    category3_cname: '',
    category4_cname: '',
    occupationCategory: '', //职业类别，后台所需文字
    occupationCategoryName: '', //别业内别，前端所需文字
}

//职业类别选择器
const occupation = (state = i_occupation, action) => {
    switch (action.type) {
        case act.CHANGE_OCCUPATION_SHOW:

            return { ...state, isShow: !state.isShow }
        case act.CLOSE_OCCUPATION_SHOW:
            return { ...state, isShow: false }

        case act.GO_BACK_STEP:
            return { ...state, category: state.category - 1 }
        case act.CLICK_JOB:
            return { ...state, category: action.category, cname: action.cname, code: action.code }

        case act.CLICK_JOBS:
            if (action.category === 1) {
                return {
                    ...state,
                    category1_code: action.code,
                    category1_cname: action.cname,
                    category2_code: '',
                    category2_cname: '',
                    category3_code: '',
                    category3_cname: '',
                    category4_code: '',
                    category4_cname: ''
                }
            } else if (action.category === 2) {
                return {
                    ...state,
                    category2_code: action.code,
                    category2_cname: action.cname,
                    category3_code: '',
                    category3_cname: '',
                    category4_code: '',
                    category4_cname: ''
                }
            } else if (action.category === 3) {
                return {
                    ...state,
                    category3_code: action.code,
                    category3_cname: action.cname,
                    category4_code: '',
                    category4_cname: ''
                }
            } else if (action.category === 4) {
                return {
                    ...state,
                    category4_code: action.code,
                    category4_cname: action.cname
                }
            }
        default:
            return state
    }
}

//购买份数
const applyNum = (state = 0, action) => {
    switch (action.type) {
        case act.CHANGE_APPLY_NUM:
            return action.index
        case act.INIT_EDIT_DATA:
            return action.entity.applyNum - 1
        case act.CHANGE_IDS:
            return action.applyNum
        default:
            return state
    }
}

//选择器是否显示
const showSelector = (state = false, action) => {
    switch (action.type) {
        case act.SHOW_SELECTOR:
            return true
        case act.CLOSE_SELECTOR:
            return false
        default:
            return state
    }
}

//选择器显示的选项
const selectorSelected = (state = '', action) => {
    switch (action.type) {
        case act.SHOW_SELECTOR:
            return action.index
        case act.CLOSE_SELECTOR:
            return ''
        default:
            return state
    }
}

//选择器选中的索引
const selectorOptions = (state = [], action) => {
    switch (action.type) {
        case act.SHOW_SELECTOR:
            return action.options
        case act.CLOSE_SELECTOR:
            return []
        default:
            return state
    }
}

//选择器的目标
const selectorTarget = (state = '', action) => {
    switch (action.type) {
        case act.SHOW_SELECTOR:
            return action.target
        case act.CLOSE_SELECTOR:
            return ''
        default:
            return state
    }
}

//<li>选择器是否显示
const showLiSelector = (state = false, action) => {
    switch (action.type) {
        case act.SHOW_LI_SELECTOR:
            return true
        case act.CLOSE_LI_SELECTOR:
            return false
        default:
            return state
    }
}

//<li>选择器选中的索引
const liSelectorSelected = (state = '', action) => {
    switch (action.type) {
        // case act.CHANGE_PROVINCE:
        //   console.log(action);
        //   return action.name
        case act.CLOSE_LI_SELECTOR:
            return ''
        default:
            return state
    }
}

//<li>选择器显示的选项
const liSelectorOptions = (state = [], action) => {
    switch (action.type) {
        case act.SHOW_LI_SELECTOR:
            let options = []
            switch (action.target) {
                case 'province':
                    options = provincesDataBase
                    break;
                case 'region':
                    options = citiesDataBase
                    break;
                case 'county':
                    options = countiesDataBase
                    break;
                default:
                    break;
            }
            return options
        case act.CLOSE_LI_SELECTOR:
            return []
        default:
            return state
    }
}

//<li>选择器的目标
const liSelectorTarget = (state = '', action) => {
    switch (action.type) {
        case act.SHOW_LI_SELECTOR:
            return action.target
        case act.CLOSE_LI_SELECTOR:
            return ''
        default:
            return state
    }
}

// 订单主键
const orderId = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_IDS:
            return action.orderId
        case act.INIT_EDIT_DATA:
            return action.entity.id
        case act.CLEAR_ID:
            return ''
        default:
            return state
    }
}

// 投保人id
const holderId = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_IDS:
            return action.holderId
        case act.INIT_EDIT_DATA:
            return action.entity.holderId
        default:
            return state
    }
}

// 被保对象id
const insuerId = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_IDS:
            return action.insuerId
        case act.INIT_EDIT_DATA:
            return action.entity.insuerId
        default:
            return state
    }
}

// 订单号
const insuredId = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_IDS:
            return action.insuredId
        case act.INIT_EDIT_DATA:
            return action.entity.insuredId
        case act.CLEAR_ID:
            return ''
        default:
            return state
    }
}

//保单号
const policyNo = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_IDS:
            return action.policyNo
        case act.INIT_EDIT_DATA:
            return action.entity.policyNo
        default:
            return state
    }
}

//支付跳转地址
const url = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_IDS:
            return action.url
        default:
            return state
    }
}

//钱包帐户余额
const balance = (state = 0.00, action) => {
    switch (action.type) {
        case act.CHANGE_BALANCE:
            return action.ba
        default:
            return state
    }
}

//打开遮罩层
const isLoading = (state = false, action) => {
    switch (action.type) {
        case act.CHANGE_IS_LOADING:
        case act.CHANGE_OCCUPATION_SHOW:
            return !state
        case act.CLOSE_OCCUPATION_SHOW:
            return false
        default:
            return state
    }
}

//打开众安收银台 订单确认页面
const isZACashier = (state = false, action) => {
    switch (action.type) {
        case act.CHANGE_IS_ZA_CASHIER:
            return !state
        case act.CHANGE_IS_OTHER_WAY:
        case act.GO_TO_STEP:
            return false
        default:
            return state
    }
}

//打开其他支付方式
const isOtherWay = (state = false, action) => {
    switch (action.type) {
        case act.CHANGE_IS_OTHER_WAY:
            return !state
        case act.CHANGE_IS_ZA_CASHIER:
        case act.GO_TO_STEP:
            return false
        default:
            return state
    }
}

//个人钱包支付金额 0,100,200,300
const personPremium = (state = 0, action) => {
    switch (action.type) {
        case act.CHANGE_PERSON_PREMIUM:
            return action.val
        default:
            return state
    }
}

//安康守护卡的信息
const cards = (state = [{ insuranceId: '', password: '' }, { insuranceId: '', password: '' }, { insuranceId: '', password: '' }], action) => {
    switch (action.type) {
        case act.CHANGE_CARDS:
            let copyArr = state.concat()
            copyArr[action.index][action.item] = action.val
            return copyArr
        default:
            return state
    }
}

const provincesData = (state = [], action) => {
    switch (action.type) {
        case act.INIT_PROVINCE_DATA:
            provincesDataBase = action.obj
            return action.obj
        default:
            return state
    }
}

const citiesData = (state = [], action) => {
    switch (action.type) {
        case act.INIT_CITY_DATA:
            citiesDataBase = action.obj
            return action.obj
        default:
            return state
    }
}

const countiesData = (state = [], action) => {
    switch (action.type) {
        case act.INIT_COUNTY_DATA:
            countiesDataBase = action.obj
            return action.obj
        default:
            return state
    }
}


const rootReducer = combineReducers({
    step,
    staffId,
    worknum,
    type,
    effectiveDate,
    holderCertiType,
    holderCertiNo,
    holderName,
    holderBirthday,
    holderGender,
    holderPhone,
    holderEmail,
    holderAddressValue,
    holderAddressLabel,
    insurantCertiType,
    insurantCertiNo,
    insurantName,
    insurantBirthday,
    insurantGender,
    insurantPhone,
    forInsuredPerson,
    insurantAddressLabel,
    insurantAddressValue,
    jobCategory,
    jobCategoryLabel,
    applyNum,
    showSelector,
    selectorSelected,
    selectorOptions,
    selectorTarget,
    showLiSelector,
    liSelectorSelected,
    liSelectorOptions,
    liSelectorTarget,
    effectiveDate,
    orderId,
    holderId,
    insuerId,
    insuredId,
    url,
    isLoading,
    provincesData,
    citiesData,
    countiesData,
    balance,
    isZACashier,
    isOtherWay,
    personPremium,
    cards,
    policyNo,
    isEdit,
    occupation,

})

export default rootReducer