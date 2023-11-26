import React from 'react'
import style from './Input.module.scss'

const Input = props => {
	return <input className={style.input} {...props} />
}

export default Input
