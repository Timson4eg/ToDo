import { useContext } from 'react'
import { Context } from '../../providers/TasksProviders'

export const useRemove = id => {
	const { dispatch } = useContext(Context)
	const removeTask = () => {
		dispatch({ type: 'remove', payload: id })
	}
	return { removeTask }
}
