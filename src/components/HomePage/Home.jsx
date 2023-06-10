import React from 'react'
import styles from './Home.module.css'
import HeaderUpper from './../Templetes/headerupper/HeaderUpper'
import HeaderDown from '../Templetes/headerdown/HeaderDown'
import TextArea from '../Templetes/textarea/TextArea'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Home = () => {
  const values = useSelector(state=>state.dataRef)
  const {title} = values
  useEffect(()=>{
    document.title=`${title|| "Untitled Document"} - Google Docs`
  },
  [title])
  return (
    <div className={styles.homePage}>
    <HeaderUpper/>
     <HeaderDown/>
     
     <TextArea />
    </div>
  )
}

export default Home