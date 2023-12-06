import style from './Task.module.scss'
import HeaderTask from './HeaderTask/HeaderTask.jsx'
import { useTask } from './useTask.js'

const Task = ({ id }) => {
	const { state } = useTask()

	return (
		<div className={style.task}>
			<div className={style.wrapper}>
				<HeaderTask task={state[id]} />
				<div className={style.description}>{state[id].description}</div>
			</div>
		</div>
	)
}

export default Task
