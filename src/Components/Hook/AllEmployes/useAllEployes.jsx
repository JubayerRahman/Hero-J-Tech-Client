import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import useAxios from '../AxiosUrl/useAxios'
import { useLocation } from 'react-router-dom'
import { AuthContent } from '../../Authprovider/AuthProvider'

const useAllEployes = () => {
    const Axious = useAxios()
    const {userRole} = useContext(AuthContent)

    if (userRole) {

        console.log(userRole);
    }
    
    const {refetch, isLoading, data:Allemployee=[]} = useQuery({
        queryKey:["employee"],
        queryFn: async ()=>{
            const res = await Axious.get("/employee")
            return res.data
        }
    })
  return [Allemployee,isLoading, refetch]
}
  

export default useAllEployes
