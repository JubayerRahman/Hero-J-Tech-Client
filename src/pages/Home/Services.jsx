import React, { useEffect, useState } from 'react'
import { Button, Card } from 'flowbite-react';


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("./Services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className='my-[50px] container mx-auto'>
      <div className='bg-[#F27364] mx-auto h-[4px] w-[30%] rounded-lg'></div>
      <h1 className='text-center text-5xl font-bold mt-[15px] mb-[15px] text-[#225A8D]'>Services</h1>
      <div className='bg-[#F27364] mx-auto h-[4px] w-[30%] rounded-lg'></div>

      {
        services.length>0?
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-[50px] p-[10px]'>
            {
                services.map(service=>
                    <Card key={service.id} className='max-w-sm border-[#01203D] shadow-md'>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl text-center font-extrabold tracking-tight">{service.service_name}</span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
        </li>
        {
            service.features.map(f => 
                <li key={f} className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    {f}</span>
              </li>
                )
            }
            <Button className='text-center mx-auto'>Starts from: ${service.price}</Button>
      </ul>
    </Card>
                )
            }
        </div>
        :
        <h1>No servicess are available</h1>
      }
    </div>
  )
}

export default Services
