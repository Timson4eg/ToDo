export default function (state, action) {
	switch (action.type) {
		case 'add':
			return {
				...state,
				[action.payload.id]: {
					id: String(action.payload.id),
					title: action.payload.title,
					description: action.payload.description,
					status: action.payload.status
				}
			}

		case 'remove':
			const newState = { ...state }
			delete newState[action.payload]
			return { ...newState }

		case 'edit':
			return {
				...state,
				[action.payload.id]: {
					...state[action.payload.id],
					id: String(action.payload.id),
					title: action.payload.title,
					description: action.payload.description
				}
			}
		case 'changeStatus':
			return {
				...state,
				[action.payload.id]: {
					...state[action.payload.id],
					status: action.payload.status
				}
			}

		default:
			return state
	}
}
