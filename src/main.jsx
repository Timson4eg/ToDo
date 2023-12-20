import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/style/index.scss'
import TasksProviders from './providers/TasksProviders.jsx'
import HiddenInterfaceProviders from './providers/HiddenInterfaceProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<TasksProviders>
		<HiddenInterfaceProviders>
			<App />
		</HiddenInterfaceProviders>
	</TasksProviders>
)
