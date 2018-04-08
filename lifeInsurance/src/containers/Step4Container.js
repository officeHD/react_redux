import { connect } from 'react-redux'
import { goToStep, changeIsLoading, changeIsOtherWay, sendData } from '../actions'
import Step4 from '../components/Step4'
import data from '../reducers/data.json'

const mapStateToProps = (state) => ({
  step: 4,
  applyNum: data.ApplyNum[state.applyNum],
  sumPremium: (100 * data.ApplyNum[state.applyNum]).toFixed(2),
  balance: state.balance,
  isZACashier: state.isZACashier,
  url: state.url,
  isOtherWay: state.isOtherWay,
  insuredId: state.insuredId,
})

const mapDispatchToProps = (dispatch) => ({
  onGoToStep: () => {
    dispatch(goToStep(4))
  },
  // 众安收银
  onGoToZACashier: () => {
    dispatch(sendData())
  },
  //支付方式
  onChangeIsOtherWay: () => {
    dispatch(changeIsOtherWay())
  }
})

const Step4Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Step4)

export default Step4Container