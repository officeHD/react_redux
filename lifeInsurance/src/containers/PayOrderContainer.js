import { connect } from 'react-redux'
import PayOrder from '../components/PayOrder'
import { changePayPhone, changeBankNum,changeBankCode, getMesCode, changeSmsCode } from '../actions'
import data from '../reducers/data.json'
import { Toast } from 'antd-mobile';

const mapStateToProps = (state) => ({
    bankCode: state.bankCode,
    holderName: state.holderName,
    bankNum: state.bankNum,
    payPhone: state.payPhone,
    smsCode: state.smsCode,
    second: state.second

})
const mapDispatchToProps = (dispatch) => ({
    onChangePayPhone: (val) => {
        dispatch(changePayPhone(val))
    },
    onChangeBankNum: (val) => {
        dispatch(changeBankNum(val))
    },
    onChangeBankCode: (val) => {
        dispatch(changeBankCode(val))
    },
    onChangeSmsCode: (val) => {
        dispatch(changeSmsCode(val))
    },
    onGetMesCode: (val) => {
        if (val <= 0) {
            dispatch(getMesCode())
        } else {
            Toast.info(`${val}秒后重试`, 2)
        }

    }


})
const HolderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PayOrder)

export default HolderContainer