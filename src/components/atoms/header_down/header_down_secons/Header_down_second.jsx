import React from 'react'
import styles from './header_down_second.module.css'

const Header_down_second = () => {
    const ar_text =[
        {heading:"Normal text",
    tag:'p'},
    {heading:"Title",
tag:"h1"},
{heading:"Subtitle",
tag:"h4"},{heading:"Heading1",
tag:"h2"},{heading:"Heading2",
tag:"h3"},{heading:"Heading3",
tag:"h5"},{heading:"Heading4",
tag:"h5"},
        
        // tag:
        ]
    // const ar_fonts =["10","50"]
     const fontFamily = [
        "serif",
        "arial",
        "sans-serif",
        "monospace",
        "cursive",
        "fantasy",
        "system-ui",
        "ui-serif",
        "ui-sans-serif",
        "ui-monospace",
        "ui-rounded",
        "emoji",
        "math",
        "fangsong",
        "Georgia",
        "Times New Roman",
        "Impact",
      ];
    function handleFonts(value){
        console.log(value)
        document.execCommand('fontName'," ",value)
    }
    function handleScreen(value){
        document.execCommand('formatBlock','',value)
    }
    return (
    <div className={styles.header_down_second_container}>
        <div>
            <select name="Text"onChange={(e)=>handleFonts(e.target.value)} >
             {fontFamily.map(ele=><option value={ele}>{ele}</option>)}
            </select>
        </div>
        <div>
            <select onChange={(e)=>handleScreen(e.target.value)}   name="fonts" >
             {ar_text.map(ele=><option value={ele.tag}>{ele.heading}</option>)}
            </select>
        </div>

    </div>
  )
}

export default Header_down_second