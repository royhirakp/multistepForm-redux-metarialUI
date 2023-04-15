import React from 'react'
import Header from './Header'
import Page from './Page'
import "./style.css"
import Footer from './Footer'
const UserForm = () => {
  return (
    <div>
      <Header/>

      <div className="page">
      <Page />
      </div>
     
      <Footer/>
    </div>
  )
}

export default UserForm
