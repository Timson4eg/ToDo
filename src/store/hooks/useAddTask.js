import { useContext, useState } from 'react'

import { Context } from '../../providers/TasksProviders'

export const useAddTask = () => {
	const { state, dispatch } = useContext(Context)

	const addTask = (title, description) => {
		dispatch({
			type: 'add',
			payload: {
				id: Number(Object.keys(state).reverse()[0]) + 1 || 1,
				title,
				description,
				status: false
			}
		})
	}

	return { addTask }
}
