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
import PaymentHistory from './pages/PaymentHistory/PaymentHistory.jsx'
import WorkSheet from './pages/WorkSheet/WorkSheet.jsx'
import PrivateRoute from './Components/PrivateRoute/privateRoute.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import WelcomePage from './pages/WelcomePage/WelcomePage.jsx'
import AllEmployees from './pages/All_Employees/AllEmployees.jsx'
import HrPrivateRoute from './Components/PrivateRoute/HrPrivateRoute.jsx'
import AdminPrivateRoute from './Components/PrivateRoute/AdminPrivateRoute.jsx'
import Errorpage from './pages/Errorpage/Errorpage.jsx'
import AboutUs from './pages/About us/AboutUs.jsx'

const Axios = useAxios()



const routes = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <Errorpage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/aboutus",
        element:<AboutUs/>
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
      {
        path:"/Dashboard",
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
          //routes for Employee
      {
        path:"/Dashboard",
        element:<PrivateRoute><WelcomePage></WelcomePage></PrivateRoute>
      },
      {
        path:"/Dashboard/payment-history",
        element:<PrivateRoute><PaymentHistory/></PrivateRoute>
      },
      {
        path:"/Dashboard/work-sheet",
        element:<PrivateRoute><WorkSheet/></PrivateRoute>
      },
      // Routes For HR
      {
        path:"/Dashboard/employee-list",
        element:<HrPrivateRoute><Employee_list/></HrPrivateRoute>
      },
      {
        path:"/Dashboard/details/:id",
        element:<HrPrivateRoute><SingleEmployee/></HrPrivateRoute> ,
        loader: ({params})=> Axios(`/employee/${params.id}`) 
      },
      {
        path:"/Dashboard/progress",
        element:<HrPrivateRoute><Progress/></HrPrivateRoute>
      },
      // admin Route
      {
        path:"/Dashboard/all-employee-list",
        element:<AdminPrivateRoute><AllEmployees/></AdminPrivateRoute>
      },
        ]
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
