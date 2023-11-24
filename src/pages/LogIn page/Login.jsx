import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Login = () => {
    const formFunction = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if (email == "" || password =="") {
            return Swal.fire({
                title:"please fill all the fields",
                icon:"warning"
            })
        }
        console.log(email, password);
    }
  return (
    <div className='container mx-auto flex flex-col items-center'>
      <h1>Login with us</h1>
      <form onSubmit={formFunction} className="flex w-[85%] md:w-[50%] flex-col gap-4">
      <div>
        <div className="mb-2 block w-[50%]">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@gmail.com" name='email'  />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" placeholder='Password' name='password'  />
      </div>
      <div className="flex items-center gap-2">
      </div>
      <Button type="submit">Log in</Button>
      <h1>Don't have an account? <Link to="/register" className='text-[#E77570]' >Register</Link></h1>
    </form>
    </div>
  )
}

export default Login
