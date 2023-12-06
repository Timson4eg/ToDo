import cn from 'clsx'
import style from './PopUp.module.scss'
import Input from '../../../ui/Input/Input'
import Button from '../../../ui/Button/Button'
import TextArea from '../../../ui/TextArea/TextArea'
import { usePopUp } from './usePopUp'

const PopUp = () => {
	const {
		popUp,
		setPopUp,
		updatedDateTask,
		setUpdatedDateTask,
		saveUpdatedTask
	} = usePopUp()

	return (
		<div
			className={cn(style.popUp, { [style.active]: popUp.visible })}
			onClick={() => setPopUp({ ...popUp, visible: false })}
		>
			<div className={style.popUpContent} onClick={e => e.stopPropagation()}>
				<Input
					name='title'
					value={updatedDateTask.title}
					onChange={e =>
						setUpdatedDateTask({ ...updatedDateTask, title: e.target.value })
					}
					type='text'
				/>
				<TextArea
					name='description'
					value={updatedDateTask.description}
					onChange={e =>
						setUpdatedDateTask({
							...updatedDateTask,
							description: e.target.value
						})
					}
					type='text'
				></TextArea>
				<input />

				<Button onClick={saveUpdatedTask} type='greenBigBtn'>
					Save
				</Button>
			</div>
		</div>
	)
}

export default PopUp
