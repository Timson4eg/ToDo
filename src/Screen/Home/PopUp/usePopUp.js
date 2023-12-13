import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../providers/TasksProviders'
import { useTask } from '../../../store/hooks/useTask'
import { useInput } from '../../../ui/Input/useInput'

export const usePopUp = () => {
	const { popUp, setPopUp, updateTask } = useContext(Context)
	const { task } = useTask(popUp.id)
	const title = useInput(task.title, { isEmpty: true })
	const description = useInput(task.description, { isEmpty: true })

	useEffect(() => {
		title.setValue(task.title)
		description.setValue(task.description)
	}, [popUp])

	const saveUpdatedTask = () => {
		setPopUp({ ...popUp, visible: false })
		updateTask(title.value, description.value)
	}

	return {
		popUp,
		setPopUp,
		saveUpdatedTask,
		title,
		description
	}
}
