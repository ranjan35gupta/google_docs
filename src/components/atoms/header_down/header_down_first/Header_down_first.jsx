import React from 'react'
import styles from './header_down_first.module.css'
 import {RiArrowGoBackFill,RiArrowGoForwardLine} from "react-icons/ri"
 import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
 import SpellcheckIcon from '@mui/icons-material/Spellcheck';
 import { useSelector,useDispatch } from 'react-redux';
 import { addDiv } from '../../../../Redux/dataslice';

import ImagesearchRollerOutlinedIcon from '@mui/icons-material/ImagesearchRollerOutlined';


const Header_down_first = () => {

  const dispatch = useDispatch()
   const values = useSelector(state=>state.dataRef)
  console.log(values)
  const {spellingChecker}= values
    const ar_screen = ['50%','75%',"90%","100%","125%","150%","200%"]
    function handleAddEvent(command){
     document.execCommand(command)
    }
  function handlePrintEvent(myDiv){
let mywindow = window.open("","PRINT","height=650,width=900,top=100,left=100")
mywindow.document.write(`<html><head><title>${myDiv}</title>`);
mywindow.document.write(document.getElementById(myDiv).innerHTML)
mywindow.document.write('</body></html>')
mywindow.document.close()
mywindow.focus()
mywindow.print()
// mywindow.close()

}
function handleFitSreen(myDiv,size){
      console.log(size)
  if(size==='100%'){
    document.getElementById(myDiv).style.transform= "scale(1,1)";
  }
  else if(size ==="50%"){
    document.getElementById(myDiv).style.transform= "scale(0.5,1)";
  }
  else if(size ==="75%"){
    document.getElementById(myDiv).style.transform= "scale(0.75,1)";
  }
  else if(size ==="125%"){
    document.getElementById(myDiv).style.transform= "scale(1.25,1)";
  }
  else if(size ==="150%"){
    document.getElementById(myDiv).style.transform= "scale(1.5,1)";
  }
  
  else if(size ==="200%"){
    document.getElementById(myDiv).style.transform= "scale(2,1)";
  }
  }
function handleSpellCheck(){
  // spellcheck(true)
  dispatch(addDiv(!spellingChecker))
  console.log(spellingChecker)
}


  return (
    <div className={styles.header_down_first_container}>
    <button ><RiArrowGoBackFill onClick={()=>handleAddEvent("undo")}   /></button>
  <button onClick={()=>handleAddEvent("redo")}><RiArrowGoForwardLine/></button>
<LocalPrintshopOutlinedIcon   onClick={()=>handlePrintEvent('myDiv')}/>
 <button onClick={handleSpellCheck} ><   SpellcheckIcon    /></button>      
<ImagesearchRollerOutlinedIcon/>
<div >
<select className={styles.select_option}  onChange={(e)=>handleFitSreen("myDiv",e.target.value)} defaultValue={"100%"}>
    <option value="fit">fit</option>
    {ar_screen.map(ele=><option value={ele}>{ele}</option>)}
    
</select>
</div>
    </div>
  )
}

export default Header_down_first