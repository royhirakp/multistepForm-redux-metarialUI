import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Summary from './Summary'
import { useSelector } from 'react-redux'

const Page = () => {
  const pageNo = useSelector(state=>state.pageNo)
  switch (pageNo) {
    case 1:
    return(
      <Page1/>
    )
    case 2:
    return(
      <Page2/>
    )  
    case 3:
    return(
      <Page3/>
    )  
    case 4:
    return(
      <Summary/>
    )  
    default:
      return(
       <Page1/>
      )         
  }
}

export default Page
