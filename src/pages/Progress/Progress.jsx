import { useQuery } from '@tanstack/react-query'
import useAxios from '../../Components/Hook/AxiosUrl/useAxios'
import { Badge } from 'flowbite-react';
import { Card, Select } from 'flowbite-react';
import useEmployees from '../../Components/Hook/Employees/useEmployees';
import { useEffect, useState } from 'react';

const Progress = () => {
  const Axios = useAxios()
  const [employee] = useEmployees()
  const [employemail, setEmployeMail] = useState("")
  const [Month, setMonth] = useState("")
  const[work, setWork] = useState(null)
  
  const EmployeFilter = (e) =>{
    setEmployeMail(e)
  }
  const MonthFilter = (e) =>{
    setMonth(e)
  }

  useEffect(()=>{
    const fetchData = async () => {
      const result = await Axios(`/work?email=${employemail}&month=${Month}`);
      // Handle the res
      setWork(result.data)
    };
  
    fetchData();
  },[employemail, Month])

  return (
    <div className='mx-auto flex flex-col gap-5 p-[10px]'>
      <div>
        <form className='flex gap-2 justify-end'>
        <Select onChange={(e)=> EmployeFilter(e.target.value)} id="role" name='role' >
        <option value="">Employee:</option>
        {
          employee.map(em=>
            <option key={em._id} value={em.email}>{em.name}</option>
            )
        }
      </Select>
        <Select onChange={(e)=> MonthFilter(e.target.value)} id="role" name='role' >
        <option value="">Month:</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </Select>
        </form>
      </div>
      
    <div className='grid grid-cols-1 md:grid-cols-2  gap-2'>
    {
      work?.map(work=>
        <Card key={work._id}  className="hover:opacity-[0.8] cursor-pointer">
      
      <Badge color="success" className='w-fit'>
      <h5  className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
        {work.tasks}
      </h5>
      </Badge>
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Prepared by: {work.name}
      </h5>
      <div className='flex  gap-4'>
        <h1>Worked Hour: {work.hours} hr. </h1>
        <h1>Submited: {work.date} </h1>
      </div>
      
    </Card>
      )
    }
    </div>
    </div>
  )
}

export default Progress
