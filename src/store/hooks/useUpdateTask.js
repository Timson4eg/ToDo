import { useContext } from 'react'
import { Context } from '../../providers/TasksProviders'

export const useUpdateTask = id => {
	const { dispatch } = useContext(Context)

	const updateTask = (title, description) => {
		dispatch({
			type: 'edit',
			payload: {
				id,
				title,
				description
			}
		})
	}

	return {
		updateTask
	}
}
