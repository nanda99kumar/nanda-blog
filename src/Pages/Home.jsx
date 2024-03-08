import React,{useEffect,useState} from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Footer from '../Components/Footer'
import Blogs from '../Components/Blogs'
import GlobalApi from '../Services/GlobalApi'

function Home(){

const[post,setPost]=useState([])
 useEffect(()=>{
    getPost()

    },[])

    const getPost=()=>{

    GlobalApi.getPost.then(resp=>{
     const result=resp.data.map(item=>( {
         id:item.id,
         title:item.author,
         desc:item.url,
         tag:item.height,
         coverImage:item.download_url


      }));
      setPost(result);
     // console.log(resp)
    })
    }
    return(

      <div >


      {/*Search  */}
        <Search/>

       {/*IntroPost*/}
       { post.length>0 ? <IntroPost post={post[0]}/> :null}
       {/* <IntroPost />*/}

       {/* Blogs*/}
       {post.length>0 ? <Blogs posts={post} /> :null}



      </div>
    )


}

export default Home