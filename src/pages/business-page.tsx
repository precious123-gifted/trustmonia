import React from 'react'
import NavigationBar from './BusinessPage-Components/NavigationBar'
import Header from './BusinessPage-Components/Header'
import HelpSection from './BusinessPage-Components/HelpSection'
import TrustmoniaConnectSection from './BusinessPage-Components/TrustmoniaConnectSection'

export default function BusinessPage() {
  return (
    <div className='h-screen'>
     <NavigationBar/>
     <Header/>
     <HelpSection/>
     <TrustmoniaConnectSection/>

    </div>
  )
}
