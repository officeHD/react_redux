import { connect } from 'react-redux'
import { changeHolderName, changeHolderNo, getPersonInfo, showSelector, changeHolderGender, changeHolderBirthday, changeHolderPhone, changeHolderEmail, changeHolderAddress } from '../actions'
import Holder from '../components/Holder'
import data from '../reducers/data.json'

const mapStateToProps = (state) => {
    return ({
        holderCertiType: state.holderCertiType,
        holderName: state.holderName,
        holderCertiNo: state.holderCertiNo,
        holderGender: state.holderGender,
        holderBirthday: state.holderBirthday,
        holderPhone: state.holderPhone,
        holderEmail: state.holderEmail,
        holderAddress: state.holderAddressValue,
    })
}

const mapDispatchToProps = (dispatch) => ({
    //投保人姓名
    onChangeHolderName: (val) => {
        dispatch(changeHolderName(val))
        //获取投保人信息
        dispatch(getPersonInfo("holder"));
    },
    //投保人身份证类型
    showHolderCertiTypeBox: (index) => {
        dispatch(showSelector(data.HolderCertiType, index, 'HolderCertiType'))
    },
    //投保人身份证
    onChangeHolderNo: (val) => {
        dispatch(changeHolderNo(val))
    },
    //投保人性别
    onChangeHolderGender: (option) => {
        dispatch(changeHolderGender(option))
    },
    //选择地址
    onChangeAddress: (option) => {
        dispatch(changeHolderAddress(option))
    },
    //投保人电话
    onChangeHolderPhone: (val) => {
        dispatch(changeHolderPhone(val))
    },
    //投保人电子邮箱
    onChangeHolderEmail: (val) => {
        dispatch(changeHolderEmail(val))
    }
})

const HolderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Holder)

export default HolderContainer