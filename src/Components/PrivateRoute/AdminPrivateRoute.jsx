import React, { useContext } from 'react'
import { AuthContent } from '../Authprovider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const AdminPrivateRoute = ({children}) => {
    const {user, isAdmin, loading} = useContext(AuthContent)

    if(loading){
        return <div className='flex h-screen justify-center items-center'>
          <h1 className='text-5xl font-bold'>Loading</h1>
          </div>
    }
    if ( user == null && !isAdmin) {
      return <Navigate to="/"/>
  }
  if (user == null) {
    return <Navigate state={location.pathname} to="/login"/>
}
  return children
}

export default AdminPrivateRoute
