/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:43 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-08-03 15:08:40
 */
import { connect } from 'react-redux'
import Product from '../components/Product'
import { changeTabIndex } from '../store/home/action'
import { changeMallType } from '../store/ui/action'

const mapStateToProps = (state) => {
    return ({
        mainData: state.mainData,
    })
}
const mapDispatchToProps = (dispatch) => ({
    changeActive: (val) => {
        dispatch(changeTabIndex(val));
    },
    goMall: (val) => {
        dispatch(changeMallType(val));
        window.location.href = "#/mallList";
    }
})

const AppAContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Product)

export default AppAContainer