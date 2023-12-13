import style from './Task.module.scss'
import TaskHeader from './HeaderTask/TaskHeader.jsx'
import { useTask } from '../../../../store/hooks/useTask.js'

const Task = ({ id }) => {
	const { task } = useTask(id)

	return (
		<div className={style.task}>
			<div className={style.wrapper}>
				<TaskHeader task={task} />
				<div className={style.description}>{task.description}</div>
			</div>
		</div>
	)
}

export default Task
