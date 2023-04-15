import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../Store/slice/FormSlice';
import { setErrorData } from '../../Store/slice/FromErrorSlice';
const Page3 = () => {

  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = (data) =>{ 
  //   console.log(data);
  // }
  // console.log(watch()); 

  const dispatch = useDispatch();
  const data = useSelector(state => state.fromData)
  const error = useSelector(state=>state.FromErrorSlice)
  const { EducationLevelError, EmployementLeELError, AnnualIncomeError, maritalStatusError} = error
  const { EducationLevel, EmployementLeEL, AnnualIncome, maritalStatus } = data
  return (
    <>

      <Box
        component="form" 
        sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
        noValidate
        autoComplete="off">

        <TextField
          {...{ error: EducationLevelError, helperText: EducationLevelError ? "Can't be Empty" :"" }}
          value={EducationLevel}
          onChange={(e) => {
            if(EducationLevelError){
              if(e.target.value !== ""){
                dispatch(setErrorData({ key: "EducationLevel", data: false }))
              }}
            dispatch(setData({ key: "EducationLevel", data: e.target.value }))
          }}
          style={{ "color": "red" }} 
          label="EducationLevel" variant="outlined"
      //     name="testInput"
      //   fullWidth
        // error={Boolean(errors.exampleRequired)}
        // helperText={errors.exampleRequired?.message}
      //   onChange={handleSubmit((data)=>{
      //     console.log(data);
      // })}
      // {...register("exampleRequired", { required: "test fild is nedded" })}
          />

        <TextField
          {...{ error: EmployementLeELError, helperText: EmployementLeELError ? "Can't be Empty" :"" }}
          value={EmployementLeEL}
          onChange={(e) => {
            if(EducationLevelError){
              if(e.target.value !== ""){
                dispatch(setErrorData({ key: "EmployementLeEL", data: false }))
              }}

            dispatch(setData({ key: "EmployementLeEL", data: e.target.value }))
          }}
          style={{ "color": "red" }} label="EmployementLeEL" variant="outlined" />


        <TextField
          {...{ error: AnnualIncomeError, helperText: AnnualIncomeError ? "Can't be Empty" :"" }}
          value={AnnualIncome}
          onChange={(e) => {
            if(AnnualIncomeError){
              if(e.target.value !== ""){
                dispatch(setErrorData({ key: "AnnualIncome", data: false }))
              }}
            dispatch(setData({ key: "AnnualIncome", data: e.target.value }))
          }}
          style={{ "color": "red" }} label="AnnualIncome" variant="outlined" />


        <TextField
          {...{ error: maritalStatusError, helperText: maritalStatusError ? "Can't be Empty" :"" }}
          value={maritalStatus}
          onChange={(e) => {

            if(maritalStatusError){
              if(e.target.value !== ""){
                dispatch(setErrorData({ key: "maritalStatus", data: false }))
              }}

            dispatch(setData({ key: "maritalStatus", data: e.target.value }))
          }}
          style={{ "color": "red" }} label="maritalStatus" variant="outlined" />

      </Box>

    </>
  )
}

export default Page3;
