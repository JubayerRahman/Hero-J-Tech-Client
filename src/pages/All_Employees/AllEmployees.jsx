import React, { useState } from 'react'
import useAllEployes from '../../Components/Hook/AllEmployes/useAllEployes'
import { Table } from 'flowbite-react';
import useAxios from '../../Components/Hook/AxiosUrl/useAxios';
import { CiViewTable } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { Card } from 'flowbite-react';
import { Badge } from 'flowbite-react';
import Swal from 'sweetalert2';

const AllEmployees = () => {
    const [Allemployee,isLoading, refetch] = useAllEployes()
    const [TableDisplay, setTableDisplay] = useState("block")
    const [gridDisplay, setGridDisplay] = useState("hidden")
    const Axios = useAxios()
    console.log(Allemployee)

    const makeHr = id =>{
        console.log(id);
        const role = "HR"
        Axios.put(`/employee/${id}`, {role})
        .then(res=>{
            console.log(res.data);
            refetch()
        })
    }
    const fireFunc = id =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Fire this Employee!"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(id);
          const status = "Fired"
          Axios.put(`/employee/${id}`, {status})
          .then(res=>{
              console.log(res.data);
              refetch()
              Swal.fire({
                title: "Fired!",
                text: "Your Employee has been Fired.",
                icon: "success"
              });
          })
        }
      });

    }

    const tableViewFunc = ()=>{
      setTableDisplay("block")
      setGridDisplay('hidden')
    }
    const gridViewFunc = ()=>{
      setTableDisplay("hidden")
      setGridDisplay('block')
    }

  return (
    <div className='container mx-auto flex flex-col justify-evenly gap-[10px] my-[25px]'>
      <div className='flex gap-2 justify-end p-[10px]'>
        <button onClick={tableViewFunc} className='text-xl p-[10px] bg-[#01203D] text-white rounded-md'><CiViewTable /></button>
        <button onClick={gridViewFunc} className='text-xl p-[10px] bg-[#01203D] text-white rounded-md'><IoGrid /></button>
      </div>
      <div className={`${TableDisplay} overflow-x-auto`}>
      <Table>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Designation</Table.HeadCell>
          <Table.HeadCell>Make HR</Table.HeadCell>
          <Table.HeadCell>Fire</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          
          {
            Allemployee.map((employee, index)=>
                <Table.Row key={employee._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
            </Table.Cell>
            <Table.Cell><img  className='w-[50px] md:w-[100px]' src={employee.imageURL} /></Table.Cell>
            <Table.Cell>{employee.name}</Table.Cell>
            <Table.Cell>{employee.designation}</Table.Cell>
            <Table.Cell>{employee.role ==="HR"? <h1 className='text-green-600 text-xl font-bold cursor-pointer'>HR</h1> : <button onClick={()=>makeHr(employee._id)} className='bg-green-500 text-white p-[10px] rounded-md'>Make HR</button> }</Table.Cell>
            <Table.Cell>
              {
                employee.status === "Fired" ?
                <h1 className='text-red-600 font-bold'>Fired</h1>
                :
                <button onClick={()=>fireFunc(employee._id)} className='bg-red-600 text-white p-[10px] rounded-md'>Fire</button>
              }
            </Table.Cell>
          </Table.Row>
                )
          }
        </Table.Body>
      </Table>
    </div>
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 my-[25px] ${gridDisplay}`}>
      {
        Allemployee.map(employee=>
          <Card
          key={employee._id}>
          <img src={employee.imageURL}/>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {employee.name}
          </h5>
          <div className='flex gap-3 items-center'>
            <p>Designation: {employee.designation}</p>
            <p>Role: {employee.role}</p>
          </div>
          {employee.role ==="HR"? <h1 className='text-green-600 text-xl font-bold cursor-pointer'>HR</h1> : <button onClick={()=>makeHr(employee._id)} className='bg-green-500 text-white p-[10px] rounded-md'>Make HR</button> }
          {
                employee.status === "Fired" ?
                <h1 className='text-red-600 font-bold'>Fired</h1>
                :
                <button onClick={()=>fireFunc(employee._id)} className='bg-red-600 text-white p-[10px] rounded-md'>Fire</button>
              }
        </Card>
        )
      }
    </div>
    </div>
  )
}

export default AllEmployees
