import React from 'react'
import styles from './Home.module.css'
import HeaderUpper from '../Templetes/headerupper/HeaderUpper'
import HeaderDown from '../Templetes/headerdown/HeaderDown'
import TextArea from '../Templetes/textarea/TextArea'

const Home = () => {
  return (
    <>
    <HeaderUpper/>
     <HeaderDown/>
     <TextArea/>
    </>
  )
}

export default Home