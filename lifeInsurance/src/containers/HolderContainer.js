import { connect } from 'react-redux'
import { changeHolderName, changeHolderNo, getPersonInfo, showSelector, upLoadImg, changeHolderLocation, changeHolderZipCode, changeHolderGender, changeHolderBirthday, changeHolderPhone, changeHolderEmail, onchangeEffictive, changeHolderAddress } from '../actions'
import Holder from '../components/Holder'
import data from '../reducers/data.json'
import { Toast } from 'antd-mobile';
const mapStateToProps = (state) => {

    return ({
        holderCertiType: state.holderCertiType,
        holderName: state.holderName,
        certiNoEffictive: state.certiNoEffictive,
        longEffective: state.longEffective,
        holderCertiNo: state.holderCertiNo,
        holderGender: state.holderGender,
        holderBirthday: state.holderBirthday,
        holderPhone: state.holderPhone,
        holderEmail: state.holderEmail,
        holderAddress: state.holderAddressValue,
        holderLocation: state.holderLocation,
        holderZipCode: state.holderZipCode,
        fontimg: state.fontimg,
        backimg: state.backimg

    })
}


const mapDispatchToProps = (dispatch) => ({
    onChangeHolderName: (val) => {
        dispatch(changeHolderName(val))
        dispatch(getPersonInfo("holder"));
    },
    changeEffictive: (val) => {
        dispatch(onchangeEffictive(val))
    },
    showHolderCertiTypeBox: (index) => {
        dispatch(showSelector(data.HolderCertiType, index, 'holderCertiType'))
      },
    //投保人身份证
    onChangeHolderNo: (val) => {
        dispatch(changeHolderNo(val))
    },
    //修改投保人电话
    onChangeHolderPhone: (val) => {
        dispatch(changeHolderPhone(val))
    },
    //投保人性别
    onChangeHolderGender: (option) => {
        dispatch(changeHolderGender(option))
    },
    //选择地址
    onChangeAddress: (option) => {
        dispatch(changeHolderAddress(option))
    },
    //选择地址
    onChangeAddress: (option) => {
        dispatch(changeHolderAddress(option))
    },
    //选择地址
    onChangeHolderLocation: (val) => {
        dispatch(changeHolderLocation(val))
    },
    onChangeHolderBirthday:(val)=>{
        dispatch(changeHolderBirthday(val))
    },
    
    //修改投保人电子邮箱
    onChangeHolderEmail: (val) => {
        dispatch(changeHolderEmail(val))
    },
    onChangeHolderZipCode: (val) => {
        dispatch(changeHolderZipCode(val))
    },
    imageuploaded: (event, type) => {
        dispatch(upLoadImg(event, type))
    }
})

const HolderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Holder)

export default HolderContainer