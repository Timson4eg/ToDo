import { useEffect, useState } from 'react'
import { useAddTask } from '../../../../store/hooks/useAddTask'
import { useInput } from '../../../../ui/Input/useInput'

export const useTaskForm = () => {
	const { addTask } = useAddTask()

	const title = useInput('', { isEmpty: false })
	const description = useInput('', { isEmpty: false })

	const handleSubmit = e => {
		e.preventDefault()
		if (title.value === '' || description.value === '') {
			title.setTouched(true)
			description.setTouched(true)
			return
		}
		addTask(title.value, description.value)
		title.setValue('')
		description.setValue('')
		title.setTouched(false)
		description.setTouched(false)
	}

	return {
		handleSubmit,
		title,
		description
	}
}
