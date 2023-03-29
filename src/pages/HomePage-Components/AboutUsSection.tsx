import React from 'react'
import Image from 'next/image'
import wave from '../../../public/assets/aboutBG.png'
import wavem from '../../../public/assets/aboutBGm.png'




export default function AboutUsSection() {
  return (

    
    <div className='relative bg-grey  landscape:h-[60vw] portrait:h-[272vw] portrait:sm:h-[90vw] w-[100vw]  text-grey flex justify-center items-center ' >
  <div className="background absolute  inset-0">
    <Image className='portrait:hidden' src={wave} alt='' fill /> 
    <Image className='landscape:hidden' src={wavem} alt='' fill />
  </div>
  

      <div className="relative z-10 content w-[95%] h-[80%] flex-col items-center justify-center ">

<div className="header mb-[5%] w-full flex justify-center items-center   text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]">
  <span>About Trustmonia</span>
</div>


<div className="summary w-full font-thin flex justify-center items-center  text-[2vw]  portrait:text-[6vw]  portrait:sm:text-[3vw]">

  <span className='w-[70%]  portrait:w-full   portrait:sm:w-full  text-center flex-col'>

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
