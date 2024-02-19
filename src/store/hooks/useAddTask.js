import { useContext } from 'react'

import { Context } from '../../providers/TasksProviders'
import { useTasks } from '../../hooks/useTasks'

export const useAddTask = () => {
	const { dispatch, lastKey, setLastKey } = useContext(Context)
	console.log(1)
	const addTask = (title, description) => {
		setLastKey(lastKey + 1)
		dispatch({
			type: 'add',
			payload: {
				id: String(lastKey) || 1,
				title,
				description,
				status: false
			}
		})
	}

	return { addTask }
}
