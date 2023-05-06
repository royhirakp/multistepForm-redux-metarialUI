import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../Store/slice/FormSlice";
import { setErrorData } from "../../../Store/slice/FromErrorSlice";

export default function Gender() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fromData);
  const error = useSelector((state) => state.FromErrorSlice);
  const { genderError } = error;
  const { gender } = data;
  const handleChange = (event) => {
    dispatch(setErrorData({ key: "gender", data: false }));
    dispatch(setData({ key: "gender", data: event.target.value }));
  };

  return (
    <Box sx={{ maxWidth: 150 }} className="boxofGenter">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={handleChange}
          {...{
            error: genderError,
          }}
        >
          <MenuItem value={"M"}>Male</MenuItem>
          <MenuItem value={"F"}>Female</MenuItem>
          <MenuItem value={"O"}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
