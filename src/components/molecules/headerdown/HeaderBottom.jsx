import React from 'react'
import styles from './headerbottom.module.css'
import File from '../../atoms/header_up_components/File/File'
import Edit from '../../atoms/header_up_components/Insert/Edit/Edit'
import View from '../../atoms/header_up_components/View/View'
import Insert from '../../atoms/header_up_components/Insert/Insert'
import Format from '../../atoms/header_up_components/Format/Format'
import Tool from '../../atoms/header_up_components/Tools/Tool'
import Extension from '../../atoms/header_up_components/Extensions/Extension'
import Help from '../../atoms/header_up_components/Help/Help'
const HeaderBottom = () => {
  return (
    <div className={styles.header_bottom_container}>
        <File/>
        <Edit/>
        <View/>
        <Insert/>
        <Format/>
        <Tool/>
        <Extension/>
        <Help/>
    </div>
  )
}

export default HeaderBottom