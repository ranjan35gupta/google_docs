import React from 'react'
import styles from './headerdown.module.css'
import Header_down_first from '../../atoms/header_down/header_down_first/Header_down_first'
import Header_down_second from '../../atoms/header_down/header_down_secons/Header_down_second'

import Header_down_third from '../../atoms/header_down/header_down_third/Header_down_third'
import Header_down_forth from '../../atoms/header_down/header_down_fouth/Header_down_forth'
import Header_down_fifth from '../../atoms/header_down/header_down_fifth/Header_down_fifth'
import Header_down_sixth from '../../atoms/header_down/header_down_sixth/Header_down_sixth'
import Header_down_seventh from '../../atoms/header_down/header_down_seventh/Header_down_seventh'
const HeaderDown = () => {
  return (
    <div className={styles.header_down_container}>
      <Header_down_first/>
      <Header_down_second/>
      <Header_down_third/>
      <Header_down_forth/>
      <Header_down_fifth/>
      <Header_down_sixth/>
      <Header_down_seventh/>
    </div>
  )
}

export default HeaderDown