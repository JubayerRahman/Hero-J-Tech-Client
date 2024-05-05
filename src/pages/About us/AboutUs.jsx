import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useAllEployes from '../../Components/Hook/AllEmployes/useAllEployes';

const AboutUs = () => {
    const [Allemployee] = useAllEployes()
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className=''>
        <div className='welcomeDection container mx-auto md:h-[500px] flex flex-col flex-wrap justify-center items-center'>
            <h1 className='text-[40px] text-center md:text-[100px]'>Welcome to <spna className="bg-[#01203D] text-white">Hero-J-Tech</spna></h1>
        </div>
        <div className='flex flex-col md:flex-row'>
        <div className='bg-[#225A8D] p-[20px] text-white'>
            <h1 className=' text-3xl md:text-5xl font-bold mt-[15px] mb-[15px]'>Who we are?</h1>
            <div className='bg-[white] my-[20px] h-[4px] w-[25%] rounded-lg'></div>
            <p>Welcome to Hero-J-Tech, a cutting-edge tech company founded by Jobayer Rahman. We are a dynamic team of skilled professionals passionate about technology and its transformative power. Established in 2015, Hero-J-Tech has emerged as a beacon of innovation and excellence in the tech industry.</p>
        </div>
        <div className='bg-[black] p-[20px] text-white'>
            <h1 className=' text-3xl md:text-5xl font-bold mt-[15px] mb-[15px]'>Our Mission:</h1>
            <div className='bg-[white] my-[20px] h-[4px] w-[25%] rounded-lg'></div>
            <p>At Hero-J-Tech, our mission is to revolutionize the tech landscape by delivering solutions that empower businesses and individuals alike. We're on a journey to make technology accessible, user-friendly, and an enabler of progress. Our commitment is not just to develop software; it's to catalyze positive change through technology.</p>
        </div>
        </div>
        <div className='bg-[black]  flex flex-col items-center text-white'>
            <h1 className=' text-3xl md:text-5xl py-[70px] font-bold mt-[15px] mb-[15px]'>What Sets Us Apart?</h1>
            <div className='flex flex-col md:flex-row'>
            <div className='bg-[#225A8D] p-[20px] text-white'>
                <h1 className=' text-3xl font-bold mt-[15px] mb-[15px]'>Innovators at Heart:</h1>
                <div className='bg-[white] my-[20px] h-[4px] w-[25%] rounded-lg'></div>
                <p>Innovation is the heartbeat of Hero-J-Tech. We embrace the latest technologies and methodologies, ensuring our solutions are at the forefront of the digital revolution. Our team of innovators thrives on pushing boundaries, delivering products and services that redefine what's possible.</p>
            </div>
            <div className='bg-[#F27364] p-[20px] text-white'>
                <h1 className=' text-3xl font-bold mt-[15px] mb-[15px]'>Customer-Centric Excellence:</h1>
                <div className='bg-[white] my-[20px] h-[4px] w-[25%] rounded-lg'></div>
                <p>Our clients are at the core of everything we do. Hero-J-Tech is committed to providing personalized, customer-centric solutions. We listen intently to our clients' needs, tailoring our services to exceed expectations. Your success is our success, and we're dedicated to helping you achieve your goals.</p>
            </div>
            <div className='bg-[#225A8D] p-[20px] text-white'>
                <h1 className=' text-3xl font-bold mt-[15px] mb-[15px]'>Collaboration and Expertise:</h1>
                <div className='bg-[white] my-[20px] h-[4px] w-[25%] rounded-lg'></div>
                <p>Collaboration fuels creativity, and at Hero-J-Tech, we foster a culture of collaboration. Our diverse team brings together expertise from various tech domains, creating a powerhouse of skills. Whether it's web development, app design, or emerging tech, we have the specialists to elevate your project.</p>
            </div>
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className=' text-5xl font-bold mt-[15px] mb-[15px] text-[#225A8D]'>Our Team</h1>
            <div className='bg-[#F27364] h-[4px] w-[40%] rounded-lg'></div>
        </div>
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                {
                    Allemployee.map(employee=>
                        <div className='border-2 m-[10px] gap-1 rounded-md flex items-end' key={employee._id}>
                            <img src={employee.imageURL} className=" w-[150px] h-[150px] rounded-md shadow-md" />
                            <div className='flex-1 ml-3'>
                            <h1 className='font-bold'>{employee.name}</h1>
                            <h1>{employee.designation}</h1>
                            </div>
                        </div>
                        )
                }
            </Carousel>
    </div>
  )
}

export default AboutUs
