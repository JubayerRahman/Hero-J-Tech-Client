import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LatestNews = () => {

    const [news, setNews] = useState([])
    useEffect(()=>{
        const featching = async()=>{
            const res = await axios.get("https://newsapi.org/v2/top-headlines?q=tech&apiKey=74e16732e2b5474ba422c0cb04be4856")
            setNews(res.data.articles);
        }
    featching ()
    },[])
  return (
    <div className='container mx-auto p-[10px]'>
       <div className='bg-[#F27364] mx-auto h-[4px] w-[50%] rounded-lg mb-[25px]'></div>
      <h1 className='text-center text-3xl md:text-5xl font-bold mt-[15px] mb-[15px] text-[#225A8D]'>Latest News</h1>
      <div className='bg-[#F27364] mx-auto h-[4px] w-[50%] rounded-lg mb-[25px]'></div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      {
        news? news.map(data=> 
        <div key={data.id} className='box'>
            <img className='h-[300px] object-cover w-full' src={data.urlToImage} alt="" />
            <div className='p-[10px] bg-[#225A8D] bg-opacity-10 min-h-[200px] flex flex-col justify-evenly'>
              <h1 className='text-[20px] text-[#F27364] font-[600] leading-7'>{data.title}</h1>
              <p className='text-[18px] leading-6 font-[500]'>{data.author}</p>
              <a href={data.url} target='_blank' className='text-[18px] p-[10px] text-white bg-[#F27364] text-center '>Read More</a>
            </div>
        </div>): <h1>nono </h1>
      }
      </div>
    </div>
  )
}

export default LatestNews
