import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import partner1 from "../../assets/partner1.png"
import partner2 from "../../assets/partner2.png"
import partner3 from "../../assets/partner3.png"


const OurPartners = () => {
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
          items: 2
        }
      };
  return (
    <div className='block md:flex flex-col md:flex-row justify-between items-center gap-5 bg-[#01203D] bg-opacity-[0.2] py-[50px]'>
      <div className='md:w-[30%]'>
      <div className='bg-[#F27364] mx-auto h-[4px] w-[60%] rounded-lg'></div>
      <h1 className='text-center text-3xl md:text-5xl font-bold mt-[15px] mb-[15px] text-[#225A8D]'>our Partners:</h1>
      <div className='bg-[#F27364] mx-auto h-[4px] w-[60%] rounded-lg'></div>
      </div>
      <div className='md:w-[70%] mt-[25px]'>
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
            <div>
                <img className='w-[150px]' src={partner1} />
            </div>
            <div>
                <img className='w-[150px]' src={partner2} />
            </div>
            <div>
                <img className='w-[150px]' src={partner3} />
            </div>
    </Carousel>
      </div>
    </div>
  )
}

export default OurPartners
