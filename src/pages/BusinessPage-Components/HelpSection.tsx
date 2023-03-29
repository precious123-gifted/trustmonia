import React from 'react'

export default function HelpSection() {
  return (
    <div className='bg-grey  landscape:h-[28vw] portrait:h-[90vw] portrait:sm:h-[40vw]  portrait:pt-[7%] w-[100vw]  text-darkgreen flex justify-center items-center '>
            <div className="content w-[95%] h-[80%] flex-col items-center justify-center ">

<div className="header mb-[5%] w-full flex justify-center items-center   text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]">
  <span>Help People get to Know You </span>
</div>


<div className="summary w-full  flex justify-center items-center  text-[2vw]  portrait:text-[6vw]  portrait:sm:text-[3vw]">

  <span className='w-[70%]  portrait:w-full   portrait:sm:w-full  text-center flex-col'>

    <div className='mb-[10%] h-[10%]'> 
    Having a strong presence on Trustmonia helps you establish trust with potential customers. Manage your page for free or upgrade to stand out from the competition.
    </div>

  </span>

</div>

      </div>
    </div>
  )
}
