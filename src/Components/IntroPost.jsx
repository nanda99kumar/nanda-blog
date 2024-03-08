import React,{useEffect,useState} from 'react'
import GlobalApi from '../Services/GlobalApi'
import {useNavigate} from 'react-router-dom'

function IntroPost({post}){

const navigate=useNavigate()



    return(

      <div className=' cursor-pointer grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8'
                     onClick={()=>navigate('blog-detail/'+post.id)}>

          <img src={post.coverImage} className='rounded-2xl object-cover w-full h-full'/>
          <div >
            <h4 className='text-blue-400'> {post.tag} </h4>
            <h2 className='text-[23px] font-bold mt-5'> {post.title} </h2>
            <h4 className='line-clamp-6 text-gray-400 mt-5'> {post.desc} </h4>
             <div className='flex items-center mt-5'>
                <img src="https://i.ibb.co/CQQFz92/Screenshot-20240307-114215.png" className='w-[50px] rounded-full' />
                <div className='ml-2'>
                  <h3 className='font-bold'> Nanda </h3>
                  <h3 className='text-gray-400'> 2024 </h3>
                </div>
             </div>
          </div>

      </div>
    )



}

export default IntroPost