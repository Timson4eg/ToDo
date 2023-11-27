export default function (state, action) {
	switch (action.type) {
		case 'add':
			return {
				...state,
				[action.payload.id]: {
					id: String(action.payload.id),
					title: action.payload.title,
					discription: action.payload.discription,
					state: action.payload.state
				}
			}

		case 'remove':
			const newState = { ...state }
			delete newState[action.payload]
			return (state = { ...newState })

		case 'edit':
			return {
				...state,
				[action.payload.id]: {
					id: String(action.payload.id),
					title: action.payload.title,
					discription: action.payload.discription,
					state: action.payload.state
				}
			}

		default:
			return state
	}
}
