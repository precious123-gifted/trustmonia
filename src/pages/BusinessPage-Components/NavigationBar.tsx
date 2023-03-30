import React from 'react'
import Link from 'next/link'
import logo from '../../../public/assets/trustmonialog.png'
import burgerMenu from '../../../public/assets/MenuNavigation.png'
import Image from 'next/image'
import { useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import {screenIs} from '../../screenIs.jsx'


export default function NavigationBar() {

  return (
    <div className='h-[5vw] portrait:h-[15vw]  portrait:sm:h-[10vw] bg-darkgreen text-light flex items-center justify-center'>
        <div className="content w-[95%] h-full text-[1.5vw]  flex items-center justify-between">
         <div className="logo  flex items-center justify-center cursor-pointer  landscape:w-[5.5%]  portrait:w-[20%]  portrait:sm:w-[11%]"><Image alt='' src={logo}  className=' object-contain  aspect-[4/3]  landscape:w-[100vw]  portrait:w-[50vw]  portrait:sm:w-[100vw] ' /></div>  

      
       <div className="menu  landscape:hidden  cursor-pointer flex items-center justify-end  "><Image  className='w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]' src={burgerMenu}  alt='' /></div>

       <div className="list-items portrait:hidden h-full w-[60%] flex items-center justify-between"><div className="list  px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between">About</div><div className="list px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between">Contact</div><div className="list px-[1.5vw]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between">Login</div><Link className='flex justify-center items-center h-full '  href={'/'}> <div className="business_page-btn font-jamrul px-[20px] bg-blue text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  flex items-center justify-between ">For Customers</div></Link></div>

         

        </div>
     
    </div>
  )
}
