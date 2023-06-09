import React,{useState} from 'react'
import styles from './header_down_third.module.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const Header_down_third = () => {
  const [count,setCount]= useState(0)

  function handleDecrease(){
    if(count>0){
      setCount(pre=>pre-1)
    }
    document.execCommand("fontSize","",count)
  }
  function handleIncrease(){
    setCount(pre=>pre+1)
    document.execCommand("fontSize","",count)
  }
  return (
    <div className={styles.header_down_third_container}>
        <RemoveIcon onClick={handleDecrease}/>
        <span>{count}</span>
        <AddIcon  onClick={handleIncrease}   />
    </div>
  )
}

export default Header_down_third