import React from 'react'

import logo from  './../assets/Images/logo.png'
import { CgWebsite } from "react-icons/cg"

import nanda from "./../assets/Images/nanda.png"
import nk from "./../assets/Images/nk.png"

import {useNavigate} from 'react-router-dom'

function Header(){

    const navigate=useNavigate()
     const handlePortfolioClick = () => {
        // Change the URL to your portfolio website
        window.open('https://nanda99kumar.github.io/nanda/', '_blank');
      };

    return(

      <div className='flex justify-between items-center '>
          <img src={nk} className='w-[180px]'/>
            <ul className='flex gap-4 md:gap-14'>
              <li className="hover:font-bold cursor-pointer" onClick={()=>navigate('/')}>Home</li>
              <li className="hover:font-bold cursor-pointer">About Me</li>
              <li className="hover:font-bold cursor-pointer">Contact Me</li>
            </ul>
            <button className='bg-blue-500 rounded-full text-white flex items-center' onClick={handlePortfolioClick}>

             Portfolio  < CgWebsite  className="ml-3 text-[20px]"/>
            </button>


      </div>
    )


}

export default Header