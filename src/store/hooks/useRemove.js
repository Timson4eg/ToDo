import { useContext } from 'react'
import { Context } from '../../providers/TasksProviders'

export const useRemove = id => {
	const { dispatch } = useContext(Context)
	const removeTask = id => {
		dispatch({ type: 'remove', payload: id })
	}
	return { removeTask }
}
