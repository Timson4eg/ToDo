import style from './Header.module.scss'
import Button from '../../../../../ui/Button/Button'

import { useTaskHeader } from './useTaskHeader'

const TaskHeader = ({ id }) => {
	const { task, setPopUp, updateStatusTask, removeTask } = useTaskHeader(id)

	return (
		<div className={style.header}>
			<h3 className={style.title}>{task.title}</h3>
			<div>
				<div className={style.status}>
					<input
						type='checkbox'
						checked={task.status}
						onChange={() => updateStatusTask()}
					/>

					{task.status ? <span>complete</span> : <span>in progress</span>}
				</div>
				<Button
					onClick={() => setPopUp({ visible: true, id: task.id })}
					type='yellowSmallBtn'
				>
					Edit
				</Button>
				<Button onClick={() => removeTask(id)} type='redSmallBtn'>
					Delete
				</Button>
			</div>
		</div>
	)
}

export default TaskHeader
