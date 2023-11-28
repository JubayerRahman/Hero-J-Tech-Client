import React, { useContext } from 'react'
import { AuthContent } from '../Authprovider/AuthProvider'
import { Link, Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user,status, loading} = useContext(AuthContent)
    const location = useLocation()

    if(loading){
        return <div className='flex h-screen justify-center items-center'>
          <h1 className='text-5xl font-bold'>Loading</h1>
          </div>
    }
    if(status === "Fired"){
      console.log("hii");
      return <div className='flex flex-col h-screen justify-center items-center p-[10px]'>
      <h1 className='text-xl font-bold'>It is very unfortunate to inform you that our honorable admin has decided to remove you from your post. Your services are no longer required. Thanks for your contribution to our company. From now on you cannot use any features of this website. If you have any query please contact our HR Team. We wish you the Best of luck for your future.  </h1>
      <Link to="/contact"><button className='text-white bg-black text-2xl my-[20px] rounded-md p-[15px]'>Contact</button></Link>
      </div>
    }
    if (user == null) {
      return <Navigate state={location.pathname} to="/login"/>
  }
  return (children)
}

export default PrivateRoute
