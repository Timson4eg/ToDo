import { useRemove } from '../../../../../store/hooks/useRemove'
import { useUpdateStatusTask } from '../../../../../store/hooks/useUpdateStatusTask'
import { useTask } from '../../../../../store/hooks/useTask'
import { usePopUp } from '../../../PopUp/usePopUp'

export const useTaskHeader = id => {
	const { task } = useTask(id)
	const { setPopUp } = usePopUp()
	const { updateStatusTask } = useUpdateStatusTask(task.id)
	const { removeTask } = useRemove(task.id)

	return {
		task,
		setPopUp,
		updateStatusTask,
		removeTask
	}
}
