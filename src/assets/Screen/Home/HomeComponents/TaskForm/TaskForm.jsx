import React, { useContext, useState } from 'react'
import style from './TaskForm.module.scss'
import { Context } from '../../../../../providers/TasksProviders'
import Input from '../../../../ui/Input/Input'
import Btn from '../../../../ui/Btn/Btn'
import TextArea from '../../../../ui/TextArea/TextArea'
import { useAddTask } from '../../../../utils/hooks/useAddTask'

const TaskForm = () => {
	// const [title, setTitle] = useState('')
	// const [discription, setDiscription] = useState('')

	const { addTask, task, setTask } = useAddTask()

	return (
		<form className={style.createform}>
			<Input
				placeholder='Task name'
				name='title'
				value={task.title}
				onChange={e => setTask({ ...task, title: e.target.value })}
				type='text'
			/>

			<TextArea
				placeholder='Discription'
				name='discription'
				value={task.discription}
				onChange={e => setTask({ ...task, discription: e.target.value })}
				type='text'
			/>
			<Btn onClick={addTask} type='greenBigBtn'>
				Create
			</Btn>
		</form>
	)
}

export default TaskForm
