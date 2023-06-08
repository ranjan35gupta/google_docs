import React from 'react'
import styles from './headerupper.module.css'
import HeaderUp from '../../molecules/headerup/HeaderUp'
import HeaderBottom from '../../molecules/headerdown/HeaderBottom'
import HeaderRight from '../../molecules/headerside/HeaderRight'
import pics from './../../atoms/pics/docs_2020q4_48dp.png'
const HeaderUpper = () => {
  return (
    <div className={styles.headers_container}>
      <div className={styles.multi_container}>
        <div className={styles.doc_header}>
          <img src={pics} alt="" />
          <div>
          <div className={styles.header_up}> <HeaderUp /></div>
         
          <HeaderBottom />
          </div>
         
        </div>
        <div className={styles.header_section_container}>

          <HeaderRight />
        </div>
      </div>
      
    </div>
  )
}

export default HeaderUpper