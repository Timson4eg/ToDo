import React from 'react'
import style from './TextArea.module.scss'

const TextArea = props => {
	return <textarea className={style.textextArea} {...props}></textarea>
}

export default TextArea
