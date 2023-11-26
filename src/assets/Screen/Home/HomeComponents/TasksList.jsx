import React, { useContext, useState } from 'react'
import style from './TasksList.module.scss'
import Task from './Task.jsx/Task'
import { Context } from '../../../../providers/TasksProviders'

const TasksList = () => {
	const { state, dispatch } = useContext(Context)

	return (
		<div className={style.list}>
			{Object.keys(state).map(task => (
				<Task task={state[task]} key={state[task].id} />
			))}
		</div>
	)
}

export default TasksList
