import { combineReducers } from 'redux'
import * as act from '../actions'
import { dateToString } from '../api'
import data from './data.json'

//员工ID
const staffId = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_STAFF_ID:
            return action.id
        default:
            return state
    }
}
//员工 
const staffmes = (state = {}, action) => {
    switch (action.type) {
        case act.INIT_STAFF:
            return action.val
        case act.CHANGE_STAFF_ID:
            return {...state,staffId:action.id}
        case act.CHANGE_WORK_NUM:
            return {...state,workNum:action.val}
        default:
            return state
    }
}

//员工ID
const workNum = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_WORK_NUM:
            return action.val
        default:
            return state
    }
}

//运行环境 true-app  false-浏览器
const type = (state = true, action) => {
    switch (action.type) {
        case act.CHANGE_TYPE:
            return !state
        default:
            return state
    }
}
// 标题名
const titleName = (state = {}, action) => {
    switch (action.type) {
        case act.SET_TITLE_NAME:
            return action.val
        default:
            return state
    }
}

// 缴费期间
const payMnetArry = (state =[], action) => {
    switch (action.type) {
        case act.SET_PAY_MENT:
            return action.val
        default:
            return state
    }
}

//险种code
const varietyCode = (state = 0, action) => {
    switch (action.type) {
        case act.SET_VARIETY_CODE:
            return action.val
        default:
            return state
    }
}
//保费
const fee = (state = 0, action) => {
    switch (action.type) {
        case act.CHANFE_FEE:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.plan.insuranceFee
        default:
            return state
    }
}
//购买份数
const buyNum = (state = [10], action) => {
    switch (action.type) {
        case act.CHANGE_BUYNUM:
            return action.val
        default:
            return state
    }
}

//保额
const amnt = (state = 10000, action) => {
    switch (action.type) {
        case act.CHANGE_BUYNUM:
            return action.val[0] * 1000
        case act.SET_INIT_AMNT:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.plan.insurances[0].insuranceInfo
        
        default:
            return state
    }
}


//缴费期间
const payMent = (state = [10], action) => {
    switch (action.type) {
        case act.CHANGE_PAYMENT:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.plan.insurances[0].insuranceDuration
        default:
            return state
    }
}

//倒计时
const second = (state = 0, action) => {
    switch (action.type) {
        case act.CHANGE_SECOND:
            return action.val
        default:
            return state
    }
}
//步骤
const tabIndex = (state ='0', action) => {
    switch (action.type) {
        case act.CHANGE_TAB:
            return action.val
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
            return action.entity.appliant.name
        case act.RESET:
            return ''
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
            return action.entity.insured.name
        case act.CHANGE_FOR_INSURED:
        case act.RESET:
            return ''
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
            return action.entity.appliant.idNum
        case act.INIT_USER_DATA:
            return action.certiNo
        case act.RESET:
            return ''
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
            return action.entity.insured.idNum
        case act.CHANGE_FOR_INSURED:
        case act.RESET:
            return ''
        default:
            return state
    }
}



// 投保人证件长期有效
const longEffective = (state = false, action) => {
    switch (action.type) {
        case act.CHANGE_EFFICTIVE:
            if (!action.val) {
                return !state
            } else if (action.val !== "9999-12-31") {
                return false
            }
        case act.INIT_EDIT_DATA:
            if (action.entity.appliant.validDateEnd=== "9999-12-31") {
                return true
            }
      
        case act.RESET:
            return false 
        default:
            return state
    }
}
// 被保人证件长期有效
const insurantEffective = (state = false, action) => {
    switch (action.type) {
        case act.CHANGE_INVALI_DATE:
            let status=false;
            if (!action.val) {
                status=!state
            } else if (action.val !== "9999-12-31") {
                status= false
            }
            return status;
        case act.INIT_EDIT_DATA:
            if (action.entity.insured.validDateEnd=== "9999-12-31") {
                return true
            }
        case act.CHANGE_FOR_INSURED:
        case act.RESET:
            return false
        default:
            return state
    }
}
// 投保人证件有效期
const certiNoEffictive = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_EFFICTIVE:
            if (action.val) {
                return action.val
            } else {
                return "9999-12-31"
            }
        case act.INIT_EDIT_DATA:
            return action.entity.appliant.validDateEnd
        case act.RESET:
            return ''
        default:
            return state
    }
}

