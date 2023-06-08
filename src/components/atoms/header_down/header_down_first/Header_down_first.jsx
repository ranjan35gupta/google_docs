import React from 'react'
import styles from './header_down_first.module.css'
 import {RiArrowGoBackFill,RiArrowGoForwardLine} from "react-icons/ri"

import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
 import SpellcheckIcon from '@mui/icons-material/Spellcheck';

import ImagesearchRollerOutlinedIcon from '@mui/icons-material/ImagesearchRollerOutlined';
const Header_down_first = () => {
    const ar_screen = ['50%','75%',"90%","100%","125%","150%","200%"]
    function handleAddEvent(command){
     document.execCommand(command)
    }
  return (
    <div className={styles.header_down_first_container}>
    <button ><RiArrowGoBackFill onClick={()=>handleAddEvent("undo")}   /></button>
  <button onClick={()=>handleAddEvent("redo")}><RiArrowGoForwardLine/></button>
<LocalPrintshopOutlinedIcon   onClick={handlePrintEvent}/>
<SpellcheckIcon/>
<ImagesearchRollerOutlinedIcon/>
<div >
<select className={styles.select_option} defaultValue={"100%"}>
    <option value="fit">fit</option>
    {ar_screen.map(ele=><option value={ele}>{ele}</option>)}
    
</select>
</div>
    </div>
  )
}

export default Header_down_first