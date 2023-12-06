import style from './Header.module.scss'
import Button from '../../../../../ui/Button/Button'
import { useHeaderTask } from './useHeaderTask'

const HeaderTask = ({ task }) => {
	const { handleSubmit, removeTask, popUp, setPopUp } = useHeaderTask(task)

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
					onClick={() => setPopUp({ ...popUp, visible: true, id: task.id })}
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

export default HeaderTask
