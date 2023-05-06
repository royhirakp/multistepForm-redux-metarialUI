import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../Store/slice/FormSlice";
import { setErrorData } from "../../Store/slice/FromErrorSlice";
import obj from "./Function/Functions";

const Page1 = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fromData);
  const error = useSelector((state) => state.FromErrorSlice);
  const { firstNameError, lastNameError, emailError, passwordError } = error;
  // console.log(firstNameError,"firstNameError form page no 1, error firstNameError")
  const { firstName, lastName, email, password } = data;
  // console.log(firstName)

  // React.useEffect(()=>{
  //     if(firstName !== ""){

  //     }
  // },[firstName, lastName, email, password])
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          {...{
            error: firstNameError,
            onError: () => {
              console.log("eorr on error function");
            },
            helperText: firstNameError ? "Can't be Empty" : "",
          }}
          value={firstName}
          onChange={(e) => {
            if (firstNameError) {
              if (e.target.value !== "") {
                dispatch(setErrorData({ key: "firstName", data: false }));
              }
            }

            dispatch(setData({ key: "firstName", data: e.target.value }));
          }}
          style={{ color: "red" }}
          label="First name"
          variant="outlined"
        />

        <TextField
          {...{
            error: lastNameError,
            helperText: lastNameError ? "La Can't be Empty" : "",
          }}
          value={lastName}
          onChange={(e) => {
            if (lastNameError) {
              if (e.target.value !== "") {
                dispatch(setErrorData({ key: "lastName", data: false }));
              }
            }
            dispatch(setData({ key: "lastName", data: e.target.value }));
          }}
          style={{ color: "red" }}
          label="Last name"
          variant="outlined"
        />

        <TextField
          {...{
            error: emailError,
            helperText: emailError ? "La Can't be Empty" : "",
          }}
          value={email}
          onChange={(e) => {
            if (emailError) {
              if (obj.ValidateEmail(e.target.value)) {
                // console.log("vaidete 70, ", obj.ValidateEmail(e.target.value));
                dispatch(setErrorData({ key: "email", data: false }));
              }
            }

            dispatch(setData({ key: "email", data: e.target.value }));
          }}
          style={{ color: "red" }}
          label="Email address"
          variant="outlined"
        />

        <TextField
          type="password"
          {...{
            error: passwordError,
            helperText: passwordError ? "Can't be Empty" : "",
          }}
          value={password}
          onChange={(e) =>
            dispatch(setData({ key: "password", data: e.target.value }))
          }
          style={{ color: "red" }}
          label="Password"
          aria-hidden
          variant="outlined"
        />
      </Box>
    </>
  );
};

export default Page1;
