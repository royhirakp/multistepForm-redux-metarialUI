import React from "react";
import "./style.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../Store/slice/pageNoSlice";
import { setErrorData } from "../../Store/slice/FromErrorSlice";
import obj from "./Function/Functions";
const Footer = () => {
  let pageNo = useSelector((s) => s.pageNo);
  let formData = useSelector((s) => s.fromData);
  let errors = useSelector((s) => s.FromErrorSlice);
  // Page change and error handaling
  const {
    firstName,
    lastName,
    email,
    password,
    Address,
    PhoneNo,
    dateOfBirth,
    gender,
    EducationLevel,
    EmployementLeEL,
    AnnualIncome,
    maritalStatus,
  } = formData;
  const {
    firstNameError,
    lastNameError,
    emailError,

    passwordError,
    AddressError,
    PhoneNoError,
    genderError,
    dateOfBirthError,
    EducationLevelError,
    EmployementLeELError,
    AnnualIncomeError,
    maritalStatusError,
  } = errors;

  const dispatch = useDispatch();

  function handelClick(x) {
    if (x === "--") {
      if (pageNo > 1) dispatch(setPage(pageNo - 1));
    } else {
      //error handaling
      if (pageNo === 1) {
        if (firstName.trim() === "")
          dispatch(setErrorData({ key: "firstName", data: true }));
        if (lastName.trim() === "")
          dispatch(setErrorData({ key: "lastName", data: true }));
        if (!obj.ValidateEmail(email.trim()))
          dispatch(setErrorData({ key: "email", data: true }));
        if (
          firstName !== "" &&
          lastName !== "" &&
          email !== "" &&
          password !== "" &&
          !firstNameError &&
          !lastNameError &&
          !emailError
        ) {
          if (pageNo < 4) dispatch(setPage(pageNo + 1));
        }
        // page 2
      } else if (pageNo === 2) {
        if (Address.trim() === "")
          dispatch(setErrorData({ key: "Address", data: true }));
        if (PhoneNo.trim().length < 10) {
          dispatch(setErrorData({ key: "PhoneNo", data: true }));
        }
        if (gender.trim() === "") {
          dispatch(setErrorData({ key: "gender", data: true }));
        } else {
          // dispatch(setErrorData({ key: "gender", data: false }));
        }
        if (dateOfBirth.trim() === "") {
          dispatch(setErrorData({ key: "dateOfBirth", data: true }));
        }
        console.log(dateOfBirth, "date of birth");
        console.log(
          Address !== "",
          PhoneNo !== "",
          gender !== "",
          dateOfBirth !== "",
          !AddressError,
          !PhoneNoError,
          !genderError,
          !dateOfBirthError
        );
        if (
          Address !== "" &&
          PhoneNo !== "" &&
          gender !== "" &&
          dateOfBirth !== "" &&
          !AddressError &&
          !PhoneNoError &&
          !genderError &&
          !dateOfBirthError
        ) {
          if (pageNo < 4) dispatch(setPage(pageNo + 1));
        }

        // if (pageNo < 4) dispatch(setPage(pageNo + 1));
      } else if (pageNo === 3) {
        //page 3
        if (EducationLevel.trim() === "")
          dispatch(setErrorData({ key: "EducationLevel", data: true }));
        if (EmployementLeEL.trim() === "")
          dispatch(setErrorData({ key: "EmployementLeEL", data: true }));
        if (AnnualIncome.trim() === "")
          dispatch(setErrorData({ key: "AnnualIncome", data: true }));
        if (maritalStatus.trim() === "")
          dispatch(setErrorData({ key: "maritalStatus", data: true }));
        if (
          EducationLevel !== "" &&
          EmployementLeEL !== "" &&
          AnnualIncome !== "" &&
          maritalStatus !== "" &&
          !EducationLevelError &&
          !EmployementLeELError &&
          !AnnualIncomeError &&
          !maritalStatusError
        ) {
          if (pageNo < 4) dispatch(setPage(pageNo + 1));
        }
      }
    }
  }

  return (
    <div>
      <Stack spacing={2} className="ButtonContainerFooter" direction="row">
        <Button
          {...{ disabled: pageNo === 0 || pageNo === 1 ? true : false }}
          onClick={() => handelClick("--")}
          variant="outlined"
        >
          Previous
        </Button>

        <Button
          {...{ disabled: pageNo > 3 ? true : false }}
          onClick={() => handelClick("++")}
          variant="outlined"
        >
          Next
        </Button>
      </Stack>
    </div>
  );
};

export default Footer;
