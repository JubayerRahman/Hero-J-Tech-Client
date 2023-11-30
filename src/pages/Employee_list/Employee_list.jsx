import React, { useState } from 'react'
import useEmployees from '../../Components/Hook/Employees/useEmployees'
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Table } from 'flowbite-react';
import { ImCross } from "react-icons/im";
import { TiTickOutline } from "react-icons/ti";
import { Button, Modal, Label, Select } from 'flowbite-react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxios from '../../Components/Hook/AxiosUrl/useAxios';
import {loadStripe} from '@stripe/stripe-js';

const Employee_list = () => {
  const [employee,isLoading, refetch] = useEmployees()
  const Axios = useAxios()
  const [openModal, setOpenModal] = useState(null);
  const [loading, setLoading] = useState(true)
  const [checkButton, setcheckButton] = useState("block")
  const [payButton, setpayButton] = useState("hidden")

    const handleOpenModal = (employeeId) => {
      setOpenModal(employeeId);
    };

    const ChecFunction = data =>{
      const month = document.getElementById("month").value
      const year = document.getElementById("year").value
      if (month == "" || year =="") {
        return Swal.fire({
          title:"Fill both the field",
          icon:"warning"
        })
      }

      const name = data.name
      const email = data.email
      const employeeId = data._id
      const salarytoPay = data.salary
      const quantity = 1
      const payedMonth =(month +"," + year)
      const result = []
      Axios(`salary?email=${data.email}&data=${payedMonth}`)
      .then(res=>{
        console.log(res.data.length);
        if (res.data.length>0) {
          return Swal.fire({
            title:"You already paid this employee for this time period",
            icon: "info"
          })
        }
        else{
          setcheckButton("hidden")
          setpayButton("block")
        }

      })
    }

    
    const PayFunction = async (data) =>{
      const month = document.getElementById("month").value
      const year = document.getElementById("year").value

      const name = data.name
      const email = data.email
      const employeeId = data._id
      const salarytoPay = data.salary
      const quantity = 1
      const payedMonth =(month +"," + year)

          // console.log(salary);
          const salary = {name, email, employeeId, salarytoPay, quantity, payedMonth}
          
          //payment getway
          const stripe = await loadStripe("pk_test_51K7EeJSAZSYJA0jhkqSefYZRl8y5Rv0ZveUMYsySRjaoN4dLCFMxgH3UNRGCDykKCKCCQaUAeltmKZ2TKaqxFMEq00EenusCl6")
          const header ={
            "Content-Type":"application/json"
          }
          const responce = await fetch('https://hero-j-tech-server.vercel.app/chackout',{
            method:"POST",
            headers: header,
            body:JSON.stringify(salary)
          })
      
          const seassion = await responce.json()
      
          const result = stripe.redirectToCheckout({
            sessionId:seassion.id
          })
    
          if (result.error) {
            // console.log(result.error)
          }
          else{
            Axios.post("/salary", salary)
            // .then(res=>console.log(res.data))
          }
        
      

    }

    const verifyFunction = id =>{
      const varification = true
      Axios.put(`employee/${id}`, {varification})
      .then(res => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title:"Employee Verification modified successfully",
            icon:"success"
          })
          }
          // console.log(res.data)
          refetch();
        })
    }
    const unVerify = id =>{
      const varification = false
      Axios.put(`employee/${id}`, {varification})
      .then(res => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title:"Employee Verification modified successfully",
            icon:"success"
          })
        }
          console.log(res.data)
          refetch();
        })
    }
    
  return (
    <div>
      <div className="overflow-x-auto mx-auto w-[90%]">
      <Table>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
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
            employee.map( (employee, index) =>
                <Table.Row key={employee._id} className="bg-white over dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {index +1}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <img className='w-[80px] rounded-md' src={employee.imageURL} alt={employee.name} />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {employee.name}
                    </Table.Cell>
                    <Table.Cell><a href={`mailto:${employee.email}`}>{employee.email}</a></Table.Cell>
                    <Table.Cell>{employee.account}</Table.Cell>
                    <Table.Cell className='flex items-center gap-2'><FaBangladeshiTakaSign/> {employee.salary}</Table.Cell>
                    <Table.Cell>
                    {employee.varification?<TiTickOutline onClick={()=>unVerify(employee._id)} className='text-green-600 text-2xl mx-auto' />:
                    <ImCross onClick={()=> verifyFunction(employee._id)} className='text-red-600 text-xl mx-auto cursor-pointer' />}
                    </Table.Cell>
                    {/* Will work Here Tomorrow */}
                    <Table.Cell>
                      {
                        employee.varification == true ?
                        <Button  onClick={() => handleOpenModal(employee._id)}>Pay</Button>
                        :
                        <Button disabled >Pay</Button>
                      }
      <Modal id={`modal-${employee._id}`} show={openModal === employee._id} onClose={() => setOpenModal(false)}>
        <Modal.Header >Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Salary of {employee.name} is $ {employee.salary} per month
            </p>
            <div className='flex items-center gap-3'>
            <p>Paying for:</p>
            <form className='flex-1 flex items-center justify-between gap-3'>
                  <Select id='month' className='w-full'  name='month' >
                    <option value="">Select Month:</option>
                    <option value="January"> January </option>
                    <option value="February"> February </option>
                    <option value="March"> March </option>
                    <option value="April"> April  </option>
                    <option value="May"> May </option>
                    <option value="June"> June  </option>
                    <option value="July"> July  </option>
                    <option value="August"> August  </option>
                    <option value="September"> September  </option>
                    <option value="October"> October  </option>
                    <option value="November"> November  </option>
                    <option value="December">  December </option>
                  </Select>
                  <Select id='year' className='w-full' name='year' >
                    <option value="">Select Year:</option>
                    <option value="2023"> 2023 </option>
                    <option value="2024"> 2024 </option>
                    <option value="2025"> 2025 </option>
                    <option value="2026"> 2026 </option>
                    <option value="2027"> 2027 </option>
                    <option value="2028"> 2028 </option>
                    <option value="2029"> 2029 </option>
                    <option value="2030"> 2030 </option>
                    <option value="2031"> 2031 </option>
                    <option value="2032"> 2032 </option>
                    <option value="2033"> 2033 </option>
                    <option value="2034"> 2034 </option>
                  </Select>
            </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className={`${checkButton}`} onClick={()=> ChecFunction(employee)} >Check</Button>
          <Button className={`${payButton}`} onClick={()=> PayFunction(employee)}>Pay</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
        </Modal>
                    </Table.Cell>
                    <Table.Cell>
                        <Link className='underline' to={`/Dashboard/details/${employee._id}`} >Details</Link>
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
