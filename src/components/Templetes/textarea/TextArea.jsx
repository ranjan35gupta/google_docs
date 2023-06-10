import React from 'react'
import styles from './textarea.module.css'
import { addDiv } from '../../../Redux/dataslice'
import { useDispatch,useSelector } from 'react-redux'
import { useRef } from 'react'

const TextArea = () => {
  const dispatch = useDispatch()
  const values = useSelector(state=>state.dataRef)
  const {spellingChecker,isLineSpace} = values
 
  let divRef = useRef(null)
 
  return (
    <div
    // style={isLineSpace?{lineHeight:"3rem"}:{}}
    id="myDiv"
    ref={divRef}
    contentEditable={true}
    className={isLineSpace?styles.textArea1:styles.textArea}
    spellCheck={spellingChecker}></div>
  )
}

export default TextArea