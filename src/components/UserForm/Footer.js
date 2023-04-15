import React from 'react'
import './style.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../Store/slice/pageNoSlice';
import { setErrorData } from '../../Store/slice/FromErrorSlice';
import obj from './Function/Functions';
const Footer = () => {
  let pageNo = useSelector(s=>s.pageNo)
  let formData = useSelector(s=>s.fromData)
  let errors = useSelector(s=>s.FromErrorSlice)

  const { firstName, lastName, email, password ,
    EducationLevel, EmployementLeEL, AnnualIncome, 
    maritalStatus} = formData
  const { firstNameError, lastNameError, emailError, passwordError } = errors
  // console.log(firstNameError, lastNameError, emailError, passwordError)
  // console.log(errors, " form the footer element ")
  const dispatch = useDispatch();

  function handelClick(x){
    if(x==="--"){
      if(pageNo > 1)  dispatch(setPage(pageNo-1))
    }else{
      //error handaling 
      if(pageNo === 1){
        if(firstName.trim() === "") dispatch(setErrorData({key: "firstName", data: true}))
        if(lastName.trim() === "")  dispatch(setErrorData({key: "lastName", data: true}))
        if(!obj.ValidateEmail(email.trim()))  dispatch(setErrorData({key: "email", data: true}))
        // console.log('page no 1 if condition for =m the date oif ')
      }else if(pageNo === 2){

      }else if(pageNo === 3){
        if(EducationLevel.trim() === "") dispatch(setErrorData({key: "EducationLevel", data: true}))
        if(EmployementLeEL.trim() === "") dispatch(setErrorData({key: "EmployementLeEL", data: true}))
        if(AnnualIncome.trim() === "") dispatch(setErrorData({key: "AnnualIncome", data: true}))
        if(maritalStatus.trim() === "") dispatch(setErrorData({key: "maritalStatus", data: true}))        
      }


      if(pageNo < 4)  dispatch(setPage(pageNo+1))
    }
  }

  return (
    <div>
      <Stack spacing={2} className='ButtonContainerFooter' direction="row">
        <Button
      {...{disabled: pageNo === 0 || pageNo ===1 ? true : false }}
      onClick={()=>handelClick("--")}
      variant="outlined">Previous</Button>

        <Button
     {...{disabled: pageNo >3 ? true : false }}
      onClick={()=>handelClick("++")}
      variant="outlined">Next</Button>
    </Stack>
    </div>
  )
}

export default Footer
