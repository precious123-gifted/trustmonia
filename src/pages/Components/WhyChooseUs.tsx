import React from 'react'
import serviceSVG from '../../../public/assets/service-svg.png'
import speakerSVG from '../../../public/assets/speaker-svg.png'
import productSVG from '../../../public/assets/product-svg.png'
import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <div className='w-[100vw] h-[200vw] portrait:h-[500vw] bg-grey flex item-center justify-center pt-[6%] portrait:pt-[30%]'>
      <div className="content flex-col justify-between align-center h-full w-[95%]  ">
<div className="header text-[200%]  portrait:text-[150%] text-center mb-[13%] portrait:mb-[30%]">WHY CHOOSE TRUSTMONIA</div>

 

<div className="section1 flex items-center justify-between mb-[13%] portrait:mb-[25%]">
<div className="svg  portrait:hidden ">
<Image alt='' src={speakerSVG}  className='w-[100%] object-contain aspect-[4/3]  landscape:object-left ' />
</div>


<div className="writeup-div w-[40%]  portrait:w-[100%] bg-pink rounded p-[3%] portrait:p-[7%] border-2 border-darkgreen">
<div className="writeup-header text-[170%] portrait:text-center portrait:text-[140%] mb-[4%]">We Speak for Businesses</div>

<div className="writeup text-[130%]  portrait:text-center portrait:text-[142%] font-manuale">
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
<div className="writeup-header text-[170%] portrait:text-center portrait:text-[140%] mb-[4%]">We Offer Service Review</div>

<div className="writeup text-[130%]  portrait:text-center portrait:text-[142%] font-manuale">
Trustmonia is a review platform
that’s open to everyone. Share
your experiences to help others
make better choices and
encourage companies to up
their game.

</div>


</div>




<div className="svg  portrait:hidden ">
<Image alt='' src={serviceSVG}  className='w-[100%] object-contain aspect-[4/3]  landscape:object-right ' />
</div>

</div>




<div className="section3 flex items-center justify-between mb-[13%] portrait:mb-[25%]">



<div className="writeup-div w-[40%]  portrait:w-[100%] bg-green rounded p-[3%] portrait:p-[7%] border-2 border-darkgreen">
<div className="writeup-header text-[170%] portrait:text-center portrait:text-[140%] mb-[4%]">We Offer Service Review</div>

<div className="writeup text-[130%]  portrait:text-center portrait:text-[142%] font-manuale">
Trustmonia is a review platform
that’s open to everyone. Share
your experiences to help others
make better choices and
encourage companies to up
their game.

</div>


</div>




<div className="svg  portrait:hidden ">
<Image alt='' src={productSVG}  className='w-[100%] object-contain aspect-[4/3]  landscape:object-right ' />
</div>

</div>










      </div>
    </div>
  )
}
