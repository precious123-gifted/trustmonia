import React from 'react'
import Image from 'next/image'
import businessSvg from '../../../public/assets/BusinessGrowth.png'

export default function BusinessGrowthSection() {
  return (
    <div className='  landscape:h-[110vw] portrait:h-[368vw] portrait:sm:h-[165vw] w-[100vw] bg-leafgreen text-darkgreen flex justify-center items-center '>
      <div className="content  w-[95%] h-[80%] flex-col items-center justify-center">
   
      <div className="header mb-[5%] w-full flex justify-center items-center   text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]">
  <span className='text-center'>We Help Businesses Grow</span>
</div>


<div className="svg w-full mb-[5%]  portrait:mb-[20%] portrait:sm:mb-[13%]  flex justify-center items-center">
<Image alt='' src={businessSvg}  className=' w-[50vw]  portrait:w-[90vw]  portrait:sm:w-[70vw] object-contain aspect-[4/3]   ' />

</div>

<div className="summary w-full  flex justify-center items-center  text-[2vw]  portrait:text-[6vw]  portrait:sm:text-[3vw]">

  <span className='font-thin w-[70%]  portrait:w-full   portrait:sm:w-full  text-center flex-col'>

    <div className='mb-[10%] h-[10%]'> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore repellendus 
  temporibus , facere tempore quo. Deserunt a, veritatis molestiae iure cum voluptate suscipit 
  molestias iste, quidem incidunt hic assumenda voluptas.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore repellendus 
  temporibus, facere tempore quo. Deserunt a,  
    </div>

    <div>
     veritatis molestiae iure cum voluptate suscipit 
  molestias iste, quidem incidunt hic assumenda voluptas.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore repellendus 
  temporibus, facere tempore quo. Deserunt a, veritatis molestiae iure cum voluptate suscipit 
  molestias iste, quidem incidunt hic assumenda voluptas.   
    </div>
 
  </span>

</div>

      </div>
    </div>
  )
}
