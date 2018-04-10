import { connect } from 'react-redux'
import { checkOrder } from '../actions'
import SureHealth from '../components/SureHealth'

const mapStateToProps = (state) => ({
    fee: state.fee,
    step: 1
})

const mapDispatchToProps = (dispatch) => ({
    handelClick: (val) => {
        console.log(val);
        window.location.replace("#/step1")
    }
})

const Step1Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(SureHealth)

export default Step1Container