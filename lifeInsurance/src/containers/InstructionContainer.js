import { connect } from 'react-redux'
import { goToStep,onShare,changeInsurantGender } from '../actions'
import Instruction from '../components/Instruction/'
import { Toast } from 'antd-mobile';
const mapDispatchTo = (state) => ({
  staffId: state.staffId,
  type: state.type,
  fee: state.fee,
  insurantGender: state.insurantGender
})

const mapDispatchToProps = (dispatch) => ({
	
  onGoToStep: () => {
       dispatch(goToStep(1))
        location.href = '#/step1' 
  },
  onShare:()=>{
  	 if(window.minsheng){
             window.minsheng.share()
        }else{
            window.location.href=`sn://share`;    
        }
  },
    //修改被保人性别
    onChangeInsurantGender: (option) => {
      dispatch(changeInsurantGender(option))
    }
})

 
const InstructionContainer = connect(
  mapDispatchTo,
  mapDispatchToProps
)(Instruction)

export default InstructionContainer