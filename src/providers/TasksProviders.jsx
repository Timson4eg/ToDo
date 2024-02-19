import React, { createContext, useEffect, useReducer, useState } from 'react'
import reducer from '../store/reducer'

export const Context = createContext('')

const TasksProviders = ({ children }) => {
	const tasks = {
		1: {
			id: '1',
			title: 'Create project',
			description:
				'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
			status: false
		},
		2: {
			id: '2',
			title: 'Prepare project',
			description: 'install dependence, reset css style',
			status: true
		},
		3: {
			id: '3',
			title: 'new Component',
			description: ' create new Component and logic',
			status: false
		},
		5: {
			id: '3',
			title: 'new Component',
			description: ' create new Component and logic',
			status: false
		}
	}
	const [lastKey, setLastKey] = useState(6)
	const [state, dispatch] = useReducer(reducer, tasks)
	const [checked, setChecked] = useState(false)
	const [error, setError] = useState(false)

	return (
		<Context.Provider
			value={{
				state,
				dispatch,
				checked,
				setChecked,
				error,
				setError,
				lastKey,
				setLastKey
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default TasksProviders
