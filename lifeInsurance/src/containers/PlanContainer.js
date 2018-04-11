import { connect } from 'react-redux'
import { goToStep, onShare, changeInsurantGender,changeAmnt, changeBuyNum,changePayMent,getRate,changeInsurantBirthday } from '../actions'
import Plan from '../components/Instruction/Plan'
import { Toast } from 'antd-mobile';
const mapDispatchTo = (state) => ({
    title: state.titleName,
    varietyCode: state.varietyCode,
    fee: state.fee,
    amnt: state.amnt,
    insurantGender: state.insurantGender,
    insurantBirthday: state.insurantBirthday,
    buyNum: state.buyNum,
    payMent:state.payMent,
    insuYear:state.insuYear,
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
   
    insuYearArry:[
        { value: "20", label: "20年期" },
        { value: "30", label: "30年期" },
        { value: "60", label: "至60周岁" },
        { value: "65", label: "至65周岁" },
        { value: "70", label: "至70周岁" }
    ],
    payMentArry: state.payMnetArry
})

const mapDispatchToProps = (dispatch) => ({
    
    onChangeBuyNum: (val) => {
        dispatch(changeBuyNum(val))
        dispatch(getRate());
    },
    onChangeAmnt:(val)=>{
        dispatch(changeAmnt(val));
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
)(Plan)

export default InstructionContainer