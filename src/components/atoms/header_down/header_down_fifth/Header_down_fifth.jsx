import React, { useEffect } from 'react'
import styles from './header_down_fifth.module.css'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import {useRef,useState} from 'react'
const Header_down_fifth = () => {
  const linkRef = useRef(null)
  const imgRef = useRef(null)
  const [imgdata,setimgData]=useState(null)
  function handleLink(){
    linkRef.current.click()
  }
  function handleInserLink(e){
   document.execCommand('createLink',{ text: 'Links', url: e.target.value, title : 'Link' });
  }
  function handleImage(){
 imgRef.current.click()
  }
  
  function handleImageChange(event){
    // setimgData(event.target.files[0])
    if((event.target.files[0])) {
        let imgUrl = URL.createObjectURL(event.target.files[0]);
      let img = document.createElement("img");

      img.style.maxWidth = "50%"; 
      img.style.maxHeight = "50%"; 

      img.src = imgUrl;
      document.execCommand("insertHTML", false, img.outerHTML);
    
    }
    

    
  }

 
  return (
    <div className={styles.header_down_fifth_container}>
       <button onClick={handleLink} ><InsertLinkIcon/></button> 
       <input onChange={handleInserLink} type="url" ref={linkRef} />
        <AddCommentIcon/>
     <button onClick={handleImage}   ><    ImageOutlinedIcon/></button>   
        <input type="file" ref={imgRef} onChange={handleImageChange} hidden />
    </div>
  )
}

export default Header_down_fifth