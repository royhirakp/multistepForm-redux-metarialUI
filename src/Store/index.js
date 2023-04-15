import {configureStore} from "@reduxjs/toolkit"
import FormSlice from "./slice/FormSlice"
import pageNoSlice from "./slice/pageNoSlice";
import FromErrorSlice from "./slice/FromErrorSlice";
const store = configureStore({
    reducer:{
        fromData: FormSlice,
        pageNo : pageNoSlice,
        FromErrorSlice: FromErrorSlice
        // reducer2:reducrer
    },
})

export default store;