import React from 'react'
import styles from './headerright.module.css'
import CommentIcon from '@mui/icons-material/Comment';
import VideocamIcon from '@mui/icons-material/Videocam';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
const HeaderRight = () => {
  return (
    <div className={styles.header_right_container}>
<CommentIcon/>
<VideocamIcon/>
<button><EnhancedEncryptionIcon/> Share</button>
    </div>
  )
}

export default HeaderRight