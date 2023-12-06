import { useContext, useState } from 'react'

import { useValidateInput } from './useValidateInput'
import { Context } from '../providers/TasksProviders'

export const useInput = (initializationValue, validations) => {
	const [value, setValue] = useState(initializationValue)
	const [isDirty, setIsDirty] = useState(false)
	const valid = useValidateInput(value, validations)

	const onChange = e => {
		setValue(e.target.value)
	}
	const onBlur = e => {
		setIsDirty(true)
	}
	return { value, onChange, onBlur, isDirty, ...valid, setValue, setIsDirty }
}
