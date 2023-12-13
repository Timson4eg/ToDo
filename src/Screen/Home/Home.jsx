import TasksList from './HomeComponents/TasksList'
import style from './Home.module.scss'
import TaskForm from './HomeComponents/TaskForm/TaskForm'
import PopUp from './PopUp/PopUp'
import { useContext } from 'react'
import { Context } from '../../providers/TasksProviders'

const Home = () => {
	const { state } = useContext(Context)
	const chek = () => {
		console.log(state)
	}
	return (
		<div className={style.home}>
			<PopUp />
			<TaskForm />
			<TasksList />
			<button onClick={chek}>qqqYopta</button>
		</div>
	)
}

export default Home
