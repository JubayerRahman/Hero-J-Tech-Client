import { Sidebar } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContent } from '../../Components/Authprovider/AuthProvider';
import useAxios from '../../Components/Hook/AxiosUrl/useAxios';


const Dashboard = () => {
    const {user} = useContext(AuthContent)
    const [userData, setUserData] = useState(null)
    const Axios = useAxios()
    useEffect(()=>{
        if(user){
            Axios(`/employee?email=${user.email}`)
            .then(res=> setUserData(res.data[0]))
        }
    },[])
    console.log(userData);
    const EmployLinks = 
    <>
            {
                userData?.role =="Employee"?
                <>
                <li className='text-[12px] md:text-[15px]'><NavLink to="/Dashboard/payment-history">payment History</NavLink></li>
            <li className='text-[12px] md:text-[15px]'><NavLink to="/Dashboard/work-sheet">work sheet</NavLink></li>
                </>
                :
                userData?.role =="HR"?
                <>
                    <li className='text-[12px] md:text-[15px]'>
                        <NavLink to="/Dashboard/employee-list">
                        Employee List
                        </NavLink>
                    </li>
                    <li className='text-[12px] md:text-[15px]'>
                        <NavLink to="/Dashboard/progress">
                        progress
                        </NavLink>
                    </li>
                </>
                :
                userData?.role =="Admin"?
                <>
                    <li className='text-[12px] md:text-[15px]'>
                        <NavLink to="/Dashboard/all-employee-list">
                        All Employee
                        </NavLink>
                    </li>
                </>
            :<h1>Ohee</h1>
            }
    </>
  return (
    <div className='flex flex-col md:flex-row gap-1 overflow-x-auto border-t-[4px] border-[#01203D]'>
    <div className=' md:min-h-screen bg-[#01203D] text-white p-[20px] text-center  lg:w-[15vw] overflow-x-auto'>
        <ul className='flex flex-row md:flex-col justify-evenly gap-[40px] flex-wrap dashboardNav'>
            {EmployLinks}
            {/* {HrLinks} */}
        </ul>
    </div>
    <div className=' mt-[30px]  lg:w-[80vw]'>
    <Outlet/>
    </div>
    </div>
  )
}

export default Dashboard
