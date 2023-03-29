import React from 'react'
import NavigationBar from './BusinessPage-Components/NavigationBar'
import Header from './BusinessPage-Components/Header'
import HelpSection from './BusinessPage-Components/HelpSection'
import TrustmoniaConnectSection from './BusinessPage-Components/TrustmoniaConnectSection'
import BusinessMarketingSection from './BusinessPage-Components/BusinessMarketingSection'

export default function BusinessPage() {
  return (
    <div className='h-screen'>
     <NavigationBar/>
     <Header/>
     <HelpSection/>
     <TrustmoniaConnectSection/>
     <BusinessMarketingSection/>

    </div>
  )
}
