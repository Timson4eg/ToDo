import React from 'react'
import style from './CustomInput.module.scss'

const CustomInput = props => {
	return <input className={style.customInput} {...props} />
}

export default CustomInput
