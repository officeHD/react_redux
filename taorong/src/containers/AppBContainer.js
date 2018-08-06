/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:43 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:54:50
 */
import { connect } from 'react-redux'
import Cicle from '../components/Cicle'

const mapStateToProps = (state) => {
    return ({
        learingData: state.learingData
    })
}

const mapDispatchToProps = (dispatch) => ({
})

const AppBContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cicle)

export default AppBContainer