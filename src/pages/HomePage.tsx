import React from 'react'
import Header from './HomePage-Components/Header'
import WhyChooseUs from './HomePage-Components/WhyChooseUs'
import AboutUsSection from './HomePage-Components/AboutUsSection'
import BusinessGrowthSection from './HomePage-Components/BusinessGrowthSection'
import CustomerService from './HomePage-Components/CustomerService'
import InterpretCustomerSection from './HomePage-Components/InterpretCustomerSection'
import ReviewSection from './HomePage-Components/ReviewSection'
import Footer from './HomePage-Components/Footer'
import NavigationBar from './HomePage-Components/NavigationBar'

export default function HomePage() {
  return (
    <div className='h-screen relative'>
     <NavigationBar/>
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
