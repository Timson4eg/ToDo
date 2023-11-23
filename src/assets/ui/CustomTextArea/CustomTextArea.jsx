import React from 'react'
import style from './CustomTextArea.module.scss'

const CustomTextArea = props => {
	return <textarea className={style.customTextextArea} {...props}></textarea>
}

export default CustomTextArea
