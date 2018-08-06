/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:43 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:56:11
 */
import { connect } from 'react-redux'
import ProductManage from '../components/ProductManage'
import { changeTabIndex } from '../store/home/action'

const mapStateToProps = (state) => {
    return ({})
}


const mapDispatchToProps = (dispatch) => ({
    changeActive: (val) => {
        dispatch(changeTabIndex(val));
    },
    onChangeTab: (val) => {
        dispatch(changeTab(val));
    }
})

const ProductManageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductManage)

export default ProductManageContainer