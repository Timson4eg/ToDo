import React from 'react'
import style from './CustomBtn.module.scss'
import cn from 'clsx'

const CustomBtn = ({ children, ...props }) => {
	return (
		<button
			className={cn(style.customBtn, style[props.type])}
			onClick={props.onClick}
		>
			<span>{children}</span>
		</button>
	)
}

export default CustomBtn
