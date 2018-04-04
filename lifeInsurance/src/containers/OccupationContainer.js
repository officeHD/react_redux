import { connect } from 'react-redux'
import { changeOccupationShow, choiceInd, goBackStep, ChangeCategory, closeOccupationShow, clickJobs } from '../actions'
import Occupation from '../components/Occupation'
import data from '../reducers/data.json'
 
const mapStateToProps = (state) => ({
  isShow: state.occupation.isShow,
  category: state.occupation.category,
  code: state.occupation.code,
  category1_code: state.occupation.category1_code,
  category2_code: state.occupation.category2_code,
  category3_code: state.occupation.category3_code,
  category4_code: state.occupation.category4_code,
  btn: state.occupation.category === 0 ? '&times;' : '&lArr;',

})

const mapDispatchToProps = (dispatch, state) => ({
  onClickBtn: (step) => {
    if (step === 0) {
      dispatch(changeOccupationShow())
    } else {
      dispatch(goBackStep())
    }
  },

  onClickJob: (category, cname, code) => {
    if (category >= 4) {
      dispatch(changeOccupationShow())
      dispatch(ChangeCategory(0, cname, code))
    }else{
      dispatch(ChangeCategory(category, cname, code))
    }

    
    dispatch(clickJobs(category, cname, code))
  },
  onClose: () => {
    dispatch(closeOccupationShow())
  }
})

const OutPut = connect(
  mapStateToProps,
  mapDispatchToProps
)(Occupation)

export default OutPut
