import {configureStore} from "@reduxjs/toolkit"
import FormSlice from "./slice/FormSlice"
import pageNoSlice from "./slice/pageNoSlice";
const store = configureStore({
    reducer:{
        fromData: FormSlice,
        pageNo : pageNoSlice
        // reducer2:reducrer
    },
})

export default store;