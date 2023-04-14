import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../Store/slice/FormSlice';

const Page1 = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.fromData)
  const { firstName,
    lastName,
    email,
    password } = data
  // console.log(firstName)
  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >

        <TextField
          {...{ error: true, helperText: "wrong " }}
          value={firstName}
          onChange={(e) => dispatch(setData({ key: "firstName", data: e.target.value }))}
          style={{ "color": "red" }} label="First name" variant="outlined" />

        <TextField
          {...{ error: true, helperText: "wrong " }}
          value={lastName}
          onChange={(e) => dispatch(setData({ key: "lastName", data: e.target.value }))}
          style={{ "color": "red" }} label="Last name" variant="outlined" />

        <TextField
          {...{ error: true, helperText: "wrong " }}
          value={email}
          onChange={(e) => dispatch(setData({ key: "email", data: e.target.value }))}
          style={{ "color": "red" }} label="Email address" variant="outlined" />

        <TextField
          hidden
          {...{ error: true, helperText: "wrong " }}
          value={password}
          onChange={(e) => dispatch(setData({ key: "password", data: e.target.value }))}
          style={{ "color": "red" }} label="Password" aria-hidden variant="outlined" />

        {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />

      <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
          {...{error: true, helperText:""}}
        />

      <TextField
          error

          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          
        /> */}

      </Box>

    </>
  )
}

export default Page1;
