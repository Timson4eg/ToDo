import { useRemove } from '../../../../../store/hooks/useRemove'
import { useToggleStatusTask } from '../../../../../store/hooks/useToggleStatusTask'
import { useTask } from '../../../../../store/hooks/useTask'
import { usePopUp } from '../../../PopUp/usePopUp'

export const useTaskHeader = id => {
	const { task } = useTask(id)
	const { setPopUp } = usePopUp()
	const { toggleStatusTask } = useToggleStatusTask(task.id)
	const { removeTask } = useRemove(task.id)

	return {
		task,
		setPopUp,
		toggleStatusTask,
		removeTask
	}
}
