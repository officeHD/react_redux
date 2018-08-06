/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:43 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 09:40:54
 */
import { connect } from 'react-redux'
import User from '../components/User'

const mapStateToProps = (state) => {
    return ({
        userData: state.userInfo
    })
}

const mapDispatchToProps = (dispatch) => ({
})

const AppCContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(User)

export default AppCContainer