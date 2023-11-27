import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../providers/TasksProviders'
import cn from 'clsx'

import style from './PopUp.module.scss'
import Input from '../Input/Input'
import Btn from '../Btn/Btn'

import TextArea from '../TextArea/TextArea'
import { useUpdateTask } from '../../utils/hooks/useUpdateTask'

const PopUp = () => {
	const {
		updateTask,
		popUp,
		setPopUp,
		title,
		setTitle,
		discription,
		setDiscription,
		task,
		setTask
	} = useContext(Context)

	return (
		<div
			className={cn(style.popUp, { [style.active]: popUp.visible })}
			onClick={() => setPopUp({ ...popUp, visible: false })}
		>
			<div className={style.popUpContent} onClick={e => e.stopPropagation()}>
				<Input
					name='title'
					value={task.title}
					onChange={e => setTask({ ...task, title: e.target.value })}
					type='text'
				/>
				<TextArea
					name='discription'
					value={task.discription}
					onChange={e => setTask({ ...task, discription: e.target.value })}
					type='text'
				></TextArea>

				<Btn onClick={updateTask} type='greenBigBtn'>
					Save
				</Btn>
			</div>
		</div>
	)
}

export default PopUp
