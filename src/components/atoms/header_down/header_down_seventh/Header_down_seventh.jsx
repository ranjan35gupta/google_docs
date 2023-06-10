import React from 'react'
import styles from './header_down_seventh.module.css'
const Header_down_seventh = () => {
  return (
    <div className={styles.Header_down_seventh_container}>
        <select  value="EN" name="" id="" defaultValue="En">
            <option> En English</option>
            <option>English Keyword</option>
        </select>
        <select name="" id="">
            <option value="Editing">Editing</option>
            <option value="Suggesting">Suggesting</option>
            <option value="Viewing">Viewing</option>
        </select>
    </div>
  )
}

export default Header_down_seventh