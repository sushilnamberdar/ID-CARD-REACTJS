import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: '',
    fathername: '',
    dob: '',
    address: '',
    phonenumber:'',
    idnumber: '',
    department: '',
    yearofstudy: '',
    boldgroup: '',
    image: '',
    classn: '',
}
export const StudentSlice = createSlice({
    name: 'studentslicer',
    initialState,
    reducers: {
        studentname: (state, action) => {
            state.name = action.payload;
        },
        fathername: (state, action) => {
            state.fathername = action.payload;
        },
        dobfun: (state, action) => {
            state.dob = action.payload;
        },
        addressfun: (state, action) => {
            state.address = action.payload;
        },
        phonenumberfun:(state,action) => {
                state.phonenumber = action.payload;
        },
        idnumberfun: (state, action) => {
            state.idnumber = action.payload;
        },
        departmentfun: (state, action) => {
            state.department = action.payload;
        },
        yearofstudyfun: (state, action) => {
            state.yearofstudy = action.payload;
        },
        boldgroupfun: (state, action) => {
            state.boldgroup = action.payload;
        },
        studentimage: (state, action ) => {
            state.image = action.payload;
        },
        classfun : (state, action ) => {
            state.classn = action.payload;
        }

    }
})

export const { studentname, classfun, phonenumberfun, fathername, dobfun, addressfun, idnumberfun, departmentfun, yearofstudyfun, boldgroupfun ,studentimage } = StudentSlice.actions;
export default StudentSlice.reducer
