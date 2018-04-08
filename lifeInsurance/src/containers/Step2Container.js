import { connect } from 'react-redux'
import { checkInsurant } from '../actions'
import Step2 from '../components/Step2'

const mapStateToProps = (state) => {
  return ({ step: state.step })
}

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
    dispatch(checkInsurant())
  }
})

const Step2Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step2)

export default Step2Container