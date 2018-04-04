import { connect } from 'react-redux'
import { goToStep, getBalance, changeIsLoading } from '../actions'
import Step3 from '../components/Step3'

const mapStateToProps = (state) => ({
  step:3, 
})

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
    dispatch(getBalance())
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step3)

export default Container