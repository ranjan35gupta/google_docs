import React from 'react'
import styles from './header_down_second.module.css'

const Header_down_second = () => {
    const ar_text =["Normal text","Title","Subtitle","Heading1","Heading2","Heading3","Options"]
    const ar_fonts =["Arial"]
    return (
    <div className={styles.header_down_second_container}>
        <div>
            <select name="Text" >
             {ar_text.map(ele=><option value={ele}>{ele}</option>)}
            </select>
        </div>
        <div>
            <select name="Text" >
             {ar_text.map(ele=><option value={ele}>{ele}</option>)}
            </select>
        </div>

    </div>
  )
}

export default Header_down_second