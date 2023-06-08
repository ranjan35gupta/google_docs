import React from 'react'
import styles from './header_down_third.module.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const Header_down_third = () => {
  return (
    <div className={styles.header_down_third_container}>
        <button><RemoveIcon/></button>
        <span>{11}</span>
        <button><AddIcon/></button>
    </div>
  )
}

export default Header_down_third