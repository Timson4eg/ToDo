import React, { useContext, useState } from 'react'
import TasksList from './HomeComponents/TasksList'
import style from './Home.module.scss'
import TaskForm from './HomeComponents/TaskForm/TaskForm'
import PopUp from '../../ui/PopUp/PopUp'
import { Context } from '../../../providers/TasksProviders'

const Home = () => {
	const { state } = useContext(Context)

	return (
		<div className={style.home}>
			<PopUp></PopUp>
			<TaskForm></TaskForm>
			<TasksList />
			<button onClick={() => console.log(state)}>agdadsg</button>
		</div>
	)
}

export default Home
