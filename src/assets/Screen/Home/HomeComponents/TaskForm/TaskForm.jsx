import React, { useContext, useState } from 'react'
import style from './TaskForm.module.scss'
import { Context } from '../../../../../providers/TasksProviders'
import CustomInput from '../../../../ui/CustomInput/CustomInput'
import CustomBtn from '../../../../ui/CustomBtn/CustomBtn'
import CustomTextArea from '../../../../ui/CustomTextArea/CustomTextArea'

const TaskForm = () => {
	// title
	// 		discription:
	const [title, setTitle] = useState('')
	const [discription, setDiscription] = useState('')
	const { tasks, setTasks } = useContext(Context)

	const onSubmit = e => {
		e.preventDefault()
		const newTask = {
			id: Date.now(),
			title,
			discription,
			status: false
		}
		setTasks([...tasks, newTask])
		setTitle('')
		setDiscription('')
	}
	return (
		<form className={style.createform}>
			<CustomInput
				placeholder='Task name'
				name='title'
				value={title}
				onChange={e => setTitle(e.target.value)}
				type='text'
			/>

			<CustomTextArea
				placeholder='Discription'
				name='discription'
				value={discription}
				onChange={e => setDiscription(e.target.value)}
				type='text'
			/>
			<CustomBtn onClick={onSubmit} type='greenBigBtn'>
				Create
			</CustomBtn>
		</form>
	)
}

export default TaskForm
