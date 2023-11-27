import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom'
import { Badge } from 'flowbite-react';
import useAxios from '../../Components/Hook/AxiosUrl/useAxios';


const SingleEmployee = () => {
  const LoadedData = useLoaderData()
  const Datatouse = LoadedData.data
  const Axious = useAxios()
  const [salaryData, setSalaryData] = useState([])

  useEffect(()=>{
    Axious(`/salary?email=${Datatouse.email}`)
    .then(res=> setSalaryData(res.data))
  },[])

  console.log(salaryData);
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className='flex flex-col md:flex-row p-[10px] gap-5 container mx-auto'>
      <img className='w-[450px]' src={Datatouse.imageURL} />
      <div className='md:flex-1 flex flex-col justify-between'>
        <h1 className='text-xl md:text-2xl font-[500]'>{Datatouse.name}</h1>
        <Badge className='w-fit text-md' color="success">{Datatouse.designation}</Badge>
        <div className='char w-[100%] h-[40vh]'>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          // width={500}
          // height={300}
          data={salaryData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="payedMonth" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="salarytoPay" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default SingleEmployee
