import React from 'react'
import Header from './Components/Header'
import WhyChooseUs from './Components/WhyChooseUs'
import AboutUsSection from './Components/AboutUsSection'
import BusinessGrowthSection from './Components/BusinessGrowthSection'
import CustomerService from './Components/CustomerService'
import InterpretCustomerSection from './Components/InterpretCustomerSection'
import ReviewSection from './Components/ReviewSection'
import Footer from './Components/Footer'

export default function HomePage() {
  return (
    <div className='h-screen relative'>
     
<Header/>
<WhyChooseUs/>    
<AboutUsSection/>
<BusinessGrowthSection/>
<CustomerService/>
<InterpretCustomerSection/>
<ReviewSection/>
<Footer/>
    </div>
  )
}
