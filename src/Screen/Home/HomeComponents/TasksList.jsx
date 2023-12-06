import style from './TasksList.module.scss'
import Task from './Task.jsx/Task'
import { useTasks } from '../../../hooks/useTasks'

const TasksList = () => {
	const { ids } = useTasks()

	return (
		<div className={style.list}>
			{ids.map(id => (
				<Task id={id} key={id} />
			))}
		</div>
	)
}

export default TasksList
