import React from 'react'
import { Carousel } from 'flowbite-react';

const AboutUs = () => {
  return (
    <div className='container mx-auto my-[100px]'>

      <div className=' md:flex justify-evenly items-center flex-col md:flex-row gap-5 my-[25px]'>
      <div className="h-[500px] md:h-[100vh] flex-1">
      <Carousel> 
        <img src="https://i.ibb.co/6y7FkX8/AI-and-Machine-Learning-Symposium.jpg" alt="..." />
        <img src="https://i.ibb.co/nwtCrND/Dev-Ops-Conference.jpg" alt="..." />
        <img src="https://i.ibb.co/J3ysQX8/tech-Summit.jpg" alt="..." />
      </Carousel>
    </div>
      <div className='md:w-[50%] p-[10px]'>
      <h1 className=' text-5xl font-bold mt-[15px] mb-[15px] text-[#225A8D]'>About us</h1>
      <div className='bg-[#F27364] h-[4px] w-[40%] rounded-lg'></div>
      <p className='text-xl text-left my-[25px] mx-auto'>
      In the dynamic world of technology, Hero-J-Tech emerges as a beacon of innovation, and its story begins with the visionary journey of Jobayer Rahman. A passionate student of a polytechnic institute, Jobayer recognized the untapped potential within the tech industry. Driven by a fervent desire to contribute to the digital landscape, he founded Hero-J-Tech, a startup that has since evolved into a powerhouse of technological solutions.
      <br></br>

        Jobayer's journey reflects the spirit of entrepreneurship and determination. With a foundation in computer technology from his polytechnic education, he embraced the challenges of the tech world. Hero-J-Tech, under his guidance, became a testament to the transformative power of ideas and hard work.
      </p>
      </div>
      </div>
      <div className=' md:flex justify-evenly items-start flex-col md:flex-row gap-5  my-[25px]'>
      <div className='md:w-[50%] flex flex-col items-end p-[10px] text-right mt-[100px]'>
      <h1 className=' text-5xl font-bold mt-[15px] mb-[15px] text-[#225A8D]'>Our Goals</h1>
      <div className='bg-[#F27364] h-[4px] w-[40%] rounded-lg'></div>
      <p className='text-xl my-[25px] mx-auto'>
      Hero-J-Tech, inspired by Jobayer Rahman's visionary journey from a polytechnic student to a tech entrepreneur, embodies innovation and determination. Founded with a mission to contribute meaningfully to the digital landscape, Hero-J-Tech strives for leadership in innovation, empowerment of individuals, and advocacy for entrepreneurship. With a commitment to excellence and continuous growth, Hero-J-Tech stands as a beacon of transformation in the dynamic world of technology.
      </p>
      </div>
      <div className="h-[500px] md:h-[100vh] flex-1">
      <Carousel> 
        <img src="https://i.ibb.co/6y7FkX8/AI-and-Machine-Learning-Symposium.jpg" alt="..." />
        <img src="https://i.ibb.co/nwtCrND/Dev-Ops-Conference.jpg" alt="..." />
        <img src="https://i.ibb.co/J3ysQX8/tech-Summit.jpg" alt="..." />
      </Carousel>
    </div>
      
      </div>

    </div>
  )
}

export default AboutUs
