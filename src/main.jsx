import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Components/Authprovider/AuthProvider.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/LogIn page/Login.jsx'
import Register from './pages/Register Page/Register.jsx'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
)
