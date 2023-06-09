import { configureStore } from "@reduxjs/toolkit";
import dataValue from './dataslice'

const store = configureStore({
reducer:{
    dataRef:dataValue
}
})

export default store;