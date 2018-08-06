/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:43 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 11:55:58
 */
import { connect } from 'react-redux'
import SearchInsurPolicy from '../components/SearchInsurPolicy'
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

const SearchInsurPolicyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInsurPolicy)

export default SearchInsurPolicyContainer