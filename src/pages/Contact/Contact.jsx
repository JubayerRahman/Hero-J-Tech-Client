import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
    const formFunc = e =>{
        e.preventDefault()
        const name    = e.target.name.value
        const email   = e.target.email.value
        const message = e.target.message.value

        if (name =="" || email == "" || message =="") {
            return Swal.fire({
                title:"Fill all the fields please",
                icon:"warning"
            })
        }
        else{
            return Swal.fire({
                title:"Message send",
                icon:"success"
            })
        }
    }
  return (
    <div className='container mx-auto flex flex-col md:flex-row gap-2 p-[10px] md:items-end justify-evenly'>
        <form onSubmit={formFunc} className="flex flex-col gap-2 md:w-[50%]">
            <input type="text" name="name" placeholder="Your Name" id="" />
            <input type="email" name="email" placeholder="Your Email" id="" />
            <textarea className="max-h-[200px] h-[200px]" name="message" id="" cols="30"></textarea>
            <input className="bg-[#55AD47] px-[20px] py-[10px] text-white text-xl" type="submit" value="Send" />
        </form>
      <div className=''>
            <h1 className="text-2xl font-bold">Contact with us:</h1>
            <p className="flex items-center text-xl cursor-pointer"><IoIosCall /> &nbsp; +85047882468938</p>
            <a href="mailto:jubayerr398@gmail.com" className="flex items-center text-xl cursor-pointer"><CiMail /> &nbsp; heorJ@gmail.com</a>
            <p className="flex items-center text-xl cursor-pointer"><FaAddressBook /> &nbsp; Road no:12, Gulshan, Dhaka, Bangladesh</p>
      </div>
    </div>
  )
}

export default Contact
