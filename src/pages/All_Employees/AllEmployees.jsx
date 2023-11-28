import React from 'react'
import useAllEployes from '../../Components/Hook/AllEmployes/useAllEployes'
import { Table } from 'flowbite-react';
import useAxios from '../../Components/Hook/AxiosUrl/useAxios';

const AllEmployees = () => {
    const [Allemployee,isLoading, refetch] = useAllEployes()
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

  return (
    <div className='container mx-auto'>
      <h1>All Employees.</h1>
      <div className="overflow-x-auto">
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
            <Table.Cell><img  className='w-[100px]' src={employee.imageURL} /></Table.Cell>
            <Table.Cell>{employee.name}</Table.Cell>
            <Table.Cell>{employee.designation}</Table.Cell>
            <Table.Cell>{employee.role ==="HR"? "HR" : <button onClick={()=>makeHr(employee._id)} className='bg-green-500 text-white p-[10px] rounded-md'>Make HR</button> }</Table.Cell>
            <Table.Cell><button className='bg-red-600 text-white p-[10px] rounded-md'>Fire</button></Table.Cell>
          </Table.Row>
                )
          }
        </Table.Body>
      </Table>
    </div>
    </div>
  )
}

export default AllEmployees