// 被保人证件有效期
const certInvalidDate = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_INVALI_DATE:
            if (action.val) {
                return action.val
            } else {
                return "9999-12-31"
            }
        case act.INIT_EDIT_DATA:
            return action.entity.insured.validDateEnd
        case act.CHANGE_FOR_INSURED:
        case act.RESET:
            return ''
        default:
            return state
    }
}
// 身份证正面
const fontimg = (state = `${ctx}/static/img/lifeInsurance/cardFont.png`, action) => {
    switch (action.type) {
        case act.CHANGE_CARD_IMGFONT:
            return action.val
        case act.RESET:
            return `${ctx}/static/img/lifeInsurance/cardFont.png`
        default:
            return state
    }
}
// 证件背面
const backimg = (state = `${ctx}/static/img/lifeInsurance/cardBack.png`, action) => {
    switch (action.type) {
        case act.CHANGE_CARD_IMGBACK:
            return action.val
        case act.RESET:
            return `${ctx}/static/img/lifeInsurance/cardBack.png`
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
                if (el === action.entity.appliant.idType) {
                    index = index2;
                }
            });
            return index
        case act.RESET:
            return 0
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
                if (el === action.entity.insured.idType) {
                    index = index2;
                }
            });
            return index
        case act.CHANGE_FOR_INSURED:
        case act.RESET:
            return 0
        default:
            return state
    }
}
//投保人证件类型值
const holderCertiTypeVal = (state = 0, action) => {
    switch (action.type) {
        case act.CHANGE_HOLDER_CERTI_TYPE:
            let value = 0;
            data.HolderCertiTypeValue.map((el, index2) => {
                if (index2 === action.index) {
                    value = el;
                }
            });
            return value
        case act.INIT_EDIT_DATA:
            return action.entity.appliant.idType
        case act.RESET:
        
            return 0
        default:
            return state
    }
}

//被保人证件类型值
const insurantCertiTypeVal = (state = 0, action) => {
    switch (action.type) {
        case act.CHANGE_INSURANT_CERTI_TYPE:
            let value = 0;
            data.HolderCertiTypeValue.map((el, index2) => {
                if (index2 === action.index) {
                    value = el;
                }
            });
         
            return value
        case act.INIT_EDIT_DATA:
            return action.entity.insured.idType
        case act.RESET:
        case act.CHANGE_FOR_INSURED:
            return 0
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
            data.HolderGender.map((el, index2) => {
                if (el === action.entity.appliant.sex) {
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
        case act.RESET:
            return 0
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
            data.HolderGender.map((el, index2) => {
                if (el === action.entity.insured.sex) {
                    index = index2;
                }
            });
            return index
        case act.CHANGE_FOR_INSURED:
        case act.RESET:
            return 0
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
            return action.entity.appliant.birthDate
        case act.INIT_USER_DATA:
            return action.birthday
        case act.RESET:
            return ''
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
            return action.entity.insured.birthDate
        case act.CHANGE_FOR_INSURED:
        case act.RESET:
            return ''
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
            return action.entity.appliant.phone
        case act.INIT_USER_DATA:
            return action.phone
        case act.RESET:
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
            return action.entity.insured.phone
        case act.CHANGE_FOR_INSURED:
        case act.RESET:
            return ''
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
            return action.entity.appliant.email
        case act.INIT_USER_DATA:
            return action.email
        case act.RESET:
            return ''
        default:
            return state
    }
}
//被保人邮箱
const insurantEmail = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_INSURANT_EMAIL:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.insured.email
        case act.RESET:
        case act.CHANGE_FOR_INSURED:
            return ''
        default:
            return state
    }
}


//投保人地址
const holderAddressValue = (state = [], action) => {
    switch (action.type) {
        case act.CHANGE_HOLDERADDRESSVALUE:
            return action.val
        case act.INIT_EDIT_DATA:
            return [action.entity.appliant.province,action.entity.appliant.city,action.entity.appliant.county]
        
        case act.RESET:
            return []
        default:
            return state
    }
}
//投保人地址
const holderAddressLabel = (state = [], action) => {
    switch (action.type) {
        case act.CHANGE_HOLDERADDRESSLABEL:
            return action.val
        case act.INIT_EDIT_DATA:
            return [action.entity.appliant.province_name,action.entity.appliant.city_name,action.entity.appliant.country_name]
        case act.RESET:
            return []
        default:
            return state
    }
}

//投保人地址
const holderLocation = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_HOLDERLOCATION:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.appliant.permanentAddress
        case act.RESET:

            return ''
        default:
            return state
    }
}



