import { useContext } from "react"
import MainNavbar from "./Components/Navbar/Navbar"
import { AuthContent } from "./Components/Authprovider/AuthProvider"
import { Outlet } from "react-router-dom";
import FooterMain from "./Components/Footer/Footer";
import "./App.css"

function App() {

  const {data} = useContext(AuthContent)
  console.log(data);

  return (
    <>
      <MainNavbar/>
      <div className="mainAppContainer">
      <Outlet/>
      </div>
      <FooterMain/>
    </>
  )
}

export default App
