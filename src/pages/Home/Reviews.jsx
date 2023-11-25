import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch("./Reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

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
    <div className='Container mx-auto my-[50px]'>
      <div className='bg-[#F27364] mx-auto h-[4px] w-[50%] rounded-lg mb-[25px]'></div>
      <h1 className='text-center text-3xl md:text-5xl font-bold mt-[15px] mb-[15px] text-[#225A8D]'>Reviews by our Beloved Clients</h1>
      <div className='bg-[#F27364] mx-auto h-[4px] w-[50%] rounded-lg mb-[25px]'></div>

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
            reviews.map(review =>
                <div className='p-[20px] border-2 m-[10px] flex flex-col justify-center h-[200px]' key={review.id}>
                    <h1 className='text-2xl font-bold text-[#225A8D]'>{review.name}</h1>
                    <h1 className='font-bold text-[#F27364]'>{review.position}</h1>
                    <h1>{review.testimonial}</h1>
                </div>
                )
        }
    </Carousel>
    </div>
  )
}

export default Reviews
