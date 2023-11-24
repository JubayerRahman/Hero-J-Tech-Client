
import { Link, NavLink } from "react-router-dom"
import { Button, Navbar } from 'flowbite-react';
import { Avatar, Dropdown } from 'flowbite-react';
import Logo from "../../assets/logo.png"
import "./Navbar.css"
import { useContext } from "react";
import { AuthContent } from "../Authprovider/AuthProvider";

const MainNavbar = () => {
  const {user, logout} = useContext(AuthContent)

  const NavLinks =
<>
    <NavLink to="/" className="text-xl mb-[10px] text-[#16466B]  p-[20px] hover:text-black duration-[0.2s] transition-all">
      Home
      </NavLink>
    <NavLink to="/contact" className="text-xl mb-[10px] text-[#16466B] p-[20px] hover:text-black duration-[0.2s] transition-all">
      Contact us
      </NavLink>
    {
      user?
     <div className=" mx-auto md:mr-[20px] p-[20px]">
       <Dropdown 
      label={<Avatar alt="User settings" img={user.photoURL} className="mx-auto pb-[20px] " rounded />}
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-sm">{user.displayName}</span>
        <span className="block truncate text-sm font-medium">{user.email}</span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      {/* <Dropdown.Item>Sign out</Dropdown.Item> */}
      <Button className="mx-auto mb-[10px]" onClick={logout}>Sign Out</Button>
    </Dropdown>
     </div>
      :
      <NavLink to="/login" className="text-xl mb-[10px] text-[#16466B] p-[20px] hover:text-black duration-[0.2s] transition-all">
      Log in
      </NavLink>
    }
</>

  return (
    <div className="container mx-auto">
      <Navbar fluid rounded>
      <Navbar.Brand as={Link}>
        <img src={Logo} className="mr-3 w-[100px]" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="bg-gray-400 md:bg-transparent items-center  navlinks">
        {NavLinks}
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default MainNavbar
