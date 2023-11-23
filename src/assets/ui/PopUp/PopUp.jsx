import React, { useContext, useState } from 'react'
import { Context } from '../../../providers/TasksProviders'
import cn from 'clsx'

import style from './PopUp.module.scss'
import CustomInput from '../CustomInput/CustomInput'
import CustomBtn from '../CustomBtn/CustomBtn'

import CustomTextArea from '../CustomTextArea/CustomTextArea'

const PopUp = () => {
	const { tasks, setTasks, popUp, setPopUp } = useContext(Context)

	const task = tasks.find(task => task.id === popUp.id)
	const [title, setTitle] = useState(task.title)
	const [discription, setDiscription] = useState(task.discription)

	const editTask = (title, discription, tasks, setTasks) => {
		setTasks(
			tasks.map(task => {
				if (task.id === popUp.id) {
					return {
						id: popUp.id,
						title: title,
						discription: discription,
						status: false
					}
				} else {
					return task
				}
			})
		)
	}

	const onSubmit = () => {
		setPopUp({ ...popUp, visible: false })
		console.log(title, discription)
		editTask(title, discription, tasks, setTasks)
	}

	return (
		<div
			className={cn(style.popUp, { [style.active]: popUp.visible })}
			onClick={() => setPopUp({ ...popUp, visible: false })}
		>
			<div className={style.popUpContent} onClick={e => e.stopPropagation()}>
				<CustomInput
					placeholder={task.title}
					name='title'
					value={title}
					onChange={e => setTitle(e.target.value)}
					type='text'
				/>
				<CustomTextArea
					placeholder={task.discription}
					name='discription'
					value={discription}
					onChange={e => setDiscription(e.target.value)}
					type='text'
				></CustomTextArea>

				{/* <CustomBtn onClick={onSubmit} type='greenBigBtn'> */}
				<CustomBtn onClick={onSubmit} type='greenBigBtn'>
					Save
				</CustomBtn>
			</div>
		</div>
	)
}

export default PopUp
