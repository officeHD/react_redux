import { connect } from 'react-redux'
import { goToStep, onShare, changeInsurantGender } from '../actions'
import PlanA from '../components/Instruction/PlanA'
import { Toast } from 'antd-mobile';
const mapDispatchTo = (state) => ({
    staffId: state.staffId,
    fee:state.fee,
    type: state.type,
    insurantGender: state.insurantGender,
    buyNumArr: [
        { value: 1, label: "1份" },
        { value: 2, label: "2份" },
        { value: 3, label: "3份" },
        { value: 4, label: "4份" },
        { value: 5, label: "5份" },
        { value: 6, label: "6份" },
        { value: 7, label: "7份" },
        { value: 8, label: "8份" },
        { value: 9, label: "9份" },
        { value: 10, label: "10份" }
    ],
    buyNum: ['1'],
    payMentArry: [
        { value: "趸交", label: "趸交" },
        { value: 5, label: "5年" },
        { value: 10, label: "10年" },
    ],
    payMent:['5']
})

const mapDispatchToProps = (dispatch) => ({

    changeBuyNum: (v) => {
        console.log(v)

    },
    onShare: () => {
        if (window.minsheng) {
            window.minsheng.share()
        } else {
            window.location.href = `sn://share`;
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
)(PlanA)

export default InstructionContainer