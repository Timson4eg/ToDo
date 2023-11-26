import React from 'react'
import style from './Btn.module.scss'
import cn from 'clsx'

const Btn = ({ children, ...props }) => {
	return (
		<button
			className={cn(style.btn, style[props.type])}
			onClick={props.onClick}
		>
			<span>{children}</span>
		</button>
	)
}

export default Btn
