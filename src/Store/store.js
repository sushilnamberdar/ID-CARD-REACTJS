import { configureStore } from "@reduxjs/toolkit";
import studentReducer from '../Slices/StudenSlices'
export const store = configureStore({
    reducer:{
      studentslicer:  studentReducer,
    },
})

export default store;