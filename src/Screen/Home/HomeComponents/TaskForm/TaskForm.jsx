import style from './TaskForm.module.scss'
import Input from '../../../../ui/Input/Input'
import Button from '../../../../ui/Button/Button'
import TextArea from '../../../../ui/TextArea/TextArea'
import { useTaskForm } from './useTaskForm'

const TaskForm = () => {
	const { handleSubmit, title, description } = useTaskForm()

	return (
		<form className={style.createForm}>
			<Input
				placeholder='Task name'
				name='title'
				value={title.value}
				onChange={e => title.onChange(e)}
				type='text'
				onBlur={e => title.onBlur(e)}
			/>
			{title.isDirty && title.isEmpty && (
				<div className={style.error}>Task name must be field</div>
			)}

			<TextArea
				placeholder='Description'
				name='description'
				value={description.value}
				onChange={e => description.onChange(e)}
				onBlur={e => description.onBlur(e)}
				type='text'
			/>
			{description.isDirty && description.isEmpty && (
				<div className={style.error}>Description must be field</div>
			)}
			<Button
				onClick={e => handleSubmit(e)}
				disabled={title.inputValidate || description.inputValidate}
				type='greenBigBtn'
			>
				Create
			</Button>
		</form>
	)
}

export default TaskForm
