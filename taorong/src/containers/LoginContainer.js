/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:43 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:56:37
 */
import { connect } from 'react-redux'
import Login from '../components/Login'
import { getCode,setUserInfo } from '../store/user/action'

const mapStateToProps = (state) => {
    return ({
        userInfo: state.userInfo
    })
}


const mapDispatchToProps = (dispatch) => ({
    HandelClick: () => {
        dispatch(getCode());
    },
    SetUserInfo:()=>{
        dispatch(setUserInfo());
        window.location.href="#/"
    }
})

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginContainer