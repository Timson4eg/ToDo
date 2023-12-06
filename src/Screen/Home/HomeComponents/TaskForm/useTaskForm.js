import { useAddTask } from '../../../../store/hooks/useAddTask'
import { useInput } from '../../../../ui/Input/useInput'

export const useTaskForm = () => {
	const { addTask } = useAddTask()

	const title = useInput('', { isEmpty: true })
	const description = useInput('', { isEmpty: true })

	const handleSubmit = e => {
		e.preventDefault()
		addTask(title.value, description.value)
		title.setValue('')
		title.setIsDirty(false)
		description.setValue('')
		description.setIsDirty(false)
	}

	return {
		title,
		description,
		handleSubmit
	}
}
