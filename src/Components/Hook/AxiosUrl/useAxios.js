import axios from 'axios'
import React from 'react'

const AxiosData = axios.create({
    baseURL: "http://localhost:5000"
    // baseURL: "https://hero-j-tech-server.vercel.app"
})
const useAxios = () => {
  return AxiosData
}

export default useAxios
