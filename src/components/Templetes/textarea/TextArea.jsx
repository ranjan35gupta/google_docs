import React from 'react'
import styles from './textarea.module.css'
import { addDiv } from '../../../Redux/dataslice'
import { useDispatch,useSelector } from 'react-redux'
import { useRef } from 'react'

const TextArea = () => {
  const dispatch = useDispatch()
  const values = useSelector(state=>state.dataRef)
  const {spellingChecker} = values
  console.log(spellingChecker,"this is fale")
  let divRef = useRef(null)
 
  return (
    <div
    id="myDiv"
    ref={divRef}
    contentEditable={true}
    className={styles.textArea}
    spellCheck={spellingChecker}>TextArea</div>
  )
}

export default TextArea