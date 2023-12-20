import { createContext, useState } from 'react'

export const InterfaceContext = createContext('')

const HiddenInterfaceProviders = ({ children }) => {
	const [popUp, setPopUp] = useState({ visible: false, id: 1 })
	return (
		<InterfaceContext.Provider value={{ popUp, setPopUp }}>
			{children}
		</InterfaceContext.Provider>
	)
}
export default HiddenInterfaceProviders
