import React from 'react'
import Header from './Components/Header'
import WhyChooseUs from './Components/WhyChooseUs'
import AboutUsSection from './Components/AboutUsSection'
import BusinessGrowthSection from './Components/BusinessGrowthSection'
import CustomerService from './Components/CustomerService'
import InterpretCustomerSection from './Components/InterpretCustomerSection'
import ReviewSection from './Components/ReviewSection'

export default function HomePage() {
  return (
    <div className='h-screen '>
     
<Header/>
<WhyChooseUs/>    
<AboutUsSection/>
<BusinessGrowthSection/>
<CustomerService/>
<InterpretCustomerSection/>
<ReviewSection/>
    </div>
  )
}
