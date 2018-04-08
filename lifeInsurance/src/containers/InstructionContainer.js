import { connect } from 'react-redux'
import { goToStep, onShare } from '../actions'
import Instruction from '../components/Instruction/'
import { Toast } from 'antd-mobile';
const mapDispatchTo = (state) => ({
  staffId: state.staffId,
  type: state.type,
})

const mapDispatchToProps = (dispatch) => ({

  onGoToStep: (staffId) => {

    if (staffId) {
      dispatch(goToStep(1))
      location.href = '#/step2'
    } else {
      Toast.info("请登录后使用")
    }

  },
  onShare: (staffId) => {
    if (staffId) {
      if (window.minsheng) {
        window.minsheng.share()
      } else {
        window.location.href = `sn://share`;
      }
    } else {
      Toast.info("请登录后使用")
    }

  }
})


const InstructionContainer = connect(
  mapDispatchTo,
  mapDispatchToProps
)(Instruction)

export default InstructionContainer