import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput } from 'flowbite-react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ProfileIcon from "../../assets/profileDefault.png"
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContent } from '../../Components/Authprovider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../Components/Firebase/Firebase.confing';
import useAxios from '../../Components/Hook/AxiosUrl/useAxios';

const Register = () => {
    const {CreateUser} = useContext(AuthContent)
    const [Img, setImage] = useState(ProfileIcon)
    const axousLink = useAxios()
    const ImageURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API}`
    const uploadRef = useRef(null)
    const navigate = useNavigate()

    const fileUploadButton = event =>{
        uploadRef.current.click()
    }

    const selectImage = e =>{
        e.preventDefault()
        const image = document.getElementById("prifile").files[0]
        setImage(URL.createObjectURL(image))
        console.log(image);
      }

      const registrationForm =e =>{
        e.preventDefault()
        const form = new FormData()
        const image = e.target.profilephoto.files[0]
        const name  = e.target.name.value
        const email = e.target.email.value
        const designation = e.target.designation.value
        const role = e.target.role.value
        const account = e.target.account.value
        const salary = e.target.salary.value
        const password = e.target.password.value
        let imageURL = ""

        if (image == undefined || name =="" || email =="" || designation =="" || role =="" || account =="" || salary =="" || password=="") {
          return Swal.fire({
            title:"please fill all the fields",
            icon:"warning"
          })
        }

        if(password.length<6){
          return Swal.fire({
            title:"Your Password is small",
            icon:"error"
          })
        }
        if(!/[A-Z]/.test(password)){
          return Swal.fire({
            title:"Add capital letter in your passwoed",
            icon:"error"
          })
        }
        const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/
        if(!specialCharacter.test(password)){
          return Swal.fire({
            title:"Add special character in your passwoed",
            icon:"error"
          })
        }

        form.append("image", image )
        axios.post(ImageURL, form, {
          headers: {
            "content-type": "multipart/form-data",
          }
        })
        .then(res=> {
          if (res?.data?.data?.display_url) {
            imageURL = res?.data?.data?.display_url
            CreateUser(email, password)
            .then(res=>{
              console.log(res);
              updateProfile(auth.currentUser,{
                displayName: `${name}`,
                photoURL:`${imageURL}`
              })
              .then(res=>{
                let varification = "" 
                if (role == "HR") {
                  varification = true
                }
                else{
                  varification = false
                }
                const status = "working"
                const employeeData = {imageURL, name, email, designation, role, account, salary, varification, status}
                axousLink.post('/employee', employeeData)
                .then(res => 
                  {
                    if (res.data?.insertedId) {
                      Swal.fire({
                        title:"Your Registration is completed, wait for HR to verify your Account. Thank you",
                        icon:"success"
                      })
                      navigate("/")
                      setTimeout(()=>{
                        window.location.reload()
                      }, 3000)
                    }
                  })
              })
              .then(error=> console.log(error.message))
            })
            .catch(error=> {
              return Swal.fire({
                title: error.message,
                icon:"error"
              })
            })
          }
        })
      }

  return (
    <div className=' container mx-auto my-[50px] flex flex-col items-center'>
      <form onSubmit={registrationForm} className="flex w-[85%] md:w-[60%] flex-col gap-4">
      <h1 className='text-5xl my-[25px] text-center'>Register with us</h1>
        <img 
        className='w-[150px] h-[150px] border-2 rounded-lg hover:opacity-[0.2]' 
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
        <TextInput id="name" type="text" name='name' placeholder="Your name" shadow />
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
      <Select id="designation" name='designation' >
        <option value="">what's your designation?</option>
        <option value="Software Engineer"> Software Engineer </option>
        <option value="Frontend Developer"> Frontend Developer </option>
        <option value="Backend Developer"> Backend Developer </option>
        <option value="Data Scientist"> Data Scientist  </option>
        <option value="DevOps Engineer"> DevOps Engineer </option>
        <option value="UI/UX Designer"> UI/UX Designer  </option>
        <option value="Product Manager"> Product Manager  </option>
        <option value="QA Engineer (Quality Assurance)"> QA Engineer (Quality Assurance)  </option>
        <option value="Systems Architect"> Systems Architect  </option>
        <option value="IT Support Specialist"> IT Support Specialist  </option>
      </Select>
    </div>
      <div className='w-full'>
      <div className="mb-2 block">
        <Label htmlFor="role" value="Select your Role" />
      </div>
      <Select id="role" name='role' >
        <option value="">what is your Role?</option>
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
