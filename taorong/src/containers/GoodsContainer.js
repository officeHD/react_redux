/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:43 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-08-06 18:51:52
 */
import { connect } from 'react-redux'
import { selectSpec, increase, decrease } from '../store/goods/action'
import Goods from '../components/Goods'

const mapStateToProps = (state) => {
    return ({
        goodsData: state.goodsData
    })
}

const mapDispatchToProps = (dispatch) => ({
    selectSpec: (index, val) => {
        dispatch(selectSpec(index, val))
    },
    increase: (index) => {
        dispatch(increase())
    },
    decrease: (index) => {
        if (index <= 1) {
            return false;
        }
        dispatch(decrease())
    }
})

const AppCContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Goods)

export default AppCContainer