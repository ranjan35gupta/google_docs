import React,{useState} from 'react'
import styles from './headerbottom.module.css'
import File from '../../atoms/header_up_components/File/File'
import Edit from '../../atoms/header_up_components/Insert/Edit/Edit'
import View from '../../atoms/header_up_components/View/View'
import Insert from '../../atoms/header_up_components/Insert/Insert'
import Format from '../../atoms/header_up_components/Format/Format'
import Tool from '../../atoms/header_up_components/Tools/Tool'
import Extension from '../../atoms/header_up_components/Extensions/Extension'
import Help from '../../atoms/header_up_components/Help/Help'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useSelector } from 'react-redux'
const HeaderBottom = () => {
  const values = useSelector(state=>state.dataRef)
  const {title} = values
 const [openDialog,setOpenDialog]= useState(false)


 async function handleSaveDocument (myDiv){
  const sheetContent = document.getElementById(myDiv);
  const canvas = await html2canvas(sheetContent,);
  const imageData = canvas.toDataURL("image/png");
  const pdfDoc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: false,
  });
  pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
  pdfDoc.save(`${title}.pdf`);
  console.log(document.getElementById(myDiv).innerHTML)
  }

  return (
    <div className={styles.header_bottom_container}>
      
        <div className={styles.files} >
        <button className={styles.btn}  onClick={()=>setOpenDialog(!openDialog)}><File /></button>
          {
           openDialog?<button className={styles.btn} onClick={()=>handleSaveDocument("myDiv")}>save</button>:""


          }</div>
        <Edit/>
        <View/>
        <Insert/>
        <Format/>
        <Tool/>
        <Extension/>
        <Help/>
    </div>
  )
}

export default HeaderBottom