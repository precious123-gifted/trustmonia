import React from 'react'
import Image from 'next/image'
import leftArrow from '../../../public/assets/left-arrow.png'
import rightArrow from '../../../public/assets/right-arrow.png'


export default function ReviewSection() {
  return (
    <div className='landscape:h-[40vw] portrait:h-[390vw] portrait:sm:h-[165vw] w-[100vw] bg-grey text-darkgreen flex justify-center items-center'>
      <div className="content  w-[95%] h-[80%] flex-col items-center justify-center">

      <div className="header mb-[5%] w-full flex justify-center items-center   text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]">
<span className='text-center'>Every Review is Important</span>
</div>


<div className="cards-container w-full h-[70%] portrait:w-full     flex justify-center items-center">

    {/* <div className="left-arrow"><Image  className=' cursor-pointer  w-[5vw]   portrait:w-[9vw]  portrait:sm:w-[6vw] object-contain aspect-[4/3]' src={leftArrow}  alt='' /></div>
 */}
<div className="cards w-[80%]  portrait:w-[100%] h-full flex justify-between items-center">

    <div className="card h-[90%] w-[30%] portrait:h-[40%] portrait:sm:h-[50%] portrait:min-w-[100%] portrait:sm:min-w-[70%]  bg-blue grid place-items-center">

<div className="section1 h-[40%]  w-[90%]  bg-leafgreen ">1</div>
<div className="section2 h-[100%] w-[90%]  bg-pink ">2</div>
<div className="section3 h-[20%] w-[90%]  bg-grey ">3</div>


    </div>

    <div className="card h-[90%] w-[30%] bg-pink">


</div>

<div className="card h-[90%] w-[30%] bg-darkgreen">


    </div>
</div>


    {/* <div className="right-arrow"><div className="left-arrow"><Image  className=' cursor-pointer  w-[5vw]   portrait:w-[9vw]  portrait:sm:w-[6vw] object-contain aspect-[4/3]' src={rightArrow}  alt='' /></div></div> */}
</div>

      </div>

      
    </div>
  )
}
