import React from 'react'
import Header from './Components/Header'
import WhyChooseUs from './Components/WhyChooseUs'
import AboutUsSection from './Components/AboutUsSection'
import BusinessGrowthSection from './Components/BusinessGrowthSection'

export default function HomePage() {
  return (
    <div className='h-screen '>
     
<Header/>
<WhyChooseUs/>    
<AboutUsSection/>
<BusinessGrowthSection/>
    </div>
  )
}
