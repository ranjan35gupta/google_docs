import React from 'react'
import styles from './header_down_sixth.module.css'
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatLineSpacingOutlinedIcon from '@mui/icons-material/FormatLineSpacingOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import FormatIndentDecreaseOutlinedIcon from '@mui/icons-material/FormatIndentDecreaseOutlined';
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined';
import DropDown from '../../dropdown/DropDown';
import {useState} from 'react'
const Header_down_sixth = () => {
  

  function handleAddEvent(command){
    document.execCommand(command)
  }
  
  return (
    <div className={styles.drop_container} >
      {/* <button onClick={()=>handleAddEvent("justifyRight")}><FormatAlignLeftOutlinedIcon/> </button>  */}
      <div ><DropDown/></div>
      <div><button onClick={()=>handleAddEvent("")}><FormatLineSpacingOutlinedIcon/></button>  
     <button onClick={()=>handleAddEvent("")}><ChecklistOutlinedIcon /></button>  
     <button onClick={()=>handleAddEvent('insertUnorderedList')}><FormatListBulletedOutlinedIcon/></button>  
      <button onClick={()=>handleAddEvent('insertOrderedList')}><FormatListNumberedOutlinedIcon/></button> 
      <button onClick={()=>handleAddEvent('outdent')}><FormatIndentDecreaseOutlinedIcon/></button> 
      <button onClick={()=>handleAddEvent('indent')}><FormatIndentIncreaseOutlinedIcon/></button> </div>
     
    </div>
  )
}

export default Header_down_sixth