import { useContext, useState } from 'react'
import { Context } from '../../../providers/TasksProviders'

export const useAddTask = () => {
	const { state, dispatch } = useContext(Context)
	const [title, setTitle] = useState('')
	const [task, setTask] = useState({ title: '', discription: '' })
	const [discription, setDiscription] = useState('')

	const addTask = e => {
		e.preventDefault()
		dispatch({
			type: 'add',
			payload: {
				id: Number(Object.keys(state).reverse()[0]) + 1 || 1,
				title: task.title,
				discription: task.discription,
				state: false
			}
		})
		setTask({ title: '', discription: '' })
	}

	return { addTask, task, setTask }
}
