import React from 'react'
import headerIMG from '../../../public/assets/header-img.png'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='landscape:h-[50vw]  w-[100vw] bg-grey flex items-start justify-center'>

        <div className="content  w-[95%] pt-[5%] h-full portrait:flex-col landscape:flex landscape:items-start landscape:justify-between">
<div className="section1 portrait:mb-[10%] font-meduim font-loma landscape:w-[40%] landscape:flex-col landscape:justify-between">
<div className="headerTXT   portrait:text-[200%]  font-[510] text-darkgreen  landscape:text-[4vw] landscape:h-[70%]  landscape:mb-[9%]"><span>CONNECTING PEOPLE
WITH COMPANIES
THEY CAN TRUST</span> </div>




<div className="BTN text-[150%] portrait:hidden">
    <span className=' transition-all ease-in duration-[0.5s] bg-armygreen hover:bg-blue hover:text-armygreen p-[20px] text-grey rounded cursor-pointer'>Company Review</span>
</div>
</div>

<div className="section2   lanscape:w-[40%]  landscape:flex landscape:items-start landscape:justify-end ">
<Image  alt='' src={headerIMG}   className='w-[50vw]    object-contain aspect-[4/3] landscape:object-right portrait:mb-[17%]  portrait:w-[150%] ' />


<div className="BTN text-[4vw] landscape:hidden flex item-center justify-center">
    <span className=' transition-all ease-in duration-[0.5s] bg-armygreen hover:bg-blue hover:text-armygreen p-[1vw] text-grey rounded cursor-pointer'>Company Review</span>
</div>
</div>

        </div>
      
    </div>
  )
}
