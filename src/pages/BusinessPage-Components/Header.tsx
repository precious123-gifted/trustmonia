import React from 'react'
import headerIMG from '../../../public/assets/businessheaderIMG.png'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='landscape:h-[50vw]  w-[100vw] bg-grey flex items-start justify-center'>

        <div className="content  w-[95%] pt-[5%] h-full portrait:flex-col landscape:flex landscape:items-start landscape:justify-between">
<div className="section1 portrait:mb-[10%] font-meduim font-loma landscape:w-[40%] landscape:flex-col landscape:justify-between">
<div className="headerTXT   portrait:text-[10vw] portrait:sm:text-[6vw] font-[510] text-darkgreen  landscape:text-[4vw] landscape:h-[70%]  landscape:mb-[9%]"><span>Unlock Your Free Business
Page and Help People get
to Know You </span> </div>




<div className="BTN text-[2vw] portrait:hidden">
    <span className=' transition-all ease-in duration-[0.5s] bg-lightgreen hover:bg-blue hover:text-armygreen p-[1vw] text-grey rounded cursor-pointer'>Register Your Business</span>
</div>
</div>

<div className="section2   lanscape:w-[40%]  landscape:flex landscape:items-start landscape:justify-end ">
<Image  alt='' src={headerIMG}   className='w-[45vw]    object-contain aspect-[4/3] landscape:object-right portrait:mb-[17%]  portrait:w-[100vw] ' />


<div className="BTN   portrait:text-[7vw]  portrait:sm:text-[4vw] landscape:hidden flex item-center justify-center">
    <span className=' transition-all ease-in duration-[0.5s] bg-lightgreen hover:bg-blue hover:text-armygreen  portrait:p-[3.5vw] portrait:sm:p-[1.5vw] text-grey rounded cursor-pointer'>Register Your Business</span>
</div>
</div>

        </div>
      
    </div>
  )
}
