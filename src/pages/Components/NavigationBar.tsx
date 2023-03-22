import React from 'react'
import logo from '../../../public/assets/trustmonialog.png'
import burgerMenu from '../../../public/assets/MenuNavigation.png'
import Image from 'next/image'
import { useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import {screenIs} from '../../screenIs.jsx'


export default function NavigationBar() {

//   const screenIs = require('screenIs');



// const matches = useMediaQuery('(min-width:700px)');

//   useEffect(()=>{
//       var mobileScreens = window.matchMedia("(max-width: 700px)")
//   var desktopScreens = window.matchMedia("(min-width: 700px)")
//   })

  return (
    <div className='h-[10%]  bg-darkgreen text-light flex items-center justify-center'>
        <div className="content w-[95%] h-full text-[110%]  flex items-center justify-between">
         <div className="logo landscape:w-[5.5%]  portrait:w-[30%]  portrait:sm:w-[11%] flex items-center justify-center cursor-pointer  object-contain  aspect-[4/3]  "><Image alt='' src={logo}/></div>  

      
       <div className="menu  landscape:hidden  cursor-pointer flex items-center justify-end  "><Image  className='w-[12%] object-contain aspect-[4/3]' src={burgerMenu}  alt='' /></div>

         <div className="list-items portrait:hidden h-full w-[60%] flex items-center justify-between"><div className="list  px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[130%] flex items-center justify-between">About</div><div className="list px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[130%] flex items-center justify-between">Contact</div><div className="list px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[130%] flex items-center justify-between">Login</div> <div className="business_page-btn font-jamrul px-[20px] bg-blue text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  flex items-center justify-between ">For Business</div></div>

         

        </div>
     
    </div>
  )
}
