import { useContext } from 'react'

import { Context } from '../../providers/TasksProviders'

export const useToggleStatusTask = id => {
	const { state, dispatch } = useContext(Context)

	const toggleStatusTask = () => {
		dispatch({
			type: 'changeStatus',
			payload: {
				id: id,
				status: !state[id].status
			}
		})
	}
	return { toggleStatusTask }
}
