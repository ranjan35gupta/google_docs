import React from 'react'
import styles from './dropdown.module.css'
import {CiTextAlignLeft} from 'react-icons/ci'
import {CiTextAlignRight} from 'react-icons/ci'
import {BsJustify} from 'react-icons/bs'
import {BsTextCenter} from 'react-icons/bs'
import {useState} from 'react'

const DropDown = () => {
    const [btn,setBtn]=useState(true)
   function handleAddEvent(command){
        document.execCommand(command)
        setBtn(!btn)
    }
    function handleBtn(){
        setBtn(!btn)
    }
  return (
    <div>{btn?<div><button onClick={handleBtn}><CiTextAlignLeft/></button></div>:<div className={styles.dropDown}>
    <button onClick={()=>handleAddEvent("justifyleft")}><CiTextAlignLeft/></button>
    <button onClick={()=>handleAddEvent("justifyRight")}><CiTextAlignRight/></button>
    <button onClick={()=>handleAddEvent("justifyCenter")}><BsTextCenter/></button>
    <button onClick={()=>handleAddEvent("justifyFull")}><BsJustify/></button>

</div>}</div>
    
  )
}

export default DropDown