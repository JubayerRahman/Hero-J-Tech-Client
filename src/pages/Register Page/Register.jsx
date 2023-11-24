import React, { useRef, useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import ProfileIcon from "../../assets/profileDefault.png"

const Register = () => {
    const [Img, setImage] = useState(ProfileIcon)
    const uploadRef = useRef(null)
    const fileUploadButton = event =>{
        uploadRef.current.click()
    }

    const selectImage = e =>{
        e.preventDefault()
        const image = document.getElementById("prifile").files[0]
        setImage(URL.createObjectURL(image))
        console.log(image);
      }

  return (
    <div className=' container mx-auto my-[50px] flex flex-col items-center'>
      <form className="flex w-[85%] md:w-[60%] flex-col gap-4">
        <img 
        className='w-[150px] border-2 rounded-lg hover:opacity-[0.2]' 
        src={Img} 
        draggable='false' onClick={fileUploadButton}
        />
        <input className='hidden'
        ref={uploadRef}
        onChange={selectImage}
        type="file" name="profilephoto" accept="image/png, image/gif, image/jpeg" id="prifile" />
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your Name" />
        </div>
        <TextInput id="name" type="text" name='email' placeholder="Your name" shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" name='email' placeholder="name@gmail.com" shadow />
      </div>
      <div className='flex flex-col md:flex-row justify-evenly items-center gap-2'>
      <div className='w-full'>
        <div className="mb-2 block">
          <Label htmlFor="designation" value="Your designation" />
        </div>
        <TextInput id="designation" type="text" name='designation' placeholder="Your designation" shadow />
      </div>
      <div className='w-full'>
      <div className="mb-2 block">
        <Label htmlFor="role" value="Select your Role" />
      </div>
      <Select id="role" >
        <option value="Employee">Employee</option>
        <option value="HR">Human Resources (HR)</option>
      </Select>
    </div>
    <div className='w-full'>
        <div className="mb-2 block">
          <Label htmlFor="bank_Account" value="Your Accounr No:" />
        </div>
        <TextInput id="bank_Account" type="number" name='account' placeholder="Bank Account No." shadow />
      </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="salary" value="Your salary" />
        </div>
        <TextInput id="salary" type="number" name='salary' placeholder="Your salary" shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" type="password" name='password' placeholder='Password' shadow />
      </div>
      <Button type="submit">Register new account</Button>
      <h1>Already have an account? <Link to="/login" className='text-[#E77570]' >Login</Link></h1>
    </form>
    </div>
  )
}

export default Register