//被保人地址
const insurantAddressValue = (state = ['', '', ''], action) => {
    switch (action.type) {
        case act.CHANGE_INSURANTADDRESSVALUE:
            return action.val
        case act.INIT_EDIT_DATA:
            return [action.entity.insured.province,action.entity.insured.city,action.entity.insured.county]
        case act.RESET:
        case act.CHANGE_FOR_INSURED:
            return []
        default:
            return state
    }
}
//被保人地址名称
const insurantAddressLabel = (state = ['','',''], action) => {
    switch (action.type) {
        case act.CHANGE_INSURANTADDRESSLABEL:
            return action.val
        case act.INIT_EDIT_DATA:
            return [action.entity.insured.province_name,action.entity.insured.city_name,action.entity.insured.country_name]
        case act.RESET:
        case act.CHANGE_FOR_INSURED:
            return []
        default:
            return state
    }
}
//被保人详细地址
const insurantLocation = (state ='', action) => {
    switch (action.type) {
        case act.CHANGE_INSURANT_LOCATION:
            return action.val
        case act.RESET:
        case act.CHANGE_FOR_INSURED:
            return ''
        default:
            return state
    }
}
//投保人邮编
const holderZipCode = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_HOLDER_ZIPCODE:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.appliant.zipCode
        case act.RESET:
            return ''
        default:
            return state
    }
}
//被保人邮编
const insurantZipCode = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_INSURANT_ZIPCODE:
            return action.val
        case act.INIT_EDIT_DATA:
            return action.entity.insured.zipCode
        case act.RESET:
        case act.CHANGE_FOR_INSURED:
            return ''
        default:
            return state
    }
}





//投保人年龄
const holderAge = (state = 18, action) => {
    switch (action.type) {
        case act.CHANGE_HOLDER_AGE:
            return action.val
        case act.RESET:
            return 18
        default:
            return state
    }
}



//被保人年龄
const insurantAge = (state = 0, action) => {
    switch (action.type) {
        case act.CHANGE_INSURANT_AGE:
            return action.val
        case act.RESET:
        case act.CHANGE_FOR_INSURED:
            return 0
        default:
            return state
    }
}



//被保人与投保人关系: 0=(1本人), 1=(2配偶) ,2=(3子女), 3=(4父母), 4=(5其他)
const forInsuredPerson = (state = ['00'], action) => {
    switch (action.type) {
        case act.CHANGE_FOR_INSURED:
            return action.val
        case act.INIT_EDIT_DATA:
            return [action.entity.insured.relaToInsured]
        case act.RESET:
            return ['00']
        default:
            return state
    }
}


