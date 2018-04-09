import { connect } from 'react-redux'
import { changeInsurantName, changeInsurantNo, getPersonInfo,showSelector,changeAttentionA,changeAttentionB, changeInsurantGender, changeInsurantBirthday, changeInsurantPhone, changeInsurantEmail,changeJobCategoryLabel,changeOccupationShow , changeJobCategory} from '../actions'
import Insurant from '../components/Insurant'
import data from '../reducers/data.json'

const mapStateToProps = (state) => ({
  forInsuredPerson: state.forInsuredPerson,
  
  insurantCertiType: state.insurantCertiType,
  insurantName: state.insurantName,
  insurantCertiNo: state.insurantCertiNo,
  insurantGender: state.insurantGender,
  insurantBirthday: state.insurantBirthday,
  insurantPhone: state.insurantPhone,
  jobCategory:state.jobCategory,
  jobCategoryList:data.jobCategoryList,
  category1_cname: state.occupation.category1_cname,
  category2_cname: state.occupation.category2_cname,
  category3_cname: state.occupation.category3_cname,
  category4_cname: state.occupation.category4_cname,
  
})

const mapDispatchToProps = (dispatch) => ({
  //修改被保人姓名
  onChangeInsurantName: (val) => {
    dispatch(getPersonInfo());
    dispatch(changeInsurantName(val));
  },

  showInsurantCertiTypeBox: (index) => {
    dispatch(showSelector(data.HolderCertiType, index, 'InsurantCertiType'))
  },
  //修改被保人身份证号
  onChangeInsurantNo: (val) => {
    dispatch(changeInsurantNo(val)) 
  },
  //修改被保人出生日期
  onChangeInsurantBirthday: (val) => {
    dispatch(changeInsurantBirthday(val))
  },
  //修改被保人性别
  onChangeInsurantGender: (option) => {
    dispatch(changeInsurantGender(option))
  },
  //修改投保人电话
  onChangeInsurantPhone: (val) => {
    dispatch(changeInsurantPhone(val))
  },
  
  changeJobCategory:(val)=>{
    
    data.jobCategoryList.map((item,index)=>{
      if(val[0]===item.value){
        dispatch(changeJobCategoryLabel(item.label))
      }
    })
    dispatch(changeJobCategory(val))
     
  }, 
  onChangeOccupationShow: () => {
   
    dispatch(changeOccupationShow())
  },
  onchangeA:()=>{
    
    dispatch(changeAttentionA())
  } ,
  onchangeB:()=>{
    
    dispatch(changeAttentionB())
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Insurant)

export default Container