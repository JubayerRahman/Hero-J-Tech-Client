import { useContext } from "react"
import MainNavbar from "./Components/Navbar/Navbar"
import { AuthContent } from "./Components/Authprovider/AuthProvider"
import { Outlet } from "react-router-dom";

function App() {

  const {data} = useContext(AuthContent)
  console.log(data);

  return (
    <>
      <MainNavbar/>
      <Outlet/>
    </>
  )
}

export default App
