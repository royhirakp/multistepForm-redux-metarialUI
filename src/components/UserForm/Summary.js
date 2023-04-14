import React from 'react'
import {  useSelector } from 'react-redux';

const Summary = () => {
  const data = useSelector(state => state.fromData)
  const { firstName,
    lastName,
    email,
    password,
    PhoneNo, Address,gender,dateOfBirth,
    EducationLevel,
    EmployementLeEL,
    AnnualIncome,
    maritalStatus } = data
  return (
    <div>
      <h1 className='summaryHeader' >Summary Page</h1>
      <div className="dataTable">
        <p>firstName:<b> {firstName}</b></p>
        <p>lastName:<b> {lastName}</b></p>
        <p>email: <b>{email}</b></p>
        <p>password: <b>{password}</b></p>
        <p>PhoneNo: <b>{PhoneNo}</b></p>
        <p>Address: <b>{Address}</b></p>
        <p>gender: <b>{gender}</b></p>
        <p>dateOfBirth: <b>{dateOfBirth}</b></p>
        <p>EducationLevel: <b>{EducationLevel}</b></p>
        <p>EmployementLeEL: <b>{EmployementLeEL}</b></p>
        <p>AnnualIncome: <b>{AnnualIncome}</b></p>
        <p>maritalStatus: <b>{maritalStatus}</b></p>
      </div>
    </div>
  )
}

export default Summary
