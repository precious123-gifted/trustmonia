import React from 'react'
import NavigationBar from './BusinessPage-Components/NavigationBar'
import Header from './BusinessPage-Components/Header'
import HelpSection from './BusinessPage-Components/HelpSection'
import TrustmoniaConnectSection from './BusinessPage-Components/TrustmoniaConnectSection'
import BusinessMarketingSection from './BusinessPage-Components/BusinessMarketingSection'
import Footer from './HomePage-Components/Footer'

export default function BusinessPage() {
  return (
    <div className=''>
     <NavigationBar/>
     <Header/>
     <HelpSection/>
     <TrustmoniaConnectSection/>
     <BusinessMarketingSection/>
     <Footer/>

    </div>
  )
}
