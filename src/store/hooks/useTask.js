import { useContext } from 'react'
import { Context } from '../../providers/TasksProviders'

export const useTask = id => {
	const { state } = useContext(Context)
	const task = state[id]

	return { task }
}
