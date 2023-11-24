
import { Link, NavLink } from "react-router-dom"
import { Navbar } from 'flowbite-react';
import Logo from "../../assets/logo.png"
import "./Navbar.css"
const NavLinks =
<>
    <NavLink to="/" className="text-xl mb-[10px] text-[#16466B]  p-[20px] hover:text-black duration-[0.2s] transition-all">
      Home
      </NavLink>
    <NavLink to="/dashboard" className="text-xl mb-[10px] text-[#16466B] p-[20px] hover:text-black duration-[0.2s] transition-all">
      Dashbord
      </NavLink>
    <NavLink to="/contact" className="text-xl mb-[10px] text-[#16466B] p-[20px] hover:text-black duration-[0.2s] transition-all">
      Contact us
      </NavLink>
    <NavLink to="/login" className="text-xl mb-[10px] text-[#16466B] p-[20px] hover:text-black duration-[0.2s] transition-all">
      Log in
      </NavLink>
{/*
<li>
  <Link to="/login">
    <Navbar.Link className="text-xl mb-[10px] text-white md:text-[#02213D] p-[20px] hover:bg-black" to="/login">Login</Navbar.Link>
  </Link>
</li> */}
</>
const MainNavbar = () => {
  return (
    <div className="container mx-auto">
      <Navbar fluid rounded>
      <Navbar.Brand as={Link}>
        <img src={Logo} className="mr-3 w-[100px]" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="bg-gray-400 md:bg-transparent  navlinks">
        {NavLinks}
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default MainNavbar
