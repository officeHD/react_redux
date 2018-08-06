/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:43 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-08-03 16:39:53
 */
import { connect } from 'react-redux'
import MyInfo from '../components/MyInfo'
import { changeTabIndex } from '../store/home/action'

const mapStateToProps = (state) => {
    return ({
        userInfo: state.userInfo
    })
}

const mapDispatchToProps = (dispatch) => ({
    changeActive: (val) => {
        dispatch(changeTabIndex(val));
    },
    onChangeTab: (val) => {
        dispatch(changeTab(val));
    }
})

const MyShareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyInfo)

export default MyShareContainer