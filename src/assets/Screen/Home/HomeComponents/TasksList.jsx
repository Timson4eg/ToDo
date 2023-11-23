import React, { useContext, useState } from 'react'
import style from './TasksList.module.scss'
import Task from './Task.jsx/Task'
import { Context } from '../../../../providers/TasksProviders'

const TasksList = () => {
	const { tasks, setTasks } = useContext(Context)

	return (
		<div className={style.list}>
			{tasks.map(task => (
				<Task task={task} key={task.id} />
			))}
		</div>
	)
}

export default TasksList
