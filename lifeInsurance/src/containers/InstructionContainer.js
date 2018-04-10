import { connect } from 'react-redux'
import { onShare } from '../actions'
import Instruction from '../components/Instruction/'
import { Toast } from 'antd-mobile';
const mapDispatchTo = (state) => ({
  staffId: state.staffId,
  type: state.type,
  varietyCode: state.varietyCode,
  fee: state.fee
})

const mapDispatchToProps = (dispatch) => ({

  onGoToStep: () => {
    location.href = '#/sure'
  },
  onShare: () => {
    if (window.minsheng) {
      window.minsheng.share()
    } else {
      window.location.href = `sn://share`;
    }
  }

})


const InstructionContainer = connect(
  mapDispatchTo,
  mapDispatchToProps
)(Instruction)

export default InstructionContainer