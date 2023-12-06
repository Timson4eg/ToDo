import { useContext } from 'react'
import { Context } from '../../../../providers/TasksProviders'

export const useTask = task => {
	const { state } = useContext(Context)

	return {
		state
	}
}
