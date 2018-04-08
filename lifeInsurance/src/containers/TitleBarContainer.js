import { connect } from 'react-redux'
import * as act from '../actions'
import TitleBar from '../components/public/TitleBar'
import { Toast } from 'antd-mobile';

const mapStateToProps = (state) => ({
  title: '安邦安鑫利两全保险（万能型）A款',
  staffId: state.staffId,
  type: state.type,
})

const mapDispatchToProps = (dispatch, state) => ({
  onGoBack: () => {
    
    window.history.back()
  },
})

const TitleBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar)

export default TitleBarContainer
