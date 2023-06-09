import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"googleDocs",
    initialState:{
        spellingChecker:false
    },
    reducers:{
        addDiv:(state,action)=>{
            // console.log(action.payload,"l;ajk")
           state.spellingChecker=action.payload
        }
    }
})

  export const {addDiv} = dataSlice.actions
export default dataSlice.reducer