import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useDispatch } from "react-redux";
import { setData } from "../../../Store/slice/FormSlice";
import { setErrorData } from "../../../Store/slice/FromErrorSlice";

export default function DatePic() {
  // const [value , setValue] = React.useState('')
  const dispatch = useDispatch();
  return (
    <LocalizationProvider {...{ error: true }} dateAdapter={AdapterDayjs}>
      {/* kkk */}
      <DemoContainer
        {...{ error: true }}
        components={["DatePicker", "DatePicker"]}
      >
        {/* <DatePicker label="Uncont rolled picker" 
        defaultValue={dayjs('2022-04-07')} 
        /> */}
        {/* ddh */}
        <DatePicker
          label="Date of birth"
          // value={value}
          onChange={(newValue) => {
            const { $D, $M, $y } = newValue;
            // console.log($D, $M, $y)
            // let date = $D + " " + $M+" "+ $y
            // console.log(date," date format")
            // setValue(date)
            dispatch(
              setData({
                key: "dateOfBirth",
                data: $D + " " + (1 + $M) + " " + $y,
              })
            );
            dispatch(setErrorData({ key: "dateOfBirth", data: false }));

            // console.log(newValue)
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { setData } from '../../../Store/slice/FormSlice';

// export default function DatePic() {
//   const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
//   console.log(value,"line 12")
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
//         <DateTimePicker
//           label="Uncontrolled picker"
//           defaultValue={dayjs('2022-04-17T15:30')}
//         />
//         <DateTimePicker
//           label="Controlled picker"
//           value={value}
//           onChange={(newValue) => setValue(newValue)}
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }
