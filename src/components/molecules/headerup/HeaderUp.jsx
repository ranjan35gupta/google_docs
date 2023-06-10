import React,{useState} from 'react'
import './headerup.module.css'
import {AiOutlineStar} from 'react-icons/ai'
import { addTitle } from '../../../Redux/dataslice'
import { useDispatch,useSelector } from 'react-redux'
import { Hidden } from '@mui/material'

const HeaderUp = () => {
  const dispatch = useDispatch()
  const values = useSelector(state=>state.dataRef)
  const {title} = values
  const [inputTitle,setInputTitle]= useState(false)

function handleTitleSubmit(e){
 e.preventDefault()
 setInputTitle(true)

}

  return (
    <div>
       <form onSubmit={handleTitleSubmit}>
        <input type="text"   placeholder='Untitled document' value={title} onChange ={(e)=>{dispatch(addTitle(e.target.value));setInputTitle(false)}} style={inputTitle?{border:"hidden",
      outline:"none"}:{border:"hidden",hover:{outline:"1px solid black"},
      height:"1rem"}} defaultValue="Untitled Document"   />
        
        <AiOutlineStar/>
        </form>

    </div>
  )
}

export default HeaderUp