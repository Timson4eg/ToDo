import React from 'react'
import style from './Button.module.scss'
import cn from 'clsx'

const Button = ({ children, ...props }) => {
	return (
		<button className={cn(style.button, style[props.type])} {...props}>
			<span>{children}</span>
		</button>
	)
}

export default Button
