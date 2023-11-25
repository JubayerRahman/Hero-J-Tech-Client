import React, { useState } from 'react'
import useEmployees from '../../Components/Hook/Employees/useEmployees'
import { Table } from 'flowbite-react';
import { ImCross } from "react-icons/im";
import { TiTickOutline } from "react-icons/ti";
import { Button, Modal } from 'flowbite-react'
import { Link } from 'react-router-dom';

const Employee_list = () => {
    const [employee] = useEmployees()
    const [openModal, setOpenModal] = useState(false);
    
  return (
    <div>
      <div className="overflow-x-auto container mx-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Bank Account</Table.HeadCell>
          <Table.HeadCell>Salary</Table.HeadCell>
          <Table.HeadCell>Verified</Table.HeadCell>
          <Table.HeadCell>Pay</Table.HeadCell>
          <Table.HeadCell>Details</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            employee.map(employee =>
                <Table.Row key={employee._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <div className='flex items-center gap-2'>
                        <img className='w-[80px] rounded-md' src={employee.imageURL} alt={employee.name} />
                        {employee.name}
                    </div>
                    </Table.Cell>
                    <Table.Cell><a href={`mailto:${employee.email}`}>{employee.email}</a></Table.Cell>
                    <Table.Cell>{employee.account}</Table.Cell>
                    <Table.Cell>${employee.salary}</Table.Cell>
                    <Table.Cell>
                    {employee.varification?<TiTickOutline className='text-green-600 text-xl' />:<ImCross className='text-red-600 text-xl mx-auto cursor-pointer' />}
                    </Table.Cell>
                    {/* Will work Here Tomorrow */}
                    <Table.Cell>
                    <Button onClick={() => setOpenModal(true)}>Pay</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Salary of {employee.name} is $ {employee.salary} per month
            </p>
            <p>Paying for:</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
        </Modal>
                    </Table.Cell>
                    <Table.Cell>
                        <Link to={`/details/${employee._id}`} >Details</Link>
                    </Table.Cell>
                </Table.Row>
                )
          }
        </Table.Body>
      </Table>
    </div>
    </div>
  )
}

export default Employee_list
