import style from './Task.module.scss'
import TaskHeader from './TaskHeader/TaskHeader.jsx'
import TaskDescription from './TaskDescription/TaskDescription.jsx'

const Task = ({ id }) => {
	return (
		<div className={style.task}>
			<div className={style.wrapper}>
				<TaskHeader id={id} />
				<TaskDescription id={id}></TaskDescription>
			</div>
		</div>
	)
}

export default Task
