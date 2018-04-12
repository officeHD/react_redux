import { connect } from 'react-redux'
import { upLoadImg } from '../actions'
import UploadImg from '../components/UploadImg'

const mapStateToProps = (state) => ({
    fontimg: state.fontimg,
    backimg: state.backimg

})

const mapDispatchToProps = (dispatch) => ({
  
    imageuploaded: (event, type) => {
        dispatch(upLoadImg(event, type))
        
    }
})

const NumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImg)

export default NumContainer