import { useContext } from 'react'

import { Context } from '../../providers/TasksProviders'

export const useUpdateStatusTask = id => {
	const { state, dispatch } = useContext(Context)

	const updateStatusTask = () => {
		dispatch({
			type: 'changeStatus',
			payload: {
				id: id,
				status: !state[id].status
			}
		})
	}
	return { updateStatusTask }
}
