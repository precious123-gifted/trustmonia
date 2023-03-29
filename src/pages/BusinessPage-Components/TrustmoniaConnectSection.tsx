import React from 'react'
import Image from 'next/image'
import step1svg from '../../../public/assets/businessstep1.png'
import step2svg from '../../../public/assets/businessstep2.png'
import step3svg from '../../../public/assets/businessstep3.png'



export default function TrustmoniaConnectSection() {
  return (
    <div className='bg-blue  text-center landscape:h-[70vw] portrait:h-[410vw] portrait:pt-[10%]   portrait:sm:h-[310vw] w-[100vw]  text-darkgreen flex justify-center items-center '>
      
      <div className="content w-[95%] h-[90%] portrait:h-[100%] flex-col items-center justify-center ">
      <div className="header mb-[2%] w-full flex justify-center items-center   text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]">
  <span>TRUSTMONIA CONNECT</span>
</div>

<div className="header mb-[5%] w-full flex justify-center items-center   text-[2.3vw]  portrait:text-[6vw]  portrait:sm:text-[4vw]">
  <span>Bring your business to life with Trustmonia Connect</span>
</div>


<div className="summary w-full  flex justify-center items-center  text-[2vw]  portrait:text-[6vw]  portrait:sm:text-[3vw]">

  <span className='w-[70%]  portrait:w-full   portrait:sm:w-full  text-center flex-col'>

    <div className='mb-[10%] h-[10%] font-light'> 
    Trustmonia Connect lets you post regular updates so you can help potential customers learn more about your business.
    </div>

  </span>

</div>

<div className="header mb-[5%]  portrait:mb-[15%] w-full flex justify-center items-center   text-[2.3vw]  portrait:text-[6vw]  portrait:sm:text-[4vw]">
  <span>Bring your business to life with These Easy Steps</span>
</div>

<div className="steps text-[1.6vw]  portrait:text-[5vw]  portrait:sm:text-[3.5vw]  w-full h-[45%] portrait:h-[70%] portrait:sm:h-[78%] flex landscape:justify-between  items-center  portrait:flex-col portrait:justify-between  ">
<div className="step1  h-full w-[30%] portrait:w-full portrait:h-[28%]   flex flex-col items-center">
<div className="heading">1-Create a Post</div>
<div className="svg">
<Image alt='' src={step1svg}  className='w-[45vw] portrait:w-full object-contain aspect-[4/3]   ' />
</div>
</div>

<div className="step2 h-full w-[30%] portrait:w-full portrait:h-[28%]  flex flex-col items-center">
<div className="heading">2-Post About Whats Unique in Your Business </div>
<div className="svg"><Image alt='' src={step2svg}  className='w-[45vw] portrait:w-full object-contain aspect-[4/3]   ' /></div> 
</div>

<div className="step3 h-full w-[30%] portrait:w-full portrait:h-[28%]  flex flex-col items-center">
<div className="heading">3-Your Posts will be Promoted every Week by Trustmonia </div>
<div className="svg"><Image alt='' src={step3svg}  className='w-[45vw] portrait:w-full object-contain aspect-[4/3]   ' /></div>
</div>

</div>

      </div>

    </div>
  )
}
