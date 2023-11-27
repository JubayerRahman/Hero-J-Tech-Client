import React, { useContext, useEffect, useState } from 'react'
import { AuthContent } from '../../Components/Authprovider/AuthProvider'
import { Link } from 'react-router-dom'
import useAxios from '../../Components/Hook/AxiosUrl/useAxios'

const WelcomePage = () => {
    const {user} = useContext(AuthContent)
    const [userData, setUserData] = useState(null)
    const Axios = useAxios() 

    useEffect(()=>{
      if(user){
          Axios(`/employee?email=${user.email}`)
          .then(res=> setUserData(res.data[0]))
      }
  },[])

  return (
    <div className='flex flex-col items-center'>
        <h1 className=' text-xl md:text-4xl font-[500] text-center'>
         Hi {user?.displayName},<br/> welome to your personal dashboard.
        </h1>
        <p className='text-center lg:w-[75%] my-[20px] mx-auto'>
        Here our dedicated and hard-working developers made features to keep track of your workflow. All these tools are here to help you with your work. feel free to connect with our developing team for any help or suggestions. Our team of developers is working hard to make the system perfect and updating it with the latest features every day. So, they will be very pleased to hear from you and how it helps you and how can it help you more.
        </p>
        <div className='flex gap-3'>
            {
              userData?.role === "Employee"?
              <Link to="/Dashboard/payment-history">
            <button className='text-xl p-[15px] border-4 rounded-lg bg-[#01203D] border-[#01203D] text-white '>Get Started</button>
            </Link>
            : userData?.role ==="HR"?
            <Link to="/Dashboard/employee-list">
            <button className='text-xl p-[15px] border-4 rounded-lg bg-[#01203D] border-[#01203D] text-white '>Get Started</button>
            </Link>
            : <h1>No Link for you.</h1>
            }
            <Link to="/contact">
            <button className='text-xl p-[15px] border-4 rounded-lg border-[#01203D] '>Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default WelcomePage
