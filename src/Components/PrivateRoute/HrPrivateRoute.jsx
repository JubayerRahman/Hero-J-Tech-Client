import { useContext } from 'react'
import { AuthContent } from '../Authprovider/AuthProvider'
import useAxios from '../Hook/AxiosUrl/useAxios'
import { Navigate, useLocation } from 'react-router-dom'

const HrPrivateRoute = ({children}) => {
    const {user, isHr, loading} = useContext(AuthContent)
    const location = useLocation()

    if(loading){
        return <div className='flex h-screen justify-center items-center'>
          <h1 className='text-5xl font-bold'>Loading</h1>
          </div>
    }
    if (!isHr) {
      return <Navigate to="/"/>
  }
    if (user == null) {
        return <Navigate state={location.pathname} to="/login"/>
  }
  return (children)
}

export default HrPrivateRoute
