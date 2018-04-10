import { connect } from 'react-redux'
import { goToStep, onShare, changeInsurantGender, changeBuyNum,changePayMent,getRate,changeInsurantBirthday } from '../actions'
import PlanA from '../components/Instruction/PlanA'
import { Toast } from 'antd-mobile';
const mapDispatchTo = (state) => ({
    staffId: state.staffId,
    fee: state.fee,
    type: state.type,
    insurantGender: state.insurantGender,
    insurantBirthday: state.insurantBirthday,
    buyNum: state.buyNum,
    payMent:state.payMent,
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
    payMentArry: [
        { value: "趸交", label: "趸交" },
        { value: 3, label: "3年" },
        { value: 5, label: "5年" },
        { value: 10, label: "10年" },
    ]
})

const mapDispatchToProps = (dispatch) => ({
    onShare: () => {
        if (window.minsheng) {
            window.minsheng.share()
        } else {
            window.location.href = `sn://share`;
        }
    },
    onChangeBuyNum: (val) => {
        dispatch(changeBuyNum(val))
        dispatch(getRate());
    },
    onChangePayMent:(val)=>{
        dispatch(changePayMent(val))
        dispatch(getRate());
        
    },
    //修改被保人性别
    onChangeInsurantGender: (option) => {
        dispatch(changeInsurantGender(option))
        dispatch(getRate()); 
    },
    onChangeInsurantBirthday:(val)=>{
        dispatch(changeInsurantBirthday(val));
        dispatch(getRate());
    }
})


const InstructionContainer = connect(
    mapDispatchTo,
    mapDispatchToProps
)(PlanA)

export default InstructionContainer