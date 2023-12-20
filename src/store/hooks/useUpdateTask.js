import { useContext } from 'react'
import { Context } from '../../providers/TasksProviders'
import { InterfaceContext } from '../../providers/HiddenInterfaceProviders'

export const useUpdateTask = () => {
	const { dispatch } = useContext(Context)

	const updateTask = (id, title, description) => {
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
