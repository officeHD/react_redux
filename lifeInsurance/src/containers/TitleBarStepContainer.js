import { connect } from 'react-redux'
import { toggleShowParameter, goToStep } from '../actions'
import TitleBar from '../components/TitleBar'

const mapStateToProps = (state) => ({
  title: state.titleName.title,
  step: state.step,
  staffId: state.staffId,
  type: state.type,
})

const mapDispatchToProps = (dispatch, state) => ({
  onGoBack: () => {
    history.go(-1)
  }
})
  
const TitleBarDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar)

export default TitleBarDetailContainer
