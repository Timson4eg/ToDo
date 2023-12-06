import style from './Task.module.scss'
import HeaderTask from './HeaderTask/HeaderTask.jsx'
import { useTask } from './useTask.js'

const Task = ({ id }) => {
	const { task } = useTask(id)

	return (
		<div className={style.task}>
			<div className={style.wrapper}>
				<HeaderTask task={task} />
				<div className={style.description}>{task.description}</div>
			</div>
		</div>
	)
}

export default Task
