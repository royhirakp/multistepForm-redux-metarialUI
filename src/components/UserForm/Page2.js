import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Gender from './Card/Gender';
import DatePic from './Card/DatePic';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../Store/slice/FormSlice';
import { setErrorData } from '../../Store/slice/FromErrorSlice';
const Page2 = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.fromData)
  const error = useSelector(state=>state.FromErrorSlice)
  const { PhoneNoError, AddressError } = error
  const { PhoneNo, Address } = data
  // console.log('FROM 2nd page')
  return (
    <>
      <div className="dataGenderContainer">
        <div className='dateGdiv'><Gender  /></div>
        <div className='dateGdiv'> <DatePic /></div>
      </div>


      {/* <DatePic/> */}
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >

        <TextField id="outlined-basic"
          {...{ error: PhoneNoError, helperText: PhoneNoError ? "phone no Can't be Empty/ souldbe 10 digit" :""  }}
          value={PhoneNo}
          type='number'
          onChange={(e) => {
            if(PhoneNoError){
              if(e.target.value !== ""){
                dispatch(setErrorData({ key: "PhoneNo", data: false }))
              }}
            dispatch(setData({ key: "PhoneNo", data: e.target.value }))}}

          style={{ "color": "red" }} label="Phone no" variant="outlined" />
        
        {/* address */}
        <TextField id="outlined-basic"
          {...{ error: AddressError, helperText: AddressError ? "address Can't be Empty" :""  }}
          value={Address}
          onChange={(e) => {
            if(AddressError){
              if(e.target.value !== ""){
                dispatch(setErrorData({ key: "Address", data: false }))
              }}
            dispatch(setData({ key: "Address", data: e.target.value }))}}
          style={{ "color": "red" }} label="Address" aria-hidden variant="outlined" />

      </Box>

    </>
  )
}

export default Page2;
