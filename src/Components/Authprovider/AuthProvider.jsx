import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase.confing'
import useAxios from '../Hook/AxiosUrl/useAxios'

export const AuthContent = createContext(null)

const AuthProvider = ({children}) => {

  const Axious = useAxios()

  const [user, setUser] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
    })

    return unSubscribe
  },[])

  useEffect(()=>{
    if (user) {
      const email =user.email
      Axious(`/employee?email=${email}`)
      .then(res=>{
        const data= res.data
        setUserRole(data[0].role)
      })
  }
  },[user])



  const CreateUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword( auth, email, password )
  }

  const login = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = ()=>{
    return signOut(auth)
  }

  

  

    const Authdate ={
        user,
        userRole,
        loading,
        CreateUser,
        login,
        logout
    }
  return (
    <AuthContent.Provider value={Authdate}>
      {children}
    </AuthContent.Provider>
  )
}

export default AuthProvider
