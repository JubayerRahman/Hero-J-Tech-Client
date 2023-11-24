import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase.confing'

export const AuthContent = createContext(null)

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
    })

    return unSubscribe
  },[])



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