const jobCategory = (state = [], action) => {
    switch (action.type) {
        case act.CHANGE_JOB_CATEGORY:
            return action.val
        case act.RESET:
            return []
        case act.INIT_EDIT_DATA:
            return [action.entity.insured.jobCategory]
        default:
            return state
    }
}
const jobCategoryLabel = (state = "", action) => {
    switch (action.type) {
        case act.CHANGE_JOB_CATEGORY_LABEL:
            return action.val
        case act.INIT_EDIT_DATA:
            let label='';
            data.jobCategoryList.map((item,index)=>{
                if(item.value===action.entity.insured.jobCategory){
                    label=item.label;
                }
            })
            return label;
        case act.RESET:
            return ""
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
        case act.RESET:
            return i_occupation
        default:
            return state
    }
}

 
//验证码
const smsCode = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_SMSCODE:
            return action.val
        case act.RESET:
            return ''
        default:
            return state
    }
}
//卡号
const bankNum = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_BANKNUM:
            return action.val
        case act.RESET:
            return ''
        default:
            return state
    }
}
//卡号
const healthy = (state = '', action) => {
    switch (action.type) {
        case act.CHECK_HEALTHY:
            return action.val
        case act.RESET:
            return ''
        default:
            return state
    }
}

//付款行
const bankCode = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_BANK_CODE:
            console.log(action.val)
            return action.val
        case act.RESET:
            return ''
        default:
            return state
    }
}
//预留手机号
const payPhone = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_PAYPHONE:
            return action.val
        case act.RESET:
            return ''
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
//客服是否显示
const service = (state = false, action) => {
    switch (action.type) {
        case act.CHANGE_SERVICE:
            return !state
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
            return action.entity.plan.orderNum
        case act.INIT_ORDERID:
            return action.val
        case act.CLEAR_ID:
        case act.RESET:
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
        // case act.INIT_EDIT_DATA:
        //     return action.entity.holderId
        case act.RESET:
            return ''
        default:
            return state
    }
}

// 被保对象id
const insuerId = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_IDS:
            return action.insuerId
        // case act.INIT_EDIT_DATA:
        //     return action.entity.insuerId
        case act.RESET:
            return ''
        default:
            return state
    }
}

// 订单号
const insuredId = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_IDS:
            return action.insuredId
        // case act.INIT_EDIT_DATA:
        //     return action.entity.insuredId
        case act.CLEAR_ID:
        case act.RESET:
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
        // case act.INIT_EDIT_DATA:
        //     return action.entity.
        case act.RESET:
            return ''
        default:
            return state
    }
}

//支付跳转地址
const url = (state = '', action) => {
    switch (action.type) {
        case act.CHANGE_IDS:
            return action.url
        case act.RESET:
            return ''
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
 
//确认注意项
const attenA = (state = true, action) => {
    switch (action.type) {
        case act.CHANGE_ATTENA:
            return !state
        default:
            return state
    }
}
//确认注意项
const attenB = (state = true, action) => {
    switch (action.type) {
        case act.CHANGE_ATTENB:
            return !state
        default:
            return state
    }
}




const rootReducer = combineReducers({
    staffId,
    workNum,
    staffmes,
    service,
    type,
    titleName,
    healthy,
    payMnetArry,
    varietyCode,
    fee,
    buyNum,
    amnt,
    payMent,
    tabIndex,
    second,
    effectiveDate,
    longEffective,
    certiNoEffictive,
    holderCertiType,
    holderCertiTypeVal,
    holderCertiNo,
    fontimg,
    backimg,
    holderName,
    holderAge,
    holderBirthday,
    holderGender,
    holderPhone,
    holderEmail,
    holderAddressValue,
    holderAddressLabel,
    certInvalidDate,
    insurantEffective,
    holderLocation,
    holderZipCode,
    insurantZipCode,
    insurantCertiType,
    insurantCertiNo,
    insurantCertiTypeVal,
    insurantName,
    insurantBirthday,
    insurantAge,
    insurantGender,
    insurantPhone,
    forInsuredPerson,
    insurantEmail,
    insurantAddressLabel,
    insurantAddressValue,
    insurantLocation,
    jobCategory,
    jobCategoryLabel,
 
    showSelector,
    selectorSelected,
    selectorOptions,
    selectorTarget,
    showLiSelector,
    liSelectorSelected,
    liSelectorOptions,
    liSelectorTarget,
    orderId,
    holderId,
    insuerId,
    insuredId,
    url,
    isLoading,
    policyNo,
    occupation,
    bankCode,
    payPhone,
    bankNum,
    smsCode,
    attenA,
    attenB

})

export default rootReducer