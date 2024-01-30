import { useContext, useEffect, useState } from 'react'
import { useTask } from '../../../store/hooks/useTask'
import { useInput } from '../../../ui/Input/useInput'
import { useUpdateTask } from '../../../store/hooks/useUpdateTask'
import { InterfaceContext } from '../../../providers/HiddenInterfaceProviders'

export const usePopUp = () => {
	const { popUp, setPopUp } = useContext(InterfaceContext)

	const { task } = useTask(popUp.id)
	const { updateTask } = useUpdateTask(popUp.id)

	const title = useInput('', { isEmpty: true })
	const description = useInput('', { isEmpty: true })

	useEffect(() => {
		title.setValue(task?.title)
		description.setValue(task?.description)
	}, [popUp])

	const saveUpdatedTask = id => {
		if (title.value === '' || description.value === '') {
			title.setTouched(true)
			description.setTouched(true)
			return
		}
		setPopUp({ ...popUp, visible: false })
		updateTask(title.value, description.value)
	}

	return { popUp, setPopUp, saveUpdatedTask, title, description }
}
