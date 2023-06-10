import React from 'react'
import styles from './header_down_forth.module.css'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import {FaHighlighter} from 'react-icons/fa'
import { useRef,useState } from 'react';
const Header_down_forth = () => {
   const colorRef = useRef()
   const bgRef = useRef(null)
   const [color,setColor] = useState()
  function handleCommand(command){
     document.execCommand(command,false,"")
  }

  function handleColorClick(){
    colorRef.current.click()
  }
  function handleColorChange(e){
    
    document.execCommand('foreColor',"",e.target.value)
    setColor(e.target.value)
  }
  function handleBackgroundClick(){
    bgRef.current.click()
  }

  function handleBackgroundChange(e){
    document.execCommand("backColor","",e.target.value)

  }
  return (
    <div className={styles.Header_down_forth_container}>
    <button className={styles.btn} onClick={()=>handleCommand("bold")}> <FormatBoldIcon/></button> 
    <button className={styles.btn} onClick={()=>handleCommand("italic")}   ><FormatItalicIcon/></button>
   <button className={styles.btn} onClick={()=>handleCommand("underline")}><FormatUnderlinedIcon/></button>
   <button className={styles.btn} onClick={handleColorClick}>< TextFormatIcon/></button>
   <input type="color" ref={colorRef} onChange={handleColorChange} hidden/>
   
   <button className={styles.btn} onClick={handleBackgroundClick}  ><FaHighlighter/></button> 
   <input type="color" ref={bgRef}  onChange={handleBackgroundChange} hidden /> 
    </div>
  )
}

export default Header_down_forth