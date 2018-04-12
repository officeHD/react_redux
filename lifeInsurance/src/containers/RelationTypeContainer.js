import { connect } from 'react-redux'
import { changeForInsuredPerson } from '../actions'
import RelationType from '../components/RelationType'
import data from '../reducers/data.json'

const mapStateToProps = (state) => ({
  forInsuredPerson: state.forInsuredPerson,
  varietyCode: state.varietyCode,
  relation: [
    { "value": "00", "label": "本人" },
    { "value": "03", "label": "子女" }
  ]


})

const mapDispatchToProps = (dispatch) => ({
  //改变投保关系
  changeRelation: (val) => {
    dispatch(changeForInsuredPerson(val))
  }


})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelationType)

export default Container