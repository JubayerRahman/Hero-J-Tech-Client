import axios from 'axios'
import React from 'react'

const AxiosData = axios.create({
    baseURL: "http://localhost:5000"
})
const useAxios = () => {
  return AxiosData
}

export default useAxios
