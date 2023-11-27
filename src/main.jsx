import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Components/Authprovider/AuthProvider.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/LogIn page/Login.jsx'
import Register from './pages/Register Page/Register.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Employee_list from './pages/Employee_list/Employee_list.jsx'
import SingleEmployee from './pages/SingleEmployee/SingleEmployee.jsx'
import useAxios from './Components/Hook/AxiosUrl/useAxios.js'
import Progress from './pages/Progress/Progress.jsx'

const Axios = useAxios()



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
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      // Routes For HR
      {
        path:"/employee-list",
        element:<Employee_list/>
      },
      {
        path:"/details/:id",
        element:<SingleEmployee/>,
        loader: ({params})=> Axios(`/employee/${params.id}`) 
      },
      {
        path:"/progress",
        element:<Progress/>
      },
    ]
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
