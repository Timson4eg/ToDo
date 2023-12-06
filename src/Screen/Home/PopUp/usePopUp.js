import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../providers/TasksProviders'
// updateTask,
export const usePopUp = () => {
	const { popUp, setPopUp, updateTask, updatedDateTask, setUpdatedDateTask } =
		useContext(Context)

	const saveUpdatedTask = () => {
		setPopUp({ ...popUp, visible: false })
		updateTask()
		setUpdatedDateTask({ title: '', description: '' })
	}

	return {
		popUp,
		setPopUp,
		updatedDateTask,
		setUpdatedDateTask,
		saveUpdatedTask
	}
}
