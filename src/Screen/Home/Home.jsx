import TasksList from './HomeComponents/TaskList/TasksList'
import style from './Home.module.scss'
import TaskForm from './HomeComponents/TaskForm/TaskForm'
import PopUp from './PopUp/PopUp'
import { useContext } from 'react'
import { Context } from '../../providers/TasksProviders'

const Home = () => {
	const { state } = useContext(Context)

	return (
		<div className={style.home}>
			<PopUp />
			<TaskForm />
			<TasksList />
		</div>
	)
}

export default Home
