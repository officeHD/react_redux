/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:43 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-23 17:27:15
 */
import { connect } from 'react-redux'
import MallType from '../components/MallType'
import { changeActive,changeMallType } from '../store/ui/action'

const mapStateToProps = (state) => {
    return ({
        mallData: state.mallData
    })
}


const mapDispatchToProps = (dispatch) => ({
    changeType: (val) => {
        dispatch(changeMallType(val));
    },
    changeActive:(val)=>{
        dispatch(changeActive(val))
    }
})

const MallTypeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MallType)

export default MallTypeContainer