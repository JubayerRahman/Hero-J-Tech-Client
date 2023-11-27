import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import useAxios from '../AxiosUrl/useAxios'
import { useLocation } from 'react-router-dom'
import { AuthContent } from '../../Authprovider/AuthProvider'
import axios from 'axios'

const useEmployees = () => {
    const Axious = useAxios()
    const {userRole} = useContext(AuthContent)

    if (userRole) {

        console.log(userRole);
    }
    
    const {refetch, isLoading, data:employee=[]} = useQuery({
        queryKey:["employee"],
        queryFn: async ()=>{
            const res = await Axious.get("/employee?role=Employee")
            return res.data
        }
    })
  return [employee,isLoading, refetch]
}

export default useEmployees
