import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName } from "../Store/slice/FormSlice";
import { clearAlluser } from "../Store/actions/indexAC";
const From = () => {
  const [data, setDta] = useState("");
  const mystate = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      dddjdmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
      {mystate.name}
      name:
      <input onChange={(e) => setDta(e.target.value)} type="text" />
      <button
        onClick={() => {
          dispatch(addName(data, "type"));
        }}
      >
        addd
      </button>
      <button onClick={() => dispatch(clearAlluser("datatpaylode"))}>
        clear
      </button>
    </div>
  );
};

export default From;
