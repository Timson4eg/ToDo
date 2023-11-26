import { useContext, useEffect, useMemo, useState } from 'react'
import { Context } from '../../../providers/TasksProviders'

export const useUpdateTask = (state, dispatch, popUp, setPopUp) => {
	const [title, setTitle] = useState('')
	const [discription, setDiscription] = useState('')
	const [task, setTask] = useState({ title: '', task: '' })

	useEffect(() => {
		setTask({
			...task,
			title: state[popUp.id].title,
			discription: state[popUp.id].discription
		})
	}, [popUp.id])

	const updateTask = () => {
		setPopUp({ ...popUp, visible: false })
		dispatch({
			type: 'edit',
			payload: {
				id: popUp.id,
				title: task.title,
				discription: task.discription
			}
		})
	}

	return {
		updateTask,
		popUp,
		setPopUp,
		task,
		setTask,
		title,
		setTitle,
		discription,
		setDiscription
	}
}
