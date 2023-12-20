import { useContext, useState } from 'react'

import { useValidateInput } from './useValidateInput'
import { Context } from '../../providers/TasksProviders'

export const useInput = (initializationValue, validations) => {
	const [value, setValue] = useState(initializationValue)
	const [isTouched, setTouched] = useState(false)
	const valid = useValidateInput(value, validations)

	const onChange = e => {
		setValue(e.target.value)
		setTouched(true)
	}

	const onInput = e => {
		setTouched(true)
	}
	return { value, onChange, onInput, isTouched, ...valid, setValue, setTouched }
}
