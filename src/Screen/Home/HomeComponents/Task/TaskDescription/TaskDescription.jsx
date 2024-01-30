import React from 'react'
import style from './TaskDescription.module.scss'
import { useTask } from '../../../../../store/hooks/useTask'

const TaskDescription = ({ id }) => {
	const { task } = useTask(id)
	return <div className={style.description}>{task.description}</div>
}

export default TaskDescription
