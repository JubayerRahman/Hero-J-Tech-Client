import React, { useContext } from 'react'
import { AuthContent } from '../Authprovider/AuthProvider'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContent)
    if(loading){
        return <h1>Loading</h1>
    }
  return (children)
}

export default PrivateRoute
