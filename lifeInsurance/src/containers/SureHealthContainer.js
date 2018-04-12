import { connect } from 'react-redux'
import { checkHealthy} from '../actions'
import SureHealth from '../components/SureHealth'

const mapStateToProps = (state) => ({
    healthy: state.healthy,
    content:state.titleName.healthy
  
})

const mapDispatchToProps = (dispatch) => ({
    handelClick: (val) => {
        dispatch(checkHealthy(val));
        console.log(val);
        if(val==="0"){
            window.location.replace("#/step1")
        }else if(val==="3"){
            if (window.minsheng) {
                window.minsheng.clickOnAndroid();
            }else{
                window.location.href = "sn://clickOnIOS";
                window.history.go(-1)
            }
        }
        
    }
})

const Step1Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(SureHealth)

export default Step1Container