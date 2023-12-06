import { useEffect, useState } from 'react'

export const useUpdateTask = ({ dispatch, id, updatedDateTask }) => {
	const updateTask = () => {
		dispatch({
			type: 'edit',
			payload: {
				id: id,
				title: updatedDateTask.title,
				description: updatedDateTask.description
			}
		})
	}

	return {
		updateTask
	}
}
