import { useContext } from 'react'
import { Context } from '../providers/TasksProviders'

export const useTasks = () => {
	const { state } = useContext(Context)
	const ids = Object.keys(state)
	return { ids }
}
