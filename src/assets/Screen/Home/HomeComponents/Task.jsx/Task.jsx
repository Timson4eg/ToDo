import style from './Task.module.scss'

import HeaderTask from './HeaderTask/HeaderTask.jsx'

const Task = ({ task }) => {
	return (
		<div className={style.task}>
			<div className={style.wrapper}>
				<HeaderTask task={task} />
				<p className={style.discription}>{task.discription}</p>
			</div>
		</div>
	)
}

export default Task
