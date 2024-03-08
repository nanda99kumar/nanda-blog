import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import GlobalApi from '../Services/GlobalApi'


function BlogDetail(){

    const {id}=useParams();
    const [post,setPost]=useState([])

     useEffect(()=>{
     console.log("ID",id)
     getBlogById()
     },[])


     const getBlogById=()=>{
     GlobalApi.getPostById(id).then(resp=>{
     const item=resp.data

     const result= {
              id:item.id,
              title:item.author,
              desc:item.url,
              tag:item.height,
              coverImage:item.download_url


           };
           setPost(result)
       console.log("Result",result)

      })
     }


    return(

      <div className='px-6 md:px-20 lg:px-60 mt-10'>
        <h3 className='text-blue-400 text-[12px]'>{post.tag}</h3>
        <h3 className='text-[22px] font-bold'>{post.title}</h3>

          <div className='flex items-center mt-5'>
                                      <img src="https://i.ibb.co/CQQFz92/Screenshot-20240307-114215.png" className='w-[35px] rounded-full' />
                                      <div className='ml-2'>
                                        <h3 className='font-bold text-[12px]'> Nanda </h3>
                                        <h3 className='text-gray-400 text-[10px]'> 2024 </h3>
                                      </div>
                                   </div>

        <img src={post.coverImage} className='rounded-2xl mt-10 mb-10 w-full' />
        <h3 className='mt-3 mb-5'>{post.desc} </h3>
        {/*} <Markdown remarkPlugins={[remarkGfm]}>{post.desc}</Markdown> */}
      </div>
    )


}

export default BlogDetail