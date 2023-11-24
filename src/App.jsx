import { useContext } from "react"
import Navbar from "./Components/Navbar/Navbar"
import { AuthContent } from "./Components/Authprovider/AuthProvider"

function App() {

  const {data} = useContext(AuthContent)
  console.log(data);

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
