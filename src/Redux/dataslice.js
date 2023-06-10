import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"googleDocs",
    initialState:{
        spellingChecker:false,
        title:"",
        isLineSpace:false
    },
    reducers:{
        addDiv:(state,action)=>{
            // console.log(action.payload,"l;ajk")
           state.spellingChecker=action.payload
        },
        addTitle:(state,action)=>{
            state.title = action.payload
        },
        addLineSpace:(state,action)=>{
            state.isLineSpace=action.payload
        }
    }
})

  export const {addDiv,addTitle,addLineSpace} = dataSlice.actions
export default dataSlice.reducer