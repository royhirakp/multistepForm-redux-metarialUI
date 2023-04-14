import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../Store/slice/FormSlice';
const Page3 = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.fromData)
  console.log(data)
  const { EducationLevel,
    EmployementLeEL,
    AnnualIncome,
    maritalStatus } = data
  return (
    <>
      <Box
        component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
        noValidate
        autoComplete="off">

        <TextField
          {...{ error: true, helperText: "wrong " }}
          value={EducationLevel}
          onChange={(e) => dispatch(setData({ key: "EducationLevel", data: e.target.value }))}
          style={{ "color": "red" }} label="EducationLevel" variant="outlined" />

        <TextField
          {...{ error: true, helperText: "wrong " }}
          value={EmployementLeEL}
          onChange={(e) => dispatch(setData({ key: "EmployementLeEL", data: e.target.value }))}
          style={{ "color": "red" }} label="EmployementLeEL" variant="outlined" />

        <TextField
          {...{ error: true, helperText: "wrong " }}
          value={AnnualIncome}
          onChange={(e) => dispatch(setData({ key: "AnnualIncome", data: e.target.value }))}
          style={{ "color": "red" }} label="AnnualIncome" variant="outlined" />

        <TextField
          {...{ error: true, helperText: "wrong " }}
          value={maritalStatus}
          onChange={(e) => dispatch(setData({ key: "maritalStatus", data: e.target.value }))}
          style={{ "color": "red" }} label="maritalStatus" variant="outlined" />

      </Box>

    </>
  )
}

export default Page3;
