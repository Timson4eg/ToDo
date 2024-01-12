import { useContext } from 'react'
import { Context } from '../../providers/TasksProviders'

export const useRemove = id => {
	const { dispatch, state } = useContext(Context)
	const removeTask = id => {
		dispatch({ type: 'remove', payload: id })
		console.log(state)
	}
	return { removeTask }
}
