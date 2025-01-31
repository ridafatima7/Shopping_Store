import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content" >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout