import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Gender from './Card/Gender';
import DatePic from './Card/DatePic';

import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../Store/slice/FormSlice';
const Page2 = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.fromData)
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
          {...{ error: true, helperText: "wrong " }}
          value={PhoneNo}
          onChange={(e) => dispatch(setData({ key: "PhoneNo", data: e.target.value }))}
          style={{ "color": "red" }} label="Phone no" variant="outlined" />

        <TextField id="outlined-basic"
          hidden
          value={Address}
          onChange={(e) => dispatch(setData({ key: "Address", data: e.target.value }))}
          {...{ error: true, helperText: "wrong " }}
          style={{ "color": "red" }} label="Address" aria-hidden variant="outlined" />

      </Box>

    </>
  )
}

export default Page2;
