import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/style/index.scss'
import TasksProviders from './providers/TasksProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<TasksProviders>
		<App />
	</TasksProviders>
)
