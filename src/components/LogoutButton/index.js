// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const logOutClicked = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <button type="button" onClick={logOutClicked}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
