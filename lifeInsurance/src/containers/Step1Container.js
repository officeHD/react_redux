import { connect } from 'react-redux'
import { checkOrder,getRate } from '../actions'
import Step1 from '../components/Step1'

const mapStateToProps = (state) => ({
  fee:state.fee,
  step: 1
})

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
    dispatch(getRate())
    dispatch(checkOrder())
  }
})

const Step1Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1)

export default Step1Container