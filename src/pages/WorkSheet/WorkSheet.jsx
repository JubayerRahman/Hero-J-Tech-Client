import { Label, Select, TextInput, Datepicker, Button, Table } from 'flowbite-react'
import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { AuthContent } from '../../Components/Authprovider/AuthProvider';
import useAxios from '../../Components/Hook/AxiosUrl/useAxios';
import { useQuery } from '@tanstack/react-query';

const WorkSheet = () => {
  const {user} = useContext(AuthContent)
  const [email, setEmail] = useState(null)
  const [workCount, SetWorkCount] = useState(0)
  console.log(email);
  const Axios = useAxios()
  const [currentPage, setCurrentPage] = useState(0)
  const limit = 5
  const {refetch, isLoading, data:Wokrs=[]} = useQuery({
    queryKey:["Work"],
    queryFn: async()=>{
      const res = await Axios.get(`/work?email=${user.email}&page=${currentPage}&size=${limit}`)
      console.log(res.data);
      return res.data
    }
  })
  const { data:AllWokrs=[]} = useQuery({
    queryKey:["AllWork"],
    queryFn: async()=>{
      const res = await Axios.get(`/work?email=${user.email}`)
      console.log(res.data);
      return res.data
    }
  })

  useEffect(()=>{
    if (user) {
      setEmail(user.email)
    }
    Axios(`/work?email=${email}`)
    .then(res=> SetWorkCount(res.data))
  },[user])
  console.log(email);
  console.log(workCount.length);

  const page = Math.ceil(AllWokrs.length/limit)
  const pages =[...Array(page).keys()]
  

  const workForm = e =>{
    e.preventDefault()
    const tasks =  e.target.tasks.value
    const hours = e.target.hours.value
    const date =e.target.date.value
    const month = date.split(" ")[0]
    if (tasks =="" || hours == "" ) {
      return Swal.fire({
        title:"fill all the fields",
        icon:"warning"
      })
    }
    const name = user.displayName
    const email = user.email
    const Work = {tasks, hours, date, name, email, month}
    console.log(Work);
    
    Axios.post("/work", Work)
    .then(res=> {
      if (res.data.insertedId) {
        Swal.fire({
          title:"Work Submitted Successfully",
          icon:"success"
        })
      }
      if (isLoading) {
        console.log("loading");
      }
      refetch()
    })
    console.log(Work);
  }
  if (isLoading) {
    console.log("loading");
  }
  const changingFunc = page =>{
    setCurrentPage(page)
    refetch()
  }

  useEffect(()=>{
    refetch()
  },[currentPage])
  
  return (
    <div className=' mx-auto'>
      <form onSubmit={workForm} className='flex flex-col md:flex-row p-[10px] gap-2'>
        <div className='w-full'>
        <Select id="tasks" name='tasks' >
            <option value="">choose a task?</option>
            <option value="Sales"> Sales </option>
            <option value="Support"> Support </option>
            <option value="Content"> Content </option>
            <option value="Paper-work"> Paper-work </option>
        </Select>
        </div>
        <TextInput className='w-full' id="hours" type="number" name='hours' placeholder="how meny hours you worked on it?" shadow />
        <Datepicker name="date" className='w-full' />
        <Button type='submit' className='w-full'>Add</Button>
      </form>
      <div className="overflow-x-auto my-[25px] mx-auto ">
      <Table>
        <Table.Head>
          <Table.HeadCell>Tasks</Table.HeadCell>
          <Table.HeadCell>Hours Worked</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            Wokrs.map(work =>
              <Table.Row key={work._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {work.tasks}
            </Table.Cell>
            <Table.Cell>{work.hours}</Table.Cell>
            <Table.Cell>{work.date}</Table.Cell>
          </Table.Row>
              )
          }
        </Table.Body>
      </Table>
          {
            Wokrs.length ==0 && <h1 key="work1" className='p-[10px] text-xl'>The system doesn't have any records of your work</h1>
          }
    </div>
    <div className='flex mx-auto container p-[10px]'>
    {
      pages.map(page=>
        
        <button key={page} 
        onClick={()=>changingFunc(page)}
        className={ currentPage == page? 'p-[5px] border-2 border-black w-fit cursor-pointer text-xl' : 'bg-black text-white w-fit p-[5px] border-2 border-black cursor-pointer'}>
        {page + 1}
        </button>
        )
    }
    </div>
    </div>
  )
}

export default WorkSheet
