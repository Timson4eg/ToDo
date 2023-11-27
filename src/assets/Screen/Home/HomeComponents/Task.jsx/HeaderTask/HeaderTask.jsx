import React, { useContext, useState } from 'react'
import style from './Header.module.scss'
import { Context } from '../../../../../../providers/TasksProviders'
import Btn from '../../../../../ui/Btn/Btn'
import PopUp from '../../../../../ui/PopUp/PopUp'
import { useRemove } from '../../../../../utils/hooks/useRemove'

const HeaderTask = ({ task }) => {
	const [checked, setChecked] = useState(false)
	const { popUp, setPopUp } = useContext(Context)

	const { removeTask } = useRemove(task.id)

	const handleSubmit = () => {
		setChecked(!checked)
	}

	return (
		<div className={style.header}>
			<h3 className={style.title}>{task.title}</h3>
			<div>
				<div className={style.status}>
					<input type='checkbox' checked={checked} onChange={handleSubmit} />

					{checked ? <span>complete</span> : <span>in progress</span>}
				</div>
				<Btn
					onClick={() => setPopUp({ ...popUp, visible: true, id: task.id })}
					type='yelowSmallBtn'
				>
					Edit
				</Btn>
				<Btn onClick={() => removeTask(task.id)} type='redSmallBtn'>
					Delete
				</Btn>
			</div>
		</div>
	)
}

export default HeaderTask
