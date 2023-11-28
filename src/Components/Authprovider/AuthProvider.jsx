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
  const [isAdmin, setAdmin] = useState(false)
  const [isHr, setisHr] = useState(false)
  const [status, setStatus] = useState()

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
    })
    
    return unSubscribe
  },[])
  
  
  
  useEffect(()=>{
    if (user !== null) {
      const email = user.email
      Axious.post(`/jwt`, email,{withCredentials:true})
      .then(res => console.log(res.data))
      Axious(`/employee?email=${user.email}`)
      .then(res=>{
        const data= res.data
        setUserRole(data[0].role)
        setStatus(data[0].status)
      })
    }
  },[user])
 
  useEffect(()=>{
    if (userRole === "Admin") {
      setAdmin(!isAdmin)
    }
    if (userRole === "HR") {
      console.log("i should be true");
      setisHr(!isHr)
    }
  },[userRole])

  console.log(userRole);
  console.log(isHr);
  console.log(isAdmin);



  const CreateUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword( auth, email, password )
  }

  const login = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = ()=>{
    const email = user.email
    Axious.post(`/logout`, {email},{withCredentials:true})
      .then(res => console.log(res.data))
    return signOut(auth)
  }
console.log(status);
  

  

    const Authdate ={
        user,
        userRole,
        isAdmin,
        isHr,
        loading,
        status,
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
