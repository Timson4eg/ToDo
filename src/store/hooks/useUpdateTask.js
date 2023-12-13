import { useEffect, useState } from 'react'

export const useUpdateTask = ({ dispatch, id }) => {
	const updateTask = (title, description) => {
		dispatch({
			type: 'edit',
			payload: {
				id: id,
				title,
				description
			}
		})
	}

	return {
		updateTask
	}
}
