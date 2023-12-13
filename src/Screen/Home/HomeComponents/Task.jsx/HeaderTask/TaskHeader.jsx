import style from './Header.module.scss'
import Button from '../../../../../ui/Button/Button'
import { useContext } from 'react'
import { Context } from '../../../../../providers/TasksProviders'
import { useRemove } from '../../../../../store/hooks/useRemove'
import { useUpdateStatusTask } from '../../../../../store/hooks/useUpdateStatusTask'

const TaskHeader = ({ task }) => {
	const { updateStatusTask } = useUpdateStatusTask(task.id)
	const { removeTask } = useRemove(task.id)
	const { setPopUp } = useContext(Context)

	const handleSubmit = () => {
		updateStatusTask()
	}
	return (
		<div className={style.header}>
			<h3 className={style.title}>{task.title}</h3>
			<div>
				<div className={style.status}>
					<input
						type='checkbox'
						checked={task.status}
						onChange={handleSubmit}
					/>

					{task.status ? <span>complete</span> : <span>in progress</span>}
				</div>
				<Button
					onClick={() => setPopUp({ visible: true, id: task.id })}
					type='yellowSmallBtn'
				>
					Edit
				</Button>
				<Button onClick={() => removeTask()} type='redSmallBtn'>
					Delete
				</Button>
			</div>
		</div>
	)
}

export default TaskHeader
