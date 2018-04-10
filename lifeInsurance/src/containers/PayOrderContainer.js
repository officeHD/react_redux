import { connect } from 'react-redux'
import PayOrder from '../components/PayOrder'
import { changePayPhone, changeBankNum, changePayBank, getMesCode, changeSmsCode } from '../actions'
import data from '../reducers/data.json'
import { Toast } from 'antd-mobile';

const mapStateToProps = (state) => ({
    bankVal: state.payBank,
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
    onChangePayBank: (val) => {

        dispatch(changePayBank(val))
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