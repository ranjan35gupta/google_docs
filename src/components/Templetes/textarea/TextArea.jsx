import React from 'react'
import styles from './textarea.module.css'

const TextArea = () => {
  return (
    <div
    contentEditable={true}
    className={styles.textArea}
    spellCheck={false}>TextArea</div>
  )
}

export default TextArea