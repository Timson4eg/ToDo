import { useContext } from 'react'

import { Context } from '../../providers/TasksProviders'

export const useAddTask = () => {
	const { state, dispatch } = useContext(Context)

	const addTask = (title, description) => {
		dispatch({
			type: 'add',
			payload: {
				//добавляю  id в task на 1 больше от последнего  task.id если нету задаач присваиваю 1
				// id: Number(Object.keys(state).reverse()[0]) + 1 || 1,
				id: Number(Object.keys(state).at(-1)) + 1 || 1,
				title,
				description,
				status: false
			}
		})
	}

	return { addTask }
}
