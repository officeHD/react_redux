/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:43 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:56:20
 */
import { connect } from 'react-redux'
import MyShare from '../components/MyShare'
import { changeTabIndex } from '../store/home/action'

const mapStateToProps = (state) => {
    return ({
        userShare:state.userShare
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
)(MyShare)

export default MyShareContainer