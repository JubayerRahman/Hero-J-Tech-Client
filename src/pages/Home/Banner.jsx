import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { Button } from "flowbite-react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { Link } from "react-router-dom";




const Banner = () => {
  return (
    <div className='banner min-h-[80vh] flex '>
        <div className='container mx-auto flex flex-col-reverse md:flex-row justify-evenly items-center gap-5'>
            <div className="md:w-[50%] p-[20px]">
            <h1 className='text-3xl md:text-5xl font-bold text-[#225A8D] mb-[20px] '>We Pioneering Innovations in the World of <span className="text-[#FA7667]" >Technology</span> </h1>
            <p className="text-[#FA7667]">
            Hero-J-Tech stands at the forefront of technological innovation, where brilliance meets execution. As a dynamic tech company, we are architects of the digital landscape, sculpting solutions that redefine the possibilities of tomorrow. Our expertise lies in the intricate dance of the MERN stack—MongoDB, Express.js, React, and Node.js—where we orchestrate seamless and robust applications
            </p>
            <div className="flex gap-3">
            <Link to="/contact">
                <Button className="mt-[20px] bg-[#FA7667]"><MdOutlineAlternateEmail /> &nbsp;Contact us</Button>
            </Link>
            <Link to="/login">
                <Button className="mt-[20px] bg-[#FA7667]"><FaSignInAlt /> &nbsp;Sign in</Button>
            </Link>
            </div>
            </div>
            <div className=" grid grid-cols-3 gap-[5px] md:gap-[10px] md:w-[35%] mb-[20px] p-[10px]">
            <div className="bg-[gray] bg-opacity-[0.5] rounded-lg border-2 p-[15px] flex flex-col justify-center items-center col-span-2">
            <FaReact className="text-[70px] ms:text-[100px] text-[#61DBFB]" />
            </div>
            <div className="bg-[gray] bg-opacity-[0.5] rounded-lg border-2 p-[15px] flex flex-col justify-center items-center row-span-2">
            <SiExpress  className="text-[70px] ms:text-[100px]" />
            </div>
            <div className="bg-[gray] bg-opacity-[0.5] rounded-lg border-2 p-[15px] flex flex-col justify-center items-center row-span-2 ">
            <DiMongodb className="text-[70px] ms:text-[100px] text-[#55AD47]" />
            </div>
            <div className="bg-[gray] bg-opacity-[0.5] rounded-lg border-2 p-[15px] flex flex-col justify-center items-center">
            <IoLogoFirebase className="text-[70px] ms:text-[100px] text-[#FFFF00]" />
            </div>
            <div className="bg-[gray] bg-opacity-[0.5] rounded-lg border-2 p-[15px] flex flex-col justify-center items-center col-span-2">
            <FaNode className="text-[70px] ms:text-[100px] text-[#58A149]" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
