import { createContext, useContext, useState } from 'react'
import { Context } from './TasksProviders'

export const InterfaceContext = createContext('')

const HiddenInterfaceProviders = ({ children }) => {
	const { state } = useContext(Context)
	const [popUp, setPopUp] = useState({
		visible: false,
		id: Object.keys(state)[0]
	})
	return (
		<InterfaceContext.Provider value={{ popUp, setPopUp }}>
			{children}
		</InterfaceContext.Provider>
	)
}
export default HiddenInterfaceProviders
