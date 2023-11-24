import React, { createContext } from 'react'

export const AuthContent = createContext(null)

const AuthProvider = ({children}) => {
    const data ="I am a data"
    const Authdate ={
        data
    }
  return (
    <AuthContent.Provider value={Authdate}>
      {children}
    </AuthContent.Provider>
  )
}

export default AuthProvider
