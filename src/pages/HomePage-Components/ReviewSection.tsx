import React from 'react'
import Image from 'next/image'
import leftArrow from '../../../public/assets/left-arrow.png'
import rightArrow from '../../../public/assets/right-arrow.png'
import stars from '../../../public/assets/stars.png'



export default function ReviewSection() {
  return (
    <div className='landscape:h-[40vw] portrait:h-[115vw] portrait:sm:h-[70vw] w-[100vw] bg-grey text-darkgreen flex justify-center items-center'>
      <div className="content  w-[90%] portrait:w-[100%] portrait:sm:w-[70%] h-[80%] flex-col items-center justify-center">

      <div className="header mb-[5%]  portrait:sm:mb-[8%] w-full flex justify-center items-center   text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]">
<span className='text-center'>Every Review is Important</span>
</div>


<div className="cards-container text-[1.5vw]  portrait:text-[5vw]  portrait:sm:text-[3vw] font-M_PLUS_1 overflow-x-hidden w-full h-[70%] portrait:h-[80%]  portrait:sm:h-[75%] portrait:w-[100%]  flex justify-center portrait:justify-center items-center">

    { <div className="left-arrow landscape:hidden"><Image  className=' cursor-pointer   portrait:w-[9vw]  portrait:sm:w-[6vw] object-contain aspect-[4/3]' src={leftArrow}  alt='' /></div>
 }
<div className="cards  w-[80%] overflow-x-auto scrollbar-hide portrait:w-[100%] h-full flex  justify-between items-center">

    <div className="card  portrait:mr-[5vw] portrait:sm:mr[2vw] h-[90%] w-[30%] portrait:h-[80%] portrait:sm:h-[100%] portrait:min-w-[85vw] portrait:sm:min-w-[101%]  bg-blue grid place-items-center">

<div className="section1 h-[40%]  w-[90%]   "><Image alt='' src={stars}/></div>
<div className="section2 font-light h-[100%] w-[90%]  text-center ">They have one of the best customer
services ,i love their products,it is worth
my money</div>
<div className="section3 h-[20%] w-[90%]   font-loma text-center">Prodigital Company</div>


    </div>

    <div className="card  portrait:mr-[5vw] portrait:sm:mr[2vw]  h-[90%] w-[30%]   portrait:h-[80%] portrait:sm:h-[100%] portrait:min-w-[85vw] portrait:sm:min-w-[101%]  bg-blue grid place-items-center">

    <div className="section1 h-[40%]  w-[90%]   "><Image alt='' src={stars}/></div>
<div className="section2 font-light h-[100%] w-[90%]  ">They have one of the best customer
services ,i love their products,it is worth</div>
<div className="section3 h-[20%] w-[90%]  text-center ">Lipwager  Company</div>

</div>

<div className="card h-[90%] w-[30%]  portrait:h-[80%] portrait:sm:h-[100%] portrait:min-w-[85vw] portrait:sm:min-w-[101%]  bg-blue grid place-items-center">

<div className="section1 h-[40%]  w-[90%]   "><Image alt='' src={stars}/></div>
<div className="section2 font-light h-[100%] w-[90%]  ">They have one of the best customer
services ,i love their products,it is worth</div>
<div className="section3 h-[20%] w-[90%]   text-center">Centinel Company</div>
    </div>
</div>


    { <div className="right-arrow landscape:hidden"><div className="left-arrow"><Image  className=' cursor-pointer  w-[5vw]   portrait:w-[9vw]  portrait:sm:w-[6vw] object-contain aspect-[4/3]' src={rightArrow}  alt='' /></div></div> }
</div>

      </div>

      
    </div>
  )
}
