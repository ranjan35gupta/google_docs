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
import { useDispatch,useSelector } from 'react-redux';
import { addLineSpace } from '../../../../Redux/dataslice';

const Header_down_sixth = () => {
  // const [isLineSpace,setIsLineSpace] = useState(false)
  const values = useSelector(state=>state.dataRef)
  const {isLineSpace} = values
  
  const dispatch = useDispatch()

  function handleAddEvent(command){
    document.execCommand(command)
  }
  function handleLineSpacing(){
       dispatch(addLineSpace(!isLineSpace))
  }
  
  return (
    <div className={styles.drop_container} >
      {/* <button onClick={()=>handleAddEvent("justifyRight")}><FormatAlignLeftOutlinedIcon/> </button>  */}
      <div  ><DropDown/></div>
      <button className={styles.btn} onClick={handleLineSpacing}><FormatLineSpacingOutlinedIcon   /></button>  
     <button className={styles.btn} onClick={()=>handleAddEvent("")}><ChecklistOutlinedIcon /></button>  
     <button className={styles.btn} onClick={()=>handleAddEvent('insertUnorderedList')}><FormatListBulletedOutlinedIcon/></button>  
      <button className={styles.btn} onClick={()=>handleAddEvent('insertOrderedList')}><FormatListNumberedOutlinedIcon/></button> 
      <button className={styles.btn}  onClick={()=>handleAddEvent('outdent')}><FormatIndentDecreaseOutlinedIcon/></button> 
      <button className={styles.btn}   onClick={()=>handleAddEvent('indent')}><FormatIndentIncreaseOutlinedIcon/></button> 
     
    </div>
  )
}

export default Header_down_sixth