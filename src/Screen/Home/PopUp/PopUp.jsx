import cn from 'clsx'
import style from './PopUp.module.scss'
import Input from '../../../ui/Input/Input'
import Button from '../../../ui/Button/Button'
import TextArea from '../../../ui/TextArea/TextArea'
import { usePopUp } from './usePopUp'

const PopUp = () => {
	const { popUp, setPopUp, saveUpdatedTask, title, description } = usePopUp()

	return (
		<div
			className={cn(style.popUp, { [style.active]: popUp.visible })}
			onClick={() => setPopUp({ ...popUp, visible: false })}
		>
			<div className={style.popUpContent} onClick={e => e.stopPropagation()}>
				<Input
					name='title'
					value={title.value}
					onChange={e => title.setValue(e.target.value)}
					onInput={() => title.onInput()}
					type='text'
				/>
				{title.isEmpty && title.isTouched && (
					<div className={style.error}>Task name must be field</div>
				)}

				<TextArea
					name='description'
					value={description.value}
					onChange={e => description.setValue(e.target.value)}
					type='text'
					onInput={() => description.onInput()}
				></TextArea>
				{description.isEmpty && description.isTouched && (
					<div className={style.error}>Task name must be field</div>
				)}
				<input />

				<Button
					disabled={title.inputValidate || description.inputValidate}
					onClick={() => {
						saveUpdatedTask(title, description)
					}}
					type='greenBigBtn'
				>
					Save
				</Button>
			</div>
		</div>
	)
}

export default PopUp
