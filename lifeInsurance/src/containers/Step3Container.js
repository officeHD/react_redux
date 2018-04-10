import { connect } from 'react-redux'
import { goToStep, apply, changeIsLoading } from '../actions'
import Step3 from '../components/Step3'

const mapStateToProps = (state) => ({
  holderName:state.holderName,
  step:3, 
})

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
    dispatch(apply())
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step3)

export default Container