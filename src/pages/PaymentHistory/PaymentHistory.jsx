import React, { useContext, useEffect, useState } from 'react'
import { AuthContent } from '../../Components/Authprovider/AuthProvider'
import useAxios from '../../Components/Hook/AxiosUrl/useAxios'
import { Table } from 'flowbite-react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const PaymentHistory = () => {
    const {user} = useContext(AuthContent)
    const [userSalary, setUserSalary] = useState([])
    const [showData, setshowData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const Axios = useAxios()
    useEffect(()=>{
        if (user) {
            Axios(`https://hero-j-tech-server.vercel.app/salary?email=${user.email}`)
            .then(res=>{ setUserSalary(res.data)})
        }
    },[user])
    
    
    const SalaryLength = userSalary.length
    const datalinit = 5
    const page = Math.ceil(SalaryLength/datalinit)
    const pages =[...Array(page).keys()]
    
    useEffect(()=>{
        if (user) {
            Axios(`https://hero-j-tech-server.vercel.app/salary?email=${user.email}&page=${currentPage}&size=${datalinit}`)
            .then(res=>{ setshowData(res.data)})
        }
    },[currentPage, user])
      


  return (
    <div className='container mx-auto'>
        <h1 className='my-[20px] text-center p-[10px] md:text-xl'>Hi, {user?.displayName}. Here is your latest payment history. if you have any query fell free to contact with the HR.</h1>
      <div className="overflow-x-auto mx-auto md:w-[70%]">
      <Table>
        <Table.Head>
          <Table.HeadCell>Month</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Transaction Id</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            showData.map(salary=> 
            <Table.Row key={salary._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">  
            <Table.Cell>{salary.payedMonth}</Table.Cell>
            <Table.Cell className='flex items-center gap-2'> <FaBangladeshiTakaSign/> {salary.salarytoPay}</Table.Cell>
            <Table.Cell>{salary._id}</Table.Cell>
          </Table.Row> )
          }
        </Table.Body>
      </Table>
      <div className='flex gap-2 my-[25px]'>
      </div>
    </div>
      <div className='p-[10px] flex items-center'>
      {
        pages.map(page=>
        <button key={page} onClick={()=>setCurrentPage(page)} 
        className={currentPage==page?'border-2 p-[10px] border-black': 'bg-black p-[10px] text-xl text-white'}>{page +1}</button>)
      }
      </div>
    </div>
  )
}

export default PaymentHistory
