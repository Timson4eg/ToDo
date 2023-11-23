import React, { useContext, useState } from 'react'
import style from './Header.module.scss'
import { Context } from '../../../../../../providers/TasksProviders'
import CustomBtn from '../../../../../ui/CustomBtn/CustomBtn'
import PopUp from '../../../../../ui/PopUp/PopUp'

const HeaderTask = ({ task, key }) => {
	const [checked, setChecked] = useState(false)
	const { tasks, setTasks, popUp, setPopUp } = useContext(Context)
	const handleSubmit = () => {
		setChecked(!checked)
	}

	const removeTask = id => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	return (
		<div className={style.header}>
			<div>
				<h3 className={style.title}>{task.title}</h3>

				<div className={style.status}>
					<input type='checkbox' checked={checked} onChange={handleSubmit} />

					{checked ? <span>complete</span> : <span>in progress</span>}
				</div>
				<CustomBtn
					onClick={() => setPopUp({ ...popUp, visible: true, id: task.id })}
					type='yelowSmallBtn'
				>
					Edit
				</CustomBtn>
			</div>
			<CustomBtn onClick={() => removeTask(task.id)} type='redSmallBtn'>
				Delete
			</CustomBtn>
		</div>
	)
}

export default HeaderTask
