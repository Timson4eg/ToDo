import { useUpdateStatusTask } from '../../../../../store/hooks/useUpdateStatusTask'
import { useRemove } from '../../../../../store/hooks/useRemove'
import { useContext } from 'react'
import { Context } from '../../../../../providers/TasksProviders'

export const useHeaderTask = task => {
	const { updateStatusTask } = useUpdateStatusTask(task.id)
	const { removeTask } = useRemove(task.id)
	const { popUp, setPopUp } = useContext(Context)

	const handleSubmit = () => {
		updateStatusTask()
	}

	return { handleSubmit, removeTask, popUp, setPopUp }
}
