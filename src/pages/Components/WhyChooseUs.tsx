import React from 'react'
import serviceSVG from '../../../public/assets/service-svg.png'
import speakerSVG from '../../../public/assets/speaker-svg.png'
import productSVG from '../../../public/assets/product-svg.png'
import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <div className='w-[100vw] landscape:h-[160vw] portrait:h-[335vw] portrait:sm:h-[245vw] bg-grey flex item-center justify-center pt-[6vw]  portrait:pt-[30vw] portrait:sm:pt-[20vw] '>
      <div className="content flex-col justify-between align-center h-full w-[95%]  ">
<div className="header text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw] text-center mb-[13%] portrait:mb-[30%]">WHY CHOOSE TRUSTMONIA</div>

 

<div className="section1 flex items-center justify-between mb-[13%] portrait:mb-[25%]">
<div className="svg  portrait:hidden ">
<Image alt='' src={speakerSVG}  className='w-[45vw] object-contain aspect-[4/3]  landscape:object-left ' />
</div>


<div className="writeup-div w-[40%]  portrait:w-[100%] bg-pink rounded p-[3%] portrait:p-[7%] border-2 border-darkgreen">
<div className="writeup-header  text-[2vw]  portrait:text-[6vw]  portrait:sm:text-[4vw]  portrait:text-center  mb-[4%]">We Speak for Businesses</div>

<div className="writeup  text-[1.5vw]  portrait:text-[5vw]  portrait:sm:text-[3vw] portrait:text-center  font-manuale">
Trustmonia is a review platform
that’s open to everyone. Share
your experiences to help others
make better choices and
encourage companies to up
their game.

</div>


</div>


</div>





<div className="section2 flex items-center justify-between mb-[13%]  portrait:mb-[25%]">



<div className="writeup-div w-[40%]  portrait:w-[100%] bg-blue rounded p-[3%] portrait:p-[7%] border-2 border-darkgreen">
<div className="writeup-header text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw] portrait:text-center  mb-[4%]">We Offer Service Review</div>

<div className="writeup text-[1.5vw]  portrait:text-[5vw]  portrait:sm:text-[3vw]  portrait:text-center font-manuale">
Trustmonia is a review platform
that’s open to everyone. Share
your experiences to help others
make better choices and
encourage companies to up
their game.

</div>


</div>




<div className="svg  portrait:hidden ">
<Image alt='' src={serviceSVG}  className='w-[45vw] object-contain aspect-[4/3]  landscape:object-right ' />
</div>

</div>




<div className="section3 flex items-center justify-between ">

<div className="svg  portrait:hidden ">
<Image alt='' src={productSVG}  className='w-[45vw] object-contain aspect-[4/3]  landscape:object-left ' />
</div>

<div className="writeup-div w-[40%]  portrait:w-[100%] bg-green rounded p-[3%] portrait:p-[7%] border-2 border-darkgreen">
<div className="writeup-header text-[170%] portrait:text-center portrait:text-[140%] mb-[4%]">We Offer Service Review</div>

<div className="writeup text-[1.5vw]  portrait:text-[5vw]  portrait:sm:text-[3vw]  portrait:text-center font-manuale">
Trustmonia is a review platform
that’s open to everyone. Share
your experiences to help others
make better choices and
encourage companies to up
their game.

</div>


</div>






</div>










      </div>
    </div>
  )
}
