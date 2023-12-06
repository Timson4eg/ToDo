import TasksList from './HomeComponents/TasksList'
import style from './Home.module.scss'
import TaskForm from './HomeComponents/TaskForm/TaskForm'
import PopUp from './PopUp/PopUp'

const Home = () => {
	return (
		<div className={style.home}>
			<PopUp />
			<TaskForm />
			<TasksList />
		</div>
	)
}

export default Home
