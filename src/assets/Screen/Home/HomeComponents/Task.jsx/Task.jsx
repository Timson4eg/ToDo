import style from './Task.module.scss'

import HeaderTask from './HeaderTask/HeaderTask.jsx'

const Task = ({ task }) => {
	return (
		<div className={style.task}>
			<div className={style.wrapper}>
				<HeaderTask task={task} />
				<div className={style.discription}>{task.discription}</div>
			</div>
		</div>
	)
}

export default Task
