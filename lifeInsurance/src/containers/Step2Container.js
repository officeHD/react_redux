import { connect } from 'react-redux'
import { checkInsurant } from '../actions'
import { apply  } from '../actions'

import Step2 from '../components/Step2'
import data from '../reducers/data.json'
const mapStateToProps = (state) => ({
  holderCertiType: state.holderCertiType,
  holderName: state.holderName,
  holderPhone: state.holderPhone,
  holderCertiNo: state.holderCertiNo,
  certiNoEffictive: state.certiNoEffictive,
  longEffective: state.longEffective,
  holderGender: state.holderGender,
  holderBirthday: state.holderBirthday,
  holderEmail: state.holderEmail,
  holderAddress: state.holderAddressLabel,
  holderLocation: state.holderLocation,
  holderZipCode: state.holderZipCode,
  
  forInsuredPerson: data.forInsuredPerson.map((item,index)=>{if(state.forInsuredPerson[0]===item.value){return item.label}}), 
  insurantCertiType: state.insurantCertiType,
  insurantName: state.insurantName,
  insurantCertiNo:  state.insurantCertiNo,
  insurantGender: state.insurantGender,
  insurantBirthday: state.insurantBirthday,
  insurantPhone: state.insurantPhone,
  jobCategory: state.jobCategoryLabel,
 
  category1_cname: state.occupation.category1_cname,
  category2_cname: state.occupation.category2_cname,
  category3_cname: state.occupation.category3_cname,
  category4_cname: state.occupation.category4_cname,

})

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
     
      dispatch(apply());
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step2)

export default Container